"use client";

import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import Card from "@/app/components/Card";
import Link from "next/link";
import { PokemonGameText } from "./cosumHook";

const PokemonGame = () => {
  const {
    pokemons,
    flippedCard,
    matchCards,
    isOpenModal,
    isCongratulationsOpen,
    selectedPokemon,
    timeLeft,
    score,
    isGameOver,
    handleModalClose,
    handleCardClickModal,
    handleCongratulationsClose,
    handleRestart,
  } = PokemonGameText();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 relative">
      {/* TODO コンポーネント化 */}
      <div className="absolute top-4 left-40">
        <div className="bg-indigo-700 text-white rounded-2xl p-4 shadow-lg flex items-center justify-center w-32 h-32">
          <div className="text-center">
            <div className="text-xl font-bold">残り時間</div>
            <div className="text-4xl font-bold">{timeLeft}s</div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-40">
        <div className="bg-green-600 text-white rounded-2xl p-4 shadow-lg flex items-center justify-center w-32 h-32">
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
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-lg z-50 flex flex-col items-center shadow-lg">
          <p className="mt-4 text-white text-2xl font-extrabold text-transparent">
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
        <div className="bg-gradient-to-r from-red-300 to-pink-500 p-6 rounded-lg z-50 flex flex-col items-center shadow-lg gap-2">
          <p className="mt-4 text-2xl font-extrabold text-white">時間切れ！ゲームオーバー</p>
          <p className="text-white text-xl">
            あなたのスコアは{score}点でした
          </p>
          <button
            className="bg-green-500 text-white rounded-lg px-4 py-2 mt-4 border-b-4 border-green-700 active:border-b-2 hover:bg-green-600"
            onClick={handleRestart}
          >
            もう一度
          </button>
          <Link href={"/modal-popup"}>
            <button
              className="bg-gray-500 text-white rounded-lg px-4 py-2 mt-4 border-b-4 border-gray-700 active:border-b-2 hover:bg-gray-600"
            >
              やめておく
            </button>
          </Link>
        </div>
      </Dialog>
    </div>
  );
};

export default PokemonGame;
