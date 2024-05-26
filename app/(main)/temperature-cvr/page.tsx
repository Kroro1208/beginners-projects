"use client";
import { NextPage } from "next"
import { ChangeEvent, useState } from "react";

const Temperature: NextPage = () => {
    const [temperature, setTemperature] = useState(0);
    const [dollar, setDollar] = useState(0);
    const [meter, setMeter] = useState(0);

    const handleTemperatureChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTemperature(Number(e.target.value));
    }

    const handleDollarChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDollar(Number(e.target.value));
    }

    const handleMeterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMeter(Number(e.target.value));
    }

    const convertCtoF = (temperature: number) => {
        return (temperature * 9) / 5 + 32;
    }

    const convertDollarToYen = (dollar: number) => {
        const conversionRate = 155; // 為替レートは仮定値です
        return dollar * conversionRate;
    }

    const convertMeterToFeet = (meter: number) => {
        return meter * 3.28084;
    }

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

export default Temperature
