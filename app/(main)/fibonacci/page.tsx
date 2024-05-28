"use client";
import { useState, useEffect, useRef } from 'react';

const Practice = () => {
  // フィボナッチジェネレータ関数
  function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      yield a; // .valueはこの部分
      [a, b] = [b, a + b];
    }
  }

  const fibRef = useRef<Generator<number, void, unknown>>(fibonacci()); // useRefでジェネレータを保持
  const [result, setResult] = useState<number>(0); // 初期値を設定
  const [isRunning, setIsRunning] = useState(false); // タイマーの実行状態を管理

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        const nextValue = fibRef.current.next().value;
        if (nextValue !== undefined) {
          setResult(nextValue);
        }
      }, 1000);
    }

    // コンポーネントがアンマウントされたとき、またはisRunningがfalseになったときにインターバルをクリア
    return () => clearInterval(interval);
  }, [isRunning]); // isRunningが変化するたびにエフェクトを再実行

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => setIsRunning(false);

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

export default Practice;
