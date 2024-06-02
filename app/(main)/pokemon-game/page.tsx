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
  const [isCongratulationsOpen, setIsCongratulationsOpen] = useState<boolean>(false);
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
          setIsCongratulationsOpen(true); // おめでとうポップアップを表示
        }
      }

      setTimeout(() => setFlippedCard([]), 3500);
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

  const handleCongratulationsClose = () => {
    setIsCongratulationsOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-green-400">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 w-full max-w-screen-xl mx-auto">
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
        <div className="fixed inset-0 bg-black opacity-50 z-40" />
        <div className="bg-white p-6 rounded-lg z-50 flex flex-col items-center shadow-lg">
          {selectedPokemon && (
            <div className="flex flex-col items-center justify-center">
              <img src={selectedPokemon.image} alt={selectedPokemon.name} className="w-48 h-48 object-contain" />
              <p className="mt-4 text-lg font-bold">{selectedPokemon.name}</p>
            </div>
          )}
          <button
            className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 border-b-4 border-red-700 active:border-b-2 hover:bg-red-400"
            onClick={handleModalClose}
          >
            閉じる
          </button>
        </div>
      </Dialog>
      <Dialog
        className="fixed inset-0 z-50 flex items-center justify-center"
        open={isCongratulationsOpen} onClose={handleCongratulationsClose}>
        <div className="fixed inset-0 bg-black opacity-50 z-40" />
        <div className="bg-gradient-to-r from-orange-300 to-yellow-500 p-6 rounded-lg z-50 flex flex-col items-center shadow-lg">
          <p className="mt-4 text-2xl text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 animate-pulse">
            おめでとう！その調子で頑張って！
          </p>
          <button
            className="bg-green-500 text-white rounded-lg px-4 py-2 mt-4 border-b-4 border-green-700 active:border-b-2 hover:bg-green-400"
            onClick={handleCongratulationsClose}
          >
            閉じる
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default PokemonGame;
