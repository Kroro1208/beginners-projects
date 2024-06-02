"use client";
import { useState } from 'react'
import { Modal } from './Modal';
import Link from 'next/link';

const ModalPage = () => {
    const [open, setOpen] = useState<boolean>(false);
 
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <button
        onClick={()=>setOpen(true)}
        className='px-3 py-2 text-white bg-indigo-500 hover:bg-indigo-400 rounded-md shadow-lg'>
            Modal Open
        </button>
        <Modal open={open} onClose={() => setOpen(false)} >
            <div className='flex flex-col gap-4 items-center'>
                <h1 className='text-2xl font-mono'>ポケモン神経衰弱ゲーム!!</h1>
                <p className='text-sm font-mono'>ポケモンAPIを活用した神経衰弱ゲームが体験できます</p>
                <div className='flex items-center justify-center gap-3'>
                    <Link href={"/pokemon-game"}>
                        <button className="bg-green-500 px-3 py-2 rounded-lg text-white hover:bg-green-500/90 border-green-600 border-b-4 active:border-b-0">
                            ゲームを開始する
                        </button>
                    </Link>
                    <button className="bg-red-400 px-3 py-2 rounded-lg text-white hover:bg-red-500/90 border-red-600 border-b-4 active:border-b-0">
                        やめておく
                    </button>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default ModalPage
