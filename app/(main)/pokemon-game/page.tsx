"use client";
import { useEffect, useState } from "react";
import { Pokemon } from "./type";
import { Dialog } from '@headlessui/react';
import axios from "axios";
import Card from "@/app/components/Card";

const PokemonGame = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [flippedCard, setFlippedCard] = useState<number[]>([]);
  const [matchCards, setMatchCards] = useState<number[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
        const results = response.data.results;

        const pokemonPromises = results.map(async (pokemon: any) => {
          const res = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: res.data.sprites.other['official-artwork'].front_default || '/default-image.png'
          };
        });

        const pokemonData = await Promise.all(pokemonPromises);
        setPokemons([...pokemonData, ...pokemonData].sort(() => Math.random() - 0.5));
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedCard.length === 2 || matchCards.includes(index)) return;
    setFlippedCard([...flippedCard, index]);

    if (flippedCard.length === 1) {
      const firstIndex = flippedCard[0];
      const secondIndex = index;

      // インデックスが有効か確認
      if (pokemons[firstIndex] && pokemons[secondIndex]) {
        if (pokemons[firstIndex].name === pokemons[secondIndex].name) {
          setMatchCards([...matchCards, firstIndex, secondIndex]);
        }
      }

      setTimeout(() => setFlippedCard([]), 5000);
    }
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
    setSelectedPokemon(null);
  };

  const handleCardClickModal = (index: number) => {
    handleCardClick(index);
    setSelectedPokemon(pokemons[index]);
    setIsOpenModal(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 w-full">
        {pokemons.map((pokemon, index) => (
          <Card
            image={pokemon.image}
            key={index}
            onClick={() => handleCardClickModal(index)}
            isFlipped={flippedCard.includes(index)}
            isMatched={matchCards.includes(index)}
          />
        ))}
      </div>
      <Dialog
        className="fixed inset-0 z-50 flex items-center justify-center"
        open={isOpenModal} onClose={handleModalClose}>
        <div className="fixed inset-0 bg-black opacity-30 z-40" />
        <div className="bg-white p-4 rounded z-50 flex flex-col items-center">
          {selectedPokemon && (
            <div className="flex flex-col items-center justify-center">
              <img src={selectedPokemon.image} alt={selectedPokemon.name} className="w-48 h-48 object-contain" />
              <p className="mt-4">{selectedPokemon.name}</p>
            </div>
          )}
          <button
            className="bg-white text-black rounded-lg px-3 py-2 mt-4 border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 hover:text-slate-500"
            onClick={handleModalClose}
          >
            閉じる
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default PokemonGame;
