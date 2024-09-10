import { type RefObject, useRef, useState } from "react";

type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
}

type UseSimpleTodo = () => {
  memo: Todo[];
  textAreaRef: RefObject<HTMLTextAreaElement>;
  handleMemo: () => void;
  completeMemo: (id: number) => void;
  deleteMemo: (index: number) => void;
};

export const useSimpleTodoText: UseSimpleTodo = () => {
  const [memo, setMemo] = useState<Todo[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [nextId, setNextId] = useState(1);

  const handleMemo = () => {
    const textAreaValue = textAreaRef.current?.value;
    if (!textAreaValue || !textAreaValue.trim()) return;
    setMemo((prev) => [...prev, {id: nextId, text: textAreaValue, isComplete: false }]);
    setNextId((prev) => prev + 1)
    textAreaRef.current.value = ""; // テキストエリアをクリア
  };

  const completeMemo = (id: number) => {
    setMemo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const deleteMemo = (id: number) => {
    setMemo((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    memo,
    textAreaRef,
    handleMemo,
    completeMemo,
    deleteMemo,
  };
};
