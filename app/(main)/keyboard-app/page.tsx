"use client";
import { NextPage } from "next";
import { useState } from "react";
import { keys } from "./data";
import { KeyBoardAppHook } from "./customHook";

const KeyBoardApp: NextPage = () => {
    const {
        text,
        keyBoardClick,
        deleteKeyClick,
        clearKeyClick,
    } = KeyBoardAppHook();



    return (
        <div className='mx-auto h-screen bg-gray-500 w-full'>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <h2 className='text-4xl text-white mt-10 mb-4'>{text.join('')}</h2>
                <div className='flex flex-col gap-2'>
                    {keys.map((row, rowIndex) => (
                        <div key={rowIndex} className='flex justify-center gap-1'>
                            {row.map((key) => (
                                <button key={key}
                                    onClick={key === 'Del' ? deleteKeyClick : key === 'Clear' ? clearKeyClick : keyBoardClick}
                                    className={`border border-gray-300 rounded-full
                                    w-12 h-12 flex items-center justify-center ${key === 'Space' ? 'w-48' : 'w-12'
                                        } shadow-lg bg-yellow-500 hover:bg-gray-200 active:bg-gray-300 transition-all duration-150 ease-in-out transform active:translate-y-1`}
                                >
                                    {key === 'Space' ? '\u00A0' : key}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KeyBoardApp;
