"use client";
import { NextPage } from "next"
import { useCommentChatText } from "./customHook";

const Comment: NextPage = () => {
    const { inputText, commentList, handleInputComment, handleSubmit } = useCommentChatText();

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="flex justify-center">
                <div className="flex flex-col items-center">
                    <textarea
                        onChange={handleInputComment}
                        value={inputText}
                        className="resize-none w-72 border border-slate-500 rounded-lg text-center p-5"
                        placeholder="コメントを入力" />
                    <div className="mt-8 mb-8">
                        <button onClick={handleSubmit} className="border border-slate-400 bg-green-300 px-3 py-2 rounded-lg">
                            送信
                        </button>
                    </div>
                    <div className="w-full max-w-md">
                        <ul className="space-y-4">
                            {commentList.map((comment, index) => (
                                <li key={index}
                                    className="bg-white p-4 border border-slate-300 rounded-lg shadow-md">
                                    <p>{comment}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment
