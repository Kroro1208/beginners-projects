import { useEffect, useState } from "react";

interface CharacterData {
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  ancestry: string;
  image: string;
}

type UseHarryPotterAPI = () => {
  characters: CharacterData[];
};

export const HarryPotterHook: UseHarryPotterAPI = () => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    const fetchHarryPotter = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );
      const data: CharacterData[] = await response.json();
      const filteredData = data.filter((character) => character.image); // 画像があるキャラクターのみ
      setCharacters(filteredData);
    };
    fetchHarryPotter();
  }, []);

  return {
    characters,
  };
};
