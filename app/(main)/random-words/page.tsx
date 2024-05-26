"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { wordsList } from "./data";
import { RandomWordsChange } from "./customHook";

const RandomWords: NextPage = () => {
  const {
    currentWord,
    wordsChange,
  } = RandomWordsChange();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{currentWord}</h1>
        <button
          onClick={wordsChange}
          className="mt-4 px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md
           hover:bg-blue-700 transition duration-300"
        >
          他の名言を見る
        </button>
      </div>
    </div>
  );
};

export default RandomWords;
