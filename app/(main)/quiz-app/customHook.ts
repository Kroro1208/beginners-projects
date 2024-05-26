import { useState } from "react";
import { questions } from "./data";

type UseQuizApp = () => {
  currentQuestionIndex: number;
  choice: string;
  answer: string;
  score: number;
  handleChoice: (item: string) => void;
  handleAnswer: () => void;
  handleNextQuestion: () => void;
};

export const QuizAppHook: UseQuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [choice, setChoice] = useState("");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleChoice = (item: string) => {
    setChoice(item);
  };

  const handleAnswer = () => {
    if (choice === questions[currentQuestionIndex].correctAnswer) {
      setAnswer("Congratulation!!");
      setScore(score + 1);
    } else {
      setAnswer("Try Again !");
    }
  };

  const handleNextQuestion = () => {
    setAnswer("");
    setChoice("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return {
    currentQuestionIndex,
    choice,
    answer,
    score,
    handleChoice,
    handleAnswer,
    handleNextQuestion,
  };
};
