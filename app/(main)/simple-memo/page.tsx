"use client";
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { SimpleMemoHook } from './customHook';

const SimpleMemo: NextPage = () => {
    const {
        inputText,
        memo,
        handleText,
        handleMemo,
        deleteMemo,
    } = SimpleMemoHook();

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="flex justify-center">
                <div className="flex flex-col items-center p-8 bg-yellow-100 shadow-2xl rounded-xl">
                    <h1 className="text-3xl font-mono text-pink-600 mb-4">Memo</h1>
                    <textarea
                        onChange={handleText}
                        value={inputText}
                        className="resize-none w-72 h-24 border border-pink-400 rounded-lg text-center p-5 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-inner"
                        placeholder="メモを入力" />
                    <div className="mt-4">
                        <button onClick={handleMemo} className="border border-green-400 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md">
                            送信
                        </button>
                    </div>
                    <div className="w-full max-w-md mt-6">
                        <ul className="space-y-4">
                            {memo.map((item, index) => (
                                <li key={index} className="flex justify-between items-center bg-blue-100 p-4 rounded-lg shadow-lg">
                                    <span className="flex-1 text-slate-800">{item}</span>
                                    <button onClick={() => deleteMemo(index)}
                                        className="ml-4 border border-red-400 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md">
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
