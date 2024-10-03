"use client";
import type { NextPage } from 'next';
import { CountUpDown } from './customHook';

const CountUp: NextPage = () => {
    const { count, countUpButton, countDownButton } = CountUpDown();

    return (
        <div className='mx-auto mt-10 max-w-4xl'>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <h2 className='text-4xl mb-4'>Count: {count}</h2>
                <button
                type='button'
                    onClick={countUpButton}
                    className='border-4 border-gray-500 bg-cyan-200 px-4 py-3 rounded-md'>
                    カウントアップ
                </button>
                <button
                type='button'
                    onClick={countDownButton}
                    className='border-4 border-gray-500 bg-red-200 px-4 py-3 rounded-md'>
                    カウントダウン
                </button>
            </div>
        </div>
    )
}

export default CountUp
