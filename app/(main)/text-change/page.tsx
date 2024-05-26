"use client";
import { NextPage } from 'next';
import { textChangeHook } from './customHook';

const TextChange: NextPage = () => {
    const { isHidden, handleDisplay, handleDisplayOff } = textChangeHook();

    // const handleChange = () => {
    //     setIsHidden(!isHidden);
    // }

    return (
        <div className='mx-auto mt-10 max-w-4xl'>
            <div className='flex justify-center'>
                <div className='flex flex-col gap-3'>
                    {
                        <h2 className={`mb-4 text-3xl ${isHidden ? 'invisible' : 'visible'}`} >
                            こんにちは！
                        </h2>
                    }
                    <button
                        onClick={handleDisplay}
                        className="border-2 border-black px-3 py-2 rounded-lg bg-blue-300">
                        表示
                    </button>
                    <button
                        onClick={handleDisplayOff}
                        className="border-2 border-black px-3 py-2 rounded-lg bg-red-300">
                        非表示
                    </button>
                    {/* <button
                        onClick={handleChange}
                        className="border-2 border-black px-3 py-2 rounded-lg bg-pink-300">
                        非表示
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default TextChange
