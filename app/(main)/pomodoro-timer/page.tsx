"use client";
import { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const PomodoroTimer: NextPage = () => {
    const [timeLeft, setTimeLeft] = useState(10);
    const [isBreakTime, setIsBreakTime] = useState(false);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (timeLeft == 0) {
            clearInterval(intervalId!);
            if (isBreakTime) {
                alert('Break is over, back to work');
                setTimeLeft(1500);
                setIsBreakTime(false);
            } else {
                setIsModalVisible(true);
                setTimeLeft(300);
                setIsBreakTime(true);
            }
            startTimer();
        }
    }, [timeLeft]);

    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const startTimer = () => {
        const id = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        setIntervalId(id);
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    const resetTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        setTimeLeft(1500);
    }

    const closeModal = () => {
        setIsModalVisible(false);
        setIsBreakTime(false);
    }


    return (
        <div className="container mx-auto max-w-md text-center p-6 font-roboto flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-500 to-gray-600 text-white">
            <h1 className="text-4xl mb-4">Pomodoro Timer</h1>
            <p className="text-8xl mb-8" id="timer">{updateTimer()}</p>
            <div className="button-wrapper flex gap-5">
                <button onClick={startTimer} className="bg-green-500 px-4 py-2 rounded-md text-primary-foreground hover:bg-green-500/90 border-green-600 border-b-4 active:border-b-0">Start</button>
                <button onClick={stopTimer} className="bg-red-500 px-4 py-2 rounded-md text-primary-foreground hover:bg-red-500/90 border-red-600 border-b-4 active:border-b-0">Stop</button>
                <button onClick={resetTimer} className="bg-purple-500 px-4 py-2 rounded-md text-primary-foreground hover:bg-purple-500/90 border-purple-600 border-b-4 active:border-b-0">Reset</button>
            </div>
            {isModalVisible && (
                <div className="modal fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-content bg-yellow-100 p-10 rounded-lg shadow-2xl text-center relative transform transition-all scale-105">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-gray-900">
                            <FaTimes />
                        </button>
                        <p className="text-4xl font-bold text-gray-700 mb-4">休憩時間です！</p>
                        <p className="text-2xl text-gray-600">5分間の休憩をお取りください。</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PomodoroTimer
