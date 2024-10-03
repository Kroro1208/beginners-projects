import { type ChangeEvent, useState } from "react";

type Comment = {
  id: number;
  text:string;
}

type UseComment = () => {
  inputText: string;
  commentList: Comment[];
  handleInputComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export const useCommentChatText: UseComment = () => {
  const [inputText, setInputText] = useState("");
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const handleInputComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };
  const handleSubmit = () => {
    if (!inputText.trim()) return;
    const newComment: Comment = {
      id: Date.now(),
      text: inputText
    }
    setCommentList((prev) => [...prev, newComment]);
    setInputText("");
  };

  return {
    inputText,
    commentList,
    handleInputComment,
    handleSubmit,
  };
};
