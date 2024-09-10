"use client";
import React, { useEffect } from 'react'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal } from './features/cart/CartSlice'
import type { RootState } from './store'

const Home = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems, dispatch]);

    return (
        <main>
            {isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </main>
    )
}

export default Home
