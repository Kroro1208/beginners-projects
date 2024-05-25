"use client";
import { NextPage } from "next"
import { ChangeEvent, useState } from "react"

const RealTimeText: NextPage = () => {
    const [text, setText] = useState("テキストを入力してね");
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
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
