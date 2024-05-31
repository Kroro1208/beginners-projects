"use client";
import { UseSimpleDiaryHook } from "./customHook";

const SimpleDiary = () => {
    const {
        diaryList,
        title,
        content,
        filterDate,
        editIndex,
        handleInputTitle,
        handleInputContent,
        handleSelectDate,
        handlePostDiary,
        handleEditDiary,
        handleDeleteDiary
    } = UseSimpleDiaryHook();

    return (
        <div className='mx-auto mt-8 max-w-4xl p-4 min-h-screen bg-gradient-to-r from-orange-100 via-orange-100 to-blue-100'>
            <div className='flex justify-center'>
                <div className='w-full max-w-lg bg-white shadow-2xl rounded-lg p-6 relative'>
                    <div className="absolute top-0 left-0 w-full h-2 bg-gray-500 rounded-t-lg"></div>
                    <h2 className='text-3xl font-bold text-center text-slate-700 mb-6'>Diary App</h2>
                    <div className='mb-4'>
                        <input
                            onChange={handleInputTitle}
                            value={title}
                            type='text' placeholder='タイトル'
                            className='w-full border border-slate-300 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-slate-400 shadow-inner bg-slate-50 text-slate-700 placeholder-slate-300' />
                    </div>
                    <div className='mb-4'>
                        <textarea
                            onChange={handleInputContent}
                            value={content}
                            placeholder='内容'
                            className='w-full border border-slate-300 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-slate-400 shadow-inner bg-slate-50 text-slate-700 placeholder-slate-300' />
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                        <span className='text-slate-700'>日付選択</span>
                        <input
                            onChange={handleSelectDate}
                            value={filterDate}
                            className='border border-slate-300 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-slate-400 bg-slate-50 text-slate-700' type="date" />
                    </div>
                    <div className='text-center'>
                        <button
                            onClick={handlePostDiary}
                            className='bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-400 transition-all duration-300 shadow-lg'>
                            {editIndex !== null ? "更新" : "投稿"}
                        </button>
                    </div>
                    <div className='mt-6'>
                        <h2 className='text-2xl font-bold text-slate-700 mb-4'>日記一覧</h2>
                        <ul>
                            {diaryList.map((item, index) => (
                                <li key={index} className='relative mb-4 bg-gradient-to-r from-slate-200 to-slate-300 p-4 rounded-lg shadow-lg text-gray-800'>
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gray-500 rounded-t-lg"></div>
                                    <div className='flex flex-col'>
                                        <div className='flex-1'>
                                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                                            <p className='mt-2 break-words'>{item.content}</p>
                                            <p className='mt-1'>{item.date}</p>
                                        </div>
                                        <div className='absolute flex gap-2 bottom-4 right-4'>
                                            <button
                                                onClick={() => handleEditDiary(index)}
                                                className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-all duration-300 shadow-lg'>
                                                編集
                                            </button>
                                            <button
                                                onClick={() => handleDeleteDiary(index)}
                                                className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition-all duration-300 shadow-lg'>
                                                削除
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimpleDiary;
