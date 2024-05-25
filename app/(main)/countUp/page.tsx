"use client";
import { NextPage } from 'next';
import { useState } from 'react';

const CountUp: NextPage = () => {
    const [count, setCount] = useState(0);
    const countUpButton = () => {
        setCount((prev) => prev + 1);
    }

    const countDownButton = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <div className='mx-auto mt-10 max-w-4xl'>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <h2 className='text-4xl mb-4'>Count: {count}</h2>
                <button
                    onClick={countUpButton}
                    className='border-4 border-gray-500 bg-cyan-200 px-4 py-3 rounded-md'>
                    カウントアップ
                </button>
                <button
                    onClick={countDownButton}
                    className='border-4 border-gray-500 bg-red-200 px-4 py-3 rounded-md'>
                    カウントダウン
                </button>
            </div>
        </div>
    )
}

export default CountUp
