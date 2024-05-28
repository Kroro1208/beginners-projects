"use client";
import { ChangeEvent, useState } from 'react';

type Diary = {
    title: string;
    content: string;
    date: string;
}

const SimpleDiary = () => {
    const [diaryList, setDiaryList] = useState<Diary[]>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [filterDate, setFilterDate] = useState<string>("");
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleInputContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }

    const handleSelectDate = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterDate(e.target.value);
    }

    const handlePostDiary = () => {
        if (!title.trim() || !content.trim() || !filterDate.trim()) return;
        const newDiary: Diary = { title, content, date: filterDate };

        if (editIndex !== null) {
            const updateDiary = diaryList.map((diary, index) => (
                index == editIndex ? newDiary : diary
            ));
            setDiaryList(updateDiary);
            setEditIndex(null);
        } else {
            setDiaryList((prev) => [...prev, newDiary]);
        }

        setTitle("");
        setContent("");
        setFilterDate("");
    }

    const handleEditDiary = (index: number) => {
        const diary = diaryList[index];
        setTitle(diary.title);
        setContent(diary.content);
        setFilterDate(diary.date);
        setEditIndex(index);
    }



    return (
        <div className='mx-auto mt-8 max-w-4xl p-4 bg-gray-200'>
            <div className='flex justify-center'>
                <div className='w-full max-w-lg bg-white shadow-xl rounded-lg p-6 relative'>
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-lg"></div>
                    <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Diary App</h2>
                    <div className='mb-4'>
                        <input
                            onChange={handleInputTitle}
                            value={title}
                            type='text' placeholder='タイトル'
                            className='w-full border border-gray-300 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-400 shadow-inner' />
                    </div>
                    <div className='mb-4'>
                        <textarea
                            onChange={handleInputContent}
                            value={content}
                            placeholder='内容'
                            className='w-full border border-gray-300 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-400 shadow-inner' />
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                        <span className='text-gray-600'>日付選択</span>
                        <input
                            onChange={handleSelectDate}
                            value={filterDate}
                            className='border border-gray-300 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-pink-400' type="date" />
                    </div>
                    <div className='text-center'>
                        <button
                            onClick={handlePostDiary}
                            className='bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-lg'>
                            {editIndex !== null ? "更新" : "投稿"}
                        </button>
                    </div>
                    <div className='mt-6'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>日記一覧</h2>
                        <ul>
                            {diaryList.map((item, index) => (
                                <li key={index} className='mb-4 bg-white p-4 rounded-lg shadow-md relative'>
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-lg" />
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h3 className='text-lg font-semibold text-gray-800'>{item.title}</h3>
                                            <p className='text-gray-700 mt-2'>{item.content}</p>
                                            <p className='text-gray-500 mt-1'>{item.date}</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleEditDiary(index)}
                                                className='bg-indigo-500 text-white px-4 py-2 rounded-lg
                                                hover:bg-indigo-600 transition-all duration-300 shadow-lg'>
                                                編集
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
