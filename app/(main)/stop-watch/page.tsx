"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const StopWatch: NextPage = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isActive) {
            const id = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
            setIntervalId(id);
        } else if (!isActive && intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    const formatTime = (seconds: number) => {
        const getSeconds = `0${seconds % 60}`.slice(-2);
        const minutes = Math.floor(seconds / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <div className="relative w-96 h-96 bg-black rounded-full shadow-2xl border-8 border-gray-700
            flex flex-col items-center justify-center">
                <h2 className="absolute top-12 font-mono text-3xl text-gray-300">G-SHOCK</h2>
                <div className="text-6xl font-mono text-green-500 bg-gray-800 p-4 rounded-lg">
                    {formatTime(seconds)}
                </div>
                <div className="absolute bottom-20 w-full flex justify-around px-8">
                    <button
                        onClick={handleStop}
                        className="w-20 h-10 bg-red-600 text-white font-bold rounded-md shadow-md
                         hover:bg-red-700 transition-all duration-300"
                    >
                        Stop
                    </button>
                    <button
                        onClick={handleStart}
                        className="w-20 h-10 bg-green-600 text-white font-bold rounded-md shadow-md
                         hover:bg-green-700 transition-all duration-300"
                    >
                        Start
                    </button>
                    <button
                        onClick={handleReset}
                        className="w-20 h-10 bg-blue-600 text-white font-bold rounded-md shadow-md
                         hover:bg-blue-700 transition-all duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;
