"use client";
import { NextPage } from 'next';
import { TrafficLightsHook } from './customHook';

const TrafficLight: NextPage = () => {
  const { light } = TrafficLightsHook();

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-900'>
      <div className='bg-gray-700 p-4 rounded-lg mt-8'>
        <div className='w-20 h-20 mb-4 rounded-full border-4 border-black flex items-center justify-center'>
          <div className={`w-16 h-16 rounded-full ${light === "red" ? "bg-red-500" : "bg-gray-400"}`}></div>
        </div>
        <div className='w-20 h-20 mb-4 rounded-full border-4 border-black flex items-center justify-center'>
          <div className={`w-16 h-16 rounded-full ${light === "yellow" ? "bg-yellow-500" : "bg-gray-400"}`}></div>
        </div>
        <div className='w-20 h-20 rounded-full border-4 border-black flex items-center justify-center'>
          <div className={`w-16 h-16 rounded-full ${light === "green" ? "bg-green-500" : "bg-gray-400"}`}></div>
        </div>
      </div>
    </div>
  );
}

export default TrafficLight;
