import Image from 'next/image';
import React from 'react';

interface CardProps {
    image: string;
    onClick: () => void;
    isFlipped: boolean;
    isMatched: boolean;
    number: number;
}

const Card: React.FC<CardProps> = ({ image, onClick, isFlipped, isMatched, number }) => {
    return (
        <div
            className={`card ${isMatched ? "opacity-50" : ""} flex justify-center items-center p-4 gap-2`}
            onClick={onClick}
            style={{ cursor: isMatched ? "default" : "pointer" }}
        >   <div className="text-xl font-bold">{number}</div>
            <Image
                src={isFlipped || isMatched ? image : '/ball.png'}
                alt="Pokemon"
                width={80}
                height={80}
                className="object-contain"
            />
        </div>
    );
};

export default Card;
