"use client";
import { NextPage } from "next"
import { realTimeTextHook } from "./customHook";

const RealTimeText: NextPage = () => {
    const { text, handleInput } = realTimeTextHook();
    return (
        <div className='mx-auto mt-10 max-w-4xl'>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <h2 className='text-4xl mb-4'>{text}</h2>
                <div className='flex justify-center'>
                    <input
                        onChange={handleInput}
                        className='px-3 py-2 border border-slate-500 rounded-lg' type="text" />
                </div>
            </div>
        </div>
    )
}

export default RealTimeText
