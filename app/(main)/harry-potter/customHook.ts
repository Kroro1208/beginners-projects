import { useEffect, useState } from "react";

interface CharacterData {
  index: number;
  fullName: string;
  nickname: string;
  hogwartsHouse: string;
  interpretedBy: string;
  birthdate: string;
  children: string[];
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
        "https://potterapi-fedeperin.vercel.app/es/characters"
      );
      const data: CharacterData[] = await response.json();
      console.log(data);
      const filteredData = data.filter((character) => character.image); // 画像があるキャラクターのみ
      setCharacters(filteredData);
    };
    fetchHarryPotter();
  }, []);

  return {
    characters,
  };
};
