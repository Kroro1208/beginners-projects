import { RefObject, useRef, useState } from "react";

type UseSimpleTodo = () => {
  memo: {
    text: string;
    isComplete: boolean;
  }[];
  textAreaRef: RefObject<HTMLTextAreaElement>;
  handleMemo: () => void;
  completeMemo: (index: number) => void;
  deleteMemo: (index: number) => void;
};

export const useSimpleTodoText: UseSimpleTodo = () => {
  const [memo, setMemo] = useState<{ text: string; isComplete: boolean }[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleMemo = () => {
    const textAreaValue = textAreaRef.current?.value;
    if (!textAreaValue || !textAreaValue.trim()) return;
    setMemo((prev) => [...prev, { text: textAreaValue, isComplete: false }]);
    textAreaRef.current.value = ""; // テキストエリアをクリア
  };

  const completeMemo = (index: number) => {
    setMemo((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const deleteMemo = (index: number) => {
    setMemo((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    memo,
    textAreaRef,
    handleMemo,
    completeMemo,
    deleteMemo,
  };
};
