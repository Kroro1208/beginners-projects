import { ChangeEvent, useState } from "react";

type UseSimpleMemo = () => {
  inputText: string;
  memo: string[];
  handleText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleMemo: () => void;
  deleteMemo: (index: number) => void;
};

export const SimpleMemoHook: UseSimpleMemo = () => {
  const [inputText, setInputText] = useState("");
  const [memo, setMemo] = useState<string[]>([]);

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleMemo = () => {
    if (!inputText.trim()) return;
    setMemo((prev) => [...prev, inputText]);
    setInputText("");
  };

  const deleteMemo = (index: number) => {
    setMemo((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    inputText,
    memo,
    handleText,
    handleMemo,
    deleteMemo,
  };
};
