"use client";
import { NextPage } from "next";
import { useState } from "react";

const KeyBoardApp: NextPage = () => {
    const [text, setText] = useState<string[]>(["ここに入力した文字が表示されます"]);
    const [hasClicked, setHasClicked] = useState(false);

    const keyBoardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const inputKey = e.currentTarget.innerText; // クリックされた文字を取得
        setText((prev) => {
            if (!hasClicked) { // 最初のクリックの場合
                setHasClicked(true);
                return [inputKey]; // 初期値を削除して最初のクリックをセット
            }
            return [...prev, inputKey]; // それ以降のクリックは追加する
        });
    }

    const deleteKeyClick = () => {
        setText((prev) => {
            if (prev.length === 1 && prev[0] === "ここに入力した文字が表示されます") {
                return prev;
            }
            if (!hasClicked) {
                return prev;
            }

            return prev.slice(0, -1); // 最後の文字を削除
        });
    };

    const clearKeyClick = () => {
        setText(['\u00A0']);
        setHasClicked(false);
    };

    const keys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        ['Space', 'Del', 'Clear']
    ];

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
