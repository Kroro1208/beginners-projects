import { useState } from 'react'

type textChange = () => {
    isHidden: boolean;
    handleDisplay: () => void;
    handleDisplayOff: () => void;
}

export const textChangeHook: textChange = () => {
    const [isHidden, setIsHidden] = useState(false);

    const handleDisplay = () => {
        setIsHidden(false);
    }

    const handleDisplayOff = () => {
        setIsHidden(true);
    }

    return {
        isHidden,
        handleDisplay,
        handleDisplayOff
    }
}