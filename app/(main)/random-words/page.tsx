"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

const wordsList = [
  "「想像力は知識より重要だ。知識には限界があるが、想像力は世界を包み込む。」",
  "「あなたが見たいと思う変化に、あなた自身がなるべきです。」",
  "「偉大な達成の裏には、必ず困難がある。」",
  "「世界で最も美しいものは見ることも触れることもできない。それは心で感じるものです。」",
  "「成功とは、失敗に失敗を重ねても情熱を失わないことである。」",
  "「誰もあなたの同意なしに、あなたに劣等感を抱かせることはできない。」",
  "「あなたの時間は限られている。他人の人生を生きることで無駄にしてはいけない。」",
  "「自分自身になりなさい。他の人の役はすでにすべて取られています。」",
  "「我々は繰り返し行うことの積み重ねである。ゆえに、優れた行いとは習慣である。」",
  "「真実が靴を履いている間に、嘘は世界を半周する。」"
];

const RandomWords: NextPage = () => {
  const [currentWord, setCurrentWord] = useState("");
  const getRandomWords = () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomIndex];
  }

  useEffect(() => {
    setCurrentWord(getRandomWords());
  }, []);

  const wordsChange = () => {
    setCurrentWord(getRandomWords());
  }

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
