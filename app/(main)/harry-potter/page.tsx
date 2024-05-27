"use client";

import { NextPage } from "next";
import Image from "next/image";
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


const HarryPotter: NextPage = () => {
    const [characters, setCharacters] = useState<CharacterData[]>([]);

    useEffect(() => {
        const fetchHarryPotter = async () => {
            const response = await fetch('https://hp-api.onrender.com/api/characters');
            const data: CharacterData[] = await response.json();
            const filteredData = data.filter(character => character.image); // 画像があるキャラクターのみ
            setCharacters(filteredData);
        }
        fetchHarryPotter();
    }, []);

    return (
        <div className="container mx-auto p-4 bg-gray-900 min-h-screen">
            <h1 className="text-5xl font-bold text-center mb-12 text-yellow-400">Harry Potter Characters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {characters.map((character) => (
                    <div key={character.name}
                        className="bg-gray-800 rounded-lg shadow-lg p-6
                        transform hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-64 mb-4">
                            <Image
                                src={character.image}
                                alt={character.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                                className="rounded-t-lg"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-white">{character.name}</h2>
                        {character.alternate_names.length > 0 && (
                            <p className="text-gray-400 mb-2">ニックネーム: {character.alternate_names.join(', ')}</p>
                        )}
                        <p className="text-gray-400 mb-2">種族: {character.species}</p>
                        <p className="text-gray-400 mb-2">性別: {character.gender}</p>
                        <p className="text-gray-400 mb-2">チーム: {character.house}</p>
                        <p className="text-gray-400 mb-2">誕生日: {character.dateOfBirth}</p>
                        <p className="text-gray-400 mb-2">誕生月: {character.yearOfBirth}</p>
                        <p className="text-gray-400 mb-2">先祖: {character.ancestry}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HarryPotter;