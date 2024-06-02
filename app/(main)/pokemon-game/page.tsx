"use client";
import { useEffect, useState } from "react";
import { Pokemon } from "./type";
import { Dialog } from '@headlessui/react';
import axios from "axios";
import Image from 'next/image';
import Card from "@/app/components/Card";

const PokemonGame = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [flippedCard, setFlippedCard] = useState<number[]>([]);
  const [matchCards, setMatchCards] = useState<number[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isCongratulationsOpen, setIsCongratulationsOpen] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(300); // タイムリミットを60秒に設定
  const [score, setScore] = useState<number>(0); // スコア初期値を設定
  const [isGameOver, setIsGameOver] = useState<boolean>(false); // ゲームオーバー状態を管理

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
        const results = response.data.results;
        console.log(results);

        const pokemonPromises = results.map(async (pokemon: any) => {
          const res = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: res.data.sprites.other['official-artwork'].front_default || '画像がありません'
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

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsGameOver(true);
    }
  }, [timeLeft]);

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
          setScore(score + 10); // スコアを加算
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

  const handleRestart = () => {
    setTimeLeft(60);
    setScore(0);
    setMatchCards([]);
    setIsGameOver(false);
    setIsCongratulationsOpen(false);
    setSelectedPokemon(null);
    setFlippedCard([]);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-green-400 relative">
      <div className="absolute top-4 left-40">
        <div className="bg-white rounded-full p-4 shadow-md flex items-center justify-center w-32 h-32">
          <div className="text-center">
            <div className="text-xl font-bold">残り時間</div>
            <div className="text-4xl font-bold">{timeLeft}s</div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-40">
        <div className="bg-white rounded-full p-4 shadow-md flex items-center justify-center w-32 h-32">
          <div className="text-center">
            <div className="text-xl font-bold">Score</div>
            <div className="text-4xl font-bold">{score}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 w-full max-w-screen-xl mx-auto">
        {pokemons.map((pokemon, index) => (
          
          <Card
            image={pokemon.image}
            key={index}
            onClick={() => handleCardClickModal(index)}
            isFlipped={flippedCard.includes(index)}
            isMatched={matchCards.includes(index)}
            number={index + 1}
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
              <Image src={selectedPokemon.image} alt={selectedPokemon.name} width={192} height={192} className="object-contain" />
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
          <p className="mt-4 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 animate-pulse">
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
      <Dialog
        className="fixed inset-0 z-50 flex items-center justify-center"
        open={isGameOver} onClose={handleRestart}>
        <div className="fixed inset-0 bg-black opacity-50 z-40" />
        <div className="bg-gradient-to-r from-red-300 to-pink-500 p-6 rounded-lg z-50 flex flex-col items-center shadow-lg">
          <p className="mt-4 text-2xl font-extrabold text-white">時間切れ！ゲームオーバー</p>
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 border-b-4 border-blue-700 active:border-b-2 hover:bg-blue-400"
            onClick={handleRestart}
          >
            もう一度
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default PokemonGame;
