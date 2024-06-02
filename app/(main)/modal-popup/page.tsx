"use client";
import { useState } from 'react';
import { Modal } from './Modal';
import Link from 'next/link';

const ModalPage = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-sky-700'>
            <button
                onClick={() => setOpen(true)}
                className="bg-gray-500 px-4 py-3 rounded-lg text-white hover:bg-gray-600 border-gray-700 border-b-4 active:border-b-0 transition-all transform active:scale-95">
                Modal Open
            </button>
            <Modal open={open} onClose={() => setOpen(false)} >
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600'>
                        ポケモン神経衰弱ゲーム!!
                    </h1>
                    <p className='text-md font-semibold text-center'>
                        ポケモンAPIを活用した神経衰弱ゲームを体験 !!<br/>
                        カードを2枚開いたら3秒で見れなくなるからすぐ覚えてね。
                        ゲームの制限時間は5分だよ!
                    </p>

                    <div className='flex items-center justify-center gap-4'>
                        <Link href={"/pokemon-game"}>
                            <button className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 border-green-700 border-b-4 active:border-b-0 transition-all transform active:scale-95">
                                ゲームを開始する
                            </button>
                        </Link>
                        <Link href={"/"}>
                            <button className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 border-red-700 border-b-4 active:border-b-0 transition-all transform active:scale-95">
                                やめておく
                            </button>
                        </Link>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalPage;
