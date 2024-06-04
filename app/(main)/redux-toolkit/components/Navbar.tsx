import { NextPage } from 'next'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import rocketImage from '../../../../public/rocket.gif';
import Image from 'next/image';


const Navbar: NextPage = () => {
    const amount = useSelector((state: RootState) => state.cart.amount);
    return (
        <nav>
            <div>
                <h3>SHOP CART PROJECT</h3>
                <p>using Redux with TypeScript</p>
                <Image src={rocketImage} alt="rocket" width={80} height={80} />
            </div>
        </nav>
    )
}

export default Navbar
