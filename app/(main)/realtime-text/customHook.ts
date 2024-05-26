import { ChangeEvent, useState } from "react";

type realTimeHook = () => {
  text: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const realTimeTextHook: realTimeHook = () => {
  const [text, setText] = useState("テキストを入力してね");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return {
    text,
    handleInput,
  };
};
