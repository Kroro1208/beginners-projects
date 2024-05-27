import { useState } from "react";

type UseKeyBoard = () => {
  text: string[];
  keyBoardClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteKeyClick: () => void;
  clearKeyClick: () => void;
};

export const KeyBoardAppHook: UseKeyBoard = () => {
  const [text, setText] = useState<string[]>([
    "ここに入力した文字が表示されます",
  ]);
  const [hasClicked, setHasClicked] = useState(false);

  const keyBoardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const inputKey = e.currentTarget.innerText; // クリックされた文字を取得
    setText((prev) => {
      if (!hasClicked) {
        // 最初のクリックの場合
        setHasClicked(true);
        return [inputKey]; // 初期値を削除して最初のクリックをセット
      }
      return [...prev, inputKey]; // それ以降のクリックは追加する
    });
  };

  const deleteKeyClick = () => {
    setText((prev) => {
      if (prev.length === 1 && prev[0] === "ここに入力した文字が表示されます") {
        return prev;
      }
      if (!hasClicked) {
        return prev;
      }

      return prev.slice(0, -1); // 最後の文字を削除
    });
  };

  const clearKeyClick = () => {
    setText(["\u00A0"]);
    setHasClicked(false);
  };

  return {
    text,
    keyBoardClick,
    deleteKeyClick,
    clearKeyClick,
  };
};
