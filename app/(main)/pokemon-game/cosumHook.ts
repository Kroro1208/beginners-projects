import { useEffect, useState } from "react";
import { Pokemon } from "./type";
import axios from "axios";

type UsePokemonGame = () => {
  pokemons: Pokemon[];
  flippedCard: number[];
  matchCards: number[];
  isOpenModal: boolean;
  isCongratulationsOpen: boolean;
  selectedPokemon: Pokemon | null;
  timeLeft: number;
  score: number;
  isGameOver: boolean;
  handleModalClose: () => void;
  handleCardClickModal: (index: number) => void;
  handleCongratulationsClose: () => void;
  handleRestart: () => void;
};

export const PokemonGameText: UsePokemonGame = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [flippedCard, setFlippedCard] = useState<number[]>([]);
  const [matchCards, setMatchCards] = useState<number[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isCongratulationsOpen, setIsCongratulationsOpen] =
    useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(300); // タイムリミットを60秒に設定
  const [score, setScore] = useState<number>(0); // スコア初期値を設定
  const [isGameOver, setIsGameOver] = useState<boolean>(false); // ゲームオーバー状態を管理

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=30"
        );
        const results = response.data.results;
        console.log(results);

        const pokemonPromises = results.map(async (pokemon: any) => {
          const res = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image:
              res.data.sprites.other["official-artwork"].front_default ||
              "画像がありません",
          };
        });

        const pokemonData = await Promise.all(pokemonPromises);
        setPokemons(
          [...pokemonData, ...pokemonData].sort(() => Math.random() - 0.5)
        );
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
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
    setTimeLeft(300);
    setScore(0);
    setMatchCards([]);
    setIsGameOver(false);
    setIsCongratulationsOpen(false);
    setSelectedPokemon(null);
    setFlippedCard([]);
  };

  return {
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
  };
};
