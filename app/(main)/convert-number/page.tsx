"use client";
import { NextPage } from "next";
import { ConvertNumberHook } from "./customHook";

const ConvertNumber: NextPage = () => {
    const {
        temperature,
        dollar,
        meter,
        handleTemperatureChange,
        handleDollarChange,
        handleMeterChange,
        convertCtoF,
        convertDollarToYen,
        convertMeterToFeet,
    } = ConvertNumberHook();

    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 py-10'>
            <div className='bg-white p-8 shadow-lg rounded-lg'>
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">数値変換ツール</h1>
                <div className='mb-6'>
                    <label htmlFor="celsius" className="block text-xl font-extrabold text-blue-600 mb-2">摂氏温度</label>
                    <input
                        onChange={handleTemperatureChange}
                        type="number" id="celsius"
                        className='w-full text-center px-4 py-2 mb-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <p className="text-lg text-blue-500">華氏温度: <span className="font-semibold">{convertCtoF(temperature)}</span></p>
                </div>

                <div className='mb-6'>
                    <label htmlFor="dollar" className="block text-xl font-extrabold text-green-600 mb-2">＄</label>
                    <input
                        onChange={handleDollarChange}
                        type="number" id="dollar"
                        className='w-full text-center px-4 py-2 mb-2 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500' />
                    <p className="text-lg text-green-500">円: <span className="font-semibold">{convertDollarToYen(dollar)}</span></p>
                </div>

                <div className='mb-6'>
                    <label htmlFor="meter" className="block text-xl font-extrabold text-red-600 mb-2">メートル</label>
                    <input
                        onChange={handleMeterChange}
                        type="number" id="meter"
                        className='w-full text-center px-4 py-2 mb-2 border-2 border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' />
                    <p className="text-lg text-red-500">フィート: <span className="font-semibold">{convertMeterToFeet(meter)}</span></p>
                </div>
            </div>
        </div>
    );
}

export default ConvertNumber;
