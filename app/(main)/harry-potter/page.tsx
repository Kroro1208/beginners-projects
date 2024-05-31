"use client";

import { NextPage } from "next";
import Image from "next/image";
import { HarryPotterHook } from "./customHook";

const HarryPotter: NextPage = () => {
  const { characters } = HarryPotterHook();

  return (
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12 text-yellow-400">Harry Potter Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.map((character) => (
          <div key={character.index}
               className="bg-gray-800 rounded-lg shadow-lg p-6
                        transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={character.image}
                alt={character.fullName}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className="rounded-t-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white">{character.fullName}</h2>
            <p className="text-gray-400 mb-2">Nickname: {character.nickname}</p>
            <p className="text-gray-400 mb-2">House: {character.hogwartsHouse}</p>
            <p className="text-gray-400 mb-2">Interpreted by: {character.interpretedBy}</p>
            <p className="text-gray-400 mb-2">Birthdate: {character.birthdate}</p>
            {character.children.length > 0 && (
              <p className="text-gray-400 mb-2">Children: {character.children.join(', ')}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HarryPotter;
