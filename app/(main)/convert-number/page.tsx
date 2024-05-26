"use client";
import { NextPage } from "next"
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
        <div className='flex flex-col justify-center items-center mx-auto mt-10 max-w-xl'>
            <div>
                <div className='flex gap-3 justify-center'>
                    <label htmlFor="celsius" className="text-xl font-extrabold text-blue-600">摂氏温度: </label>
                    <input
                        onChange={handleTemperatureChange}
                        type="number" id="celsius"
                        className='text-center px-2 py-1 mb-4 border-2 border-slate-600 rounded-lg' />
                </div>
                <p className="text-lg text-blue-500">華氏温度: {convertCtoF(temperature)}</p>

                <div className='flex gap-3 justify-center mt-6'>
                    <label htmlFor="dollar" className="text-xl font-extrabold text-green-600">1＄: </label>
                    <input
                        onChange={handleDollarChange}
                        type="number" id="dollar"
                        className='text-center px-2 py-1 mb-4 border-2 border-slate-600 rounded-lg' />
                </div>
                <p className="text-lg text-green-500">円: {convertDollarToYen(dollar)}</p>

                <div className='flex gap-3 justify-center mt-6'>
                    <label htmlFor="meter" className="text-xl font-extrabold text-red-600">メートル: </label>
                    <input
                        onChange={handleMeterChange}
                        type="number" id="meter"
                        className='text-center px-2 py-1 mb-4 border-2 border-slate-600 rounded-lg' />
                </div>
                <p className="text-lg text-red-500">フィート: {convertMeterToFeet(meter)}</p>
            </div>
        </div>
    )
}

export default ConvertNumber
