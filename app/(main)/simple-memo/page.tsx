"use client";
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const SimpleMemo: NextPage = () => {
    const [inputText, setInputText] = useState("");
    const [memo, setMemo] = useState<string[]>([]);

    const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const handleMemo = () => {
        if (!inputText.trim()) return;
        setMemo((prev) => [...prev, inputText]);
        setInputText("");
    };

    const deleteMemo = (index: number) => {
        setMemo((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="flex justify-center">
                <div className="flex flex-col items-center p-5 bg-white shadow-xl rounded-lg  border-slate-500">
                    <textarea
                        onChange={handleText}
                        value={inputText}
                        className="resize-none w-72 h-24 border border-slate-300 rounded-lg text-center p-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="メモを入力" />
                    <div className="mt-4">
                        <button onClick={handleMemo} className="border border-slate-400 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            送信
                        </button>
                    </div>
                    <div className="w-full max-w-md mt-6">
                        <ul className="space-y-4">
                            {memo.map((item, index) => (
                                <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
                                    <span className="flex-1 text-gray-700">{item}</span>
                                    <button onClick={() => deleteMemo(index)}
                                        className="ml-4 border border-slate-400 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors duration-300">
                                        削除
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleMemo;
