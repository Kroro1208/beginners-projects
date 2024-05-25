import { ChangeEvent, useState } from "react";

type CommentHook = () => {
  inputText: string;
  commentList: string[];
  handleInputComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export const CommentChat: CommentHook = () => {
  const [inputText, setInputText] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);

  const handleInputComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };
  const handleSubmit = () => {
    if (!inputText.trim()) return;
    setCommentList((prev) => [...prev, inputText]);
    setInputText("");
  };

  return {
    inputText,
    commentList,
    handleInputComment,
    handleSubmit,
  };
};
