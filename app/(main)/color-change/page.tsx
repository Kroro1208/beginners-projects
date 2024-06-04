"use client";
import { NextPage } from "next"
import { useColorChangeText } from "./customHook";

const ButtonColorChange: NextPage = () => {
    const { color, handleColorChange } = useColorChangeText();

    return (
        <div className="h-screen pt-8" style={{ backgroundColor: color }}>
            <div className='flex justify-center'>
                <button
                    onClick={handleColorChange}
                    className="border-4 border-gray-500 bg-slate-300 px-4 py-3 rounded-md">
                    カラーチェンジ
                </button>
            </div>
        </div>
    )
}

export default ButtonColorChange
