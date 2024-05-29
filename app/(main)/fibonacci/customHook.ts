import { MutableRefObject, useEffect, useRef, useState } from "react";

type UseFibonacci = () => {
  result: number;
  start: () => void;
  stop: () => void;
};

export const FibonacciHook: UseFibonacci = () => {
  // フィボナッチジェネレータ関数
  function* fibonacci() {
    let a = 0,
      b = 1;
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

  return {
    result,
    start,
    stop,
  };
};
