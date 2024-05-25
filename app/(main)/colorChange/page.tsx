"use client";
import { NextPage } from "next"
import { useState } from "react";

const ButtonColorChange: NextPage = () => {
    const [color, setColor] = useState('skyblue')
    const colors = ['lightblue', 'lightgreen', 'pink', 'red', 'indigo', 'green', 'slate', 'orange', 'yellow', 'purple'];

    const handleColorChange = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    }

    return (
        <div className="h-screen pt-8" style={{ backgroundColor: color }}>
            <div className='flex justify-center'>
                <button
                    onClick={handleColorChange}
                    className={` border-4 border-gray-500 bg-slate-300 px-4 py-3 rounded-md`}>
                    カラーチェンジ
                </button>
            </div>
        </div>
    )
}

export default ButtonColorChange
