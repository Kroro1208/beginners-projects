"use client";
import { useEffect, useState } from "react";

const DigitalClock = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        const updateClock = () => {
            setCurrentTime(new Date());
        };

        const timerId = window.setInterval(updateClock, 1000);

        updateClock();

        return () => {
            window.clearInterval(timerId);
        };

    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-slate-300">
            <div className="bg-slate-700 text-yellow-500 font-mono text-6xl p-6 rounded-lg shadow-2xl">
                {currentTime ? currentTime.toLocaleTimeString() : "Loading"}
            </div>
        </div>
    )
}

export default DigitalClock
