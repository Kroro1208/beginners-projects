import type { NextPage } from 'next'
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import rocketImage from '../../../../public/rocket.gif';
import shopCartImage from '../../../../public/cart.gif';


const Navbar: NextPage = () => {
    const amount = useSelector((state: RootState) => state.cart.amount);
    return (
        <nav className='w-full container mx-auto flex flex-col md:flex-row justify-between items-center p-5'>
            <div className='flex gap-3 items-center'>
                <h3 className='text-2xl md:text-3xl font-bold'>SHOP CART PROJECT</h3>
                <p className='text-sm md:text-lg font-bold'>using Redux with TypeScript</p>
                <Image src={rocketImage} alt="rocket" width={60} height={60} className="w-16 h-16 md:w-20 md:h-20" />
            </div>
            <div className='flex items-center relative mt-4 md:mt-0'>
                <Image src={shopCartImage} alt="cart" width={40} height={40} className="w-10 h-10 md:w-12 md:h-12" />
                <div className='absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center transform translate-x-2 translate-y-2'>
                    <p className='text-white mb-0 text-sm md:text-lg'>{amount}</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
