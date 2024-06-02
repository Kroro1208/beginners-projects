import Image from 'next/image';
import React from 'react';

interface CardProps {
    image: string;
    onClick: () => void;
    isFlipped: boolean;
    isMatched: boolean;
}

const Card: React.FC<CardProps> = ({ image, onClick, isFlipped, isMatched }) => {
    return (
        <div
            className={`card ${isMatched ? "opacity-50" : ""} w-24 h-24 flex justify-center items-center`}
            onClick={onClick}
            style={{ cursor: isMatched ? "default" : "pointer" }}
        >
            <Image
                src={isFlipped || isMatched ? image : '/ball.png'}
                alt="Pokemon"
                width={80}
                height={80}
                className="rounded object-contain"
            />
        </div>
    );
};

export default Card;
