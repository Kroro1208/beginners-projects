import { useEffect, useState } from "react";
import { wordsList } from "./data";

type UseRandomWords = () => {
  currentWord: string;
  wordsChange: () => void;
};

export const RandomWordsChange: UseRandomWords = () => {
  const [currentWord, setCurrentWord] = useState("");
  const getRandomWords = () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomIndex];
  };

  useEffect(() => {
    setCurrentWord(getRandomWords());
  }, []);

  const wordsChange = () => {
    setCurrentWord(getRandomWords());
  };

  return {
    currentWord,
    wordsChange,
  };
};
