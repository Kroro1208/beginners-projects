import { NextPage } from 'next'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store';
import emptyCartImage from "../../../../public/happy.gif"
import CartItem from './CarItem';
import { openModal } from '../features/modal/ModalSlice';

const CartContainer: NextPage = () => {
    const dispatch = useDispatch();
    const { amount, cartItems, total } = useSelector((state: RootState) => ({
        amount: state.cart.amount,
        cartItems: state.cart.cartItems,
        total: state.cart.total
    }));

    if (amount < 1) {
        return (
            <section className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
                <header>
                    <Image src={emptyCartImage} alt="Empty Cart" className="w-40 h-40 mb-4 mx-auto" />
                    <h2 className='text-4xl font-bold text-gray-800 mb-2'>Your Cart is Empty</h2>
                    <h4 className='text-lg text-gray-600 mb-6'>Looks like you haven't added anything to your cart yet</h4>
                    <button
                        onClick={() => window.location.href = '/redux-toolkit'}
                        className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300'>
                        Start Shopping
                    </button>
                </header>
            </section>
        )
    }

    return (
        <div className='container mx-auto p-4'>
            <section className='bg-white rounded-lg shadow-md p-6'>
                <header className='mb-4'>
                    <h2 className='text-2xl font-bold'>買い物かご</h2>
                </header>
                <div className='space-y-4'>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            amount={item.amount}
                        />
                    ))}
                </div>
                <footer className='mt-4'>
                    <hr className='mb-4' />
                    <div className='flex justify-center items-center'>
                        <h4 className='text-lg font-semibold'>小計 {amount} 個の商品(税込み) :</h4>
                        <span className='text-lg font-semibold'>{total}円</span>
                    </div>
                    <button
                        onClick={() => dispatch(openModal())}
                        className='mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600'>
                        全ての商品の選択解除
                    </button>
                </footer>
            </section>
        </div>
    )
}

export default CartContainer
