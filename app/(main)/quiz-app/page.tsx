"use client";

import { useState } from "react";

const Quiz = () => {
    const questions = [
        {
            question: "直角三角形の斜辺の長さを求めるための定理は何ですか？",
            choices: ["ピタゴラスの定理", "フェルマーの定理", "コーシーの定理", "相対性理論"],
            correctAnswer: "ピタゴラスの定理"
        },
        {
            question: "HTTPステータスコード404は何を意味しますか？",
            choices: ["リクエスト成功", "サーバーエラー", "見つからない", "認証が必要"],
            correctAnswer: "見つからない"
        },
        {
            question: "RESTful APIの設計において、リソースの読み取りに使用されるHTTPメソッドはどれですか？",
            choices: ["POST", "PUT", "DELETE", "GET"],
            correctAnswer: "GET"
        },
        {
            question: "データベースからデータを取得するための言語はどれですか？",
            choices: ["JSON", "SQL", "Prisma", "Ruby"],
            correctAnswer: "SQL"
        },
        {
            question: "インターネット上でのデータ転送に使用される主要なプロトコルは何ですか？",
            choices: ["FTP", "HTTP", "SMTP", "DNS"],
            correctAnswer: "HTTP"
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [choice, setChoice] = useState("");
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);

    const handleChoice = (item: string) => {
        setChoice(item);
    };

    const handleAnswer = () => {
        if (choice === questions[currentQuestionIndex].correctAnswer) {
            setAnswer("Congratulation!!");
            setScore(score + 1);
        } else {
            setAnswer("Try Again !");
        }
    };

    const handleNextQuestion = () => {
        setAnswer("");
        setChoice("");
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div className='mx-auto mt-10 max-w-4xl'>
            <div className='flex justify-center'>
                <div className='flex flex-col gap-3'>
                    {currentQuestionIndex < questions.length ? (
                        <>
                            <h1 className='text-center text-2xl mb-4'>
                                {questions[currentQuestionIndex].question}
                            </h1>
                            <div className='flex mt-4 justify-center gap-x-4'>
                                {questions[currentQuestionIndex].choices.map((item, index) => (
                                    <button
                                        onClick={() => handleChoice(item)}
                                        key={index}
                                        className={`border-2 border-slate-300 px-3 py-2 rounded-md shadow-md
                                         ${choice === item && "bg-green-400"}`}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                            <div className='flex justify-center mt-8'>
                                <button
                                    onClick={handleAnswer}
                                    className='border-2 border-gray-400 px-3 py-2 rounded-md bg-slate-300 hover:bg-indigo-400'>
                                    Final Answer !
                                </button>
                            </div>
                            <h3 className={`mt-8 text-center font-bold text-3xl
                            ${answer === "Congratulation!!" ? "text-green-500" : "text-red-500"}`}>
                                {answer}
                            </h3>
                            {answer && (
                                <div className='flex justify-center mt-4'>
                                    <button
                                        onClick={handleNextQuestion}
                                        className='border-2 border-gray-400 px-3 py-2 rounded-md bg-slate-300 hover:bg-indigo-400'>
                                        Next Question
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <h1 className='text-center text-2xl mb-4'>
                            Quiz Finished! Your score is: {score}/{questions.length}
                        </h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Quiz;
