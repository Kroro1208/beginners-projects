import { useState } from "react";
export const colors = [
  "lightblue",
  "cyan",
  "pink",
  "red",
  "indigo",
  "green",
  "slate",
  "orange",
  "yellow",
  "purple",
];

type ColorChangeHook = () => {
  color: string;
  handleColorChange: () => void;
};

export const ColorChange: ColorChangeHook = () => {
  const [color, setColor] = useState("gray");

  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return {
    color,
    handleColorChange,
  };
};
