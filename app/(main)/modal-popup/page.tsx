"use client";
import { useState } from 'react'
import { Modal } from './Modal';
import Link from 'next/link';

const ModalPage = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <button
                onClick={() => setOpen(true)}
                className="bg-indigo-500 px-4 py-3 rounded-lg text-white hover:bg-indigo-500/90 border-indigo-600 border-b-4 active:border-b-0">
                Modal Open
            </button>
            <Modal open={open} onClose={() => setOpen(false)} >
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-2xl font-mono'>ポケモン神経衰弱ゲーム!!</h1>
                    <p className='text-md font-semibold whitespace-pre-wrap'>
                        ポケモンAPIを活用した神経衰弱ゲームを体験 !!<br/>カードを2枚開い後、5秒で見れなくなるからすぐ覚えてね
                    </p>

                    <div className='flex items-center justify-center gap-3'>
                        <Link href={"/pokemon-game"}>
                            <button className="bg-green-500 px-3 py-2 rounded-lg text-white hover:bg-green-500/90 border-green-600 border-b-4 active:border-b-0">
                                ゲームを開始する
                            </button>
                        </Link>
                        <Link href={"/"}>
                            <button
                                className="bg-red-400 px-3 py-2 rounded-lg text-white hover:bg-red-500/90 border-red-600 border-b-4 active:border-b-0">
                                やめておく
                            </button>
                        </Link>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalPage
