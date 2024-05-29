"use client";
import { useState, useEffect, useRef } from 'react';
import { FibonacciHook } from './customHook';

const Fibonacci = () => {
  const {
    result,
    start,
    stop,
  } = FibonacciHook();

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-100">
      <h1 className='text-4xl font-mono'>Fibonacci</h1>
      <div className="text-6xl font-bold text-gray-800 bg-white p-4 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-110">
        {result}
      </div>
      <div className="flex space-x-4 mt-10">
        <button
          onClick={start}
          className="px-6 py-3 text-xl font-bold text-white bg-green-500 rounded hover:bg-green-600 transition"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="px-6 py-3 text-xl font-bold text-white bg-red-500 rounded hover:bg-red-600 transition"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Fibonacci;
