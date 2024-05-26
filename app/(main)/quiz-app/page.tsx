"use client";
import { QuizAppHook } from "./customHook";
import { questions } from "./data";

const Quiz = () => {
    const {
        currentQuestionIndex,
        choice,
        answer,
        score,
        handleChoice,
        handleAnswer,
        handleNextQuestion,
    } = QuizAppHook();

    return (
        <div className='mx-auto mt-36 max-w-4xl'>
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
