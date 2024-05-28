"use client";
import { ChangeEvent, useState } from 'react';

const FilterSystem = () => {
    const [userName, setName] = useState("");
    const [userAge, setAge] = useState("");
    const [userGender, setGender] = useState("");
    const [userData, setUserData] = useState<Array<{ name: string, age: string, gender: string }>>([]);
    const [searchName, setSearchName] = useState("");
    const [searchAge, setSearchAge] = useState("");
    const [searchGender, setSearchGender] = useState("");

    const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleInputAge = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    }

    const handleInputGender = (e: ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
    }

    const handleSubmit = () => {
        if (!userName.trim() || !userAge.trim() || !userGender.trim()) return;
        const newUser = { name: userName, age: userAge, gender: userGender };
        setUserData((prev) => [...prev, newUser]);
        setName('');
        setAge('');
        setGender('');
    }

    const handleSearchInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.target.value);
    }

    const handleSearchInputAge = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchAge(e.target.value);
    }

    const handleSearchInputGender = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchGender(e.target.value);
    }

    const filteringUser = userData.filter(user =>
        user.name.toLowerCase().includes(searchName.toLowerCase()) &&
        (searchAge === "" || user.age === searchAge) &&
        (searchGender === "" || user.gender === searchGender)
    );

    return (
        <div className='max-w-7xl min-h-screen mx-auto mt-10 p-6 bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 rounded-lg shadow-2xl flex gap-10'>
            {/* 入力部分 */}
            <div className='flex flex-col items-center w-1/2 bg-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-3xl font-bold text-purple-700 mb-8'>ユーザー登録システム</h2>
                <div className='w-full max-w-md'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-lg font-semibold text-gray-600'>ユーザー情報入力</h3>
                        <input
                            onChange={handleInputName}
                            value={userName}
                            type="text"
                            placeholder='名前を入力'
                            className='w-full border px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-purple-400'
                        />
                        <input
                            onChange={handleInputAge}
                            value={userAge}
                            type="text"
                            placeholder='年齢を入力'
                            className='w-full border px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-purple-400'
                        />
                        <select
                            onChange={handleInputGender}
                            value={userGender}
                            className='w-full border px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-purple-400'
                        >
                            <option value="">性別を選択</option>
                            <option value="男性">男性</option>
                            <option value="女性">女性</option>
                            <option value="その他">その他</option>
                        </select>
                        <button
                            onClick={handleSubmit}
                            className='bg-purple-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-purple-400 transition-all duration-300 shadow-lg'
                        >
                            登録
                        </button>
                    </div>
                </div>
            </div>

            {/* 検索部分 */}
            <div className='flex flex-col items-center w-1/2 bg-white p-6 rounded-lg shadow-lg'>
                <h3 className='text-lg font-semibold text-gray-600 mb-8'>ユーザー情報検索</h3>
                <div className='w-full max-w-md'>
                    <div className='flex flex-col gap-4'>
                        <input
                            onChange={handleSearchInputName}
                            value={searchName}
                            type="text"
                            placeholder='名前を入力'
                            className='w-full border px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-blue-400'
                        />
                        <input
                            onChange={handleSearchInputAge}
                            value={searchAge}
                            type="text"
                            placeholder='年齢を入力'
                            className='w-full border px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-blue-400'
                        />
                        <select
                            onChange={handleSearchInputGender}
                            value={searchGender}
                            className='w-full border px-3 py-2 outline-none rounded-lg focus:ring-2 focus:ring-blue-400'
                        >
                            <option value="">性別を選択</option>
                            <option value="男性">男性</option>
                            <option value="女性">女性</option>
                            <option value="その他">その他</option>
                        </select>
                        <ul className='mt-4 border-t'>
                            {filteringUser.map((data, index) => (
                                <li key={index} className={`flex justify-between border-b p-4 ${data.gender === "女性" ? 'bg-pink-100' : 'bg-blue-100'} rounded-lg`}>
                                    <span>{data.name}</span>
                                    <span>{data.age}</span>
                                    <span>{data.gender}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterSystem;
