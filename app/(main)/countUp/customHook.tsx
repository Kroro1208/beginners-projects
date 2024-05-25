import { useState } from "react";

type UseCountUpDown = () => {
    count: number;
    countUpButton: () => void;
    countDownButton: () => void;
}

export const CountUpDown: UseCountUpDown = () => {
    const [count, setCount] = useState(0);
    const countUpButton = () => {
        setCount((prev) => prev + 1);
    }

    const countDownButton = () => {
        setCount((prev) => prev - 1);
    }

    return {
        count,
        countUpButton,
        countDownButton
    }
}

