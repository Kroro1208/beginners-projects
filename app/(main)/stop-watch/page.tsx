"use client";
import { NextPage } from "next";
import { StopWatchHook } from "./customHook";

const StopWatch: NextPage = () => {
    const {
        seconds,
        handleStart,
        handleStop,
        handleReset,
        formatTime,
    } = StopWatchHook();

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
