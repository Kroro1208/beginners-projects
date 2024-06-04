import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from '../features/cart/CartSlice';
import { TrashIcon } from "./icon/TrashIcon";
import { PlusIcon } from "./icon/PlusIcon";
import { MinusIcon } from "./icon/MinusIcon";


type Props = {
    id: number;
    img: StaticImageData;
    title: string;
    price: number;
    amount: number;
}

const CartItem = ({ id, img, title, price, amount }: Props) => {
    const dispatch = useDispatch();

    return (
        <article className='flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md'>
            <div className="flex items-center">
                <Image src={img} alt={title} className='w-24 h-24 object-cover rounded-lg hover:scale-[2.5] transition-all duration-300' />
                <div className="ml-4">
                    <h4 className="text-lg font-bold">{title}</h4>
                    <h4 className="font-semibold">{price}</h4>
                    <button
                        onClick={() => dispatch(removeItem(id))}
                        className='text-red-500 hover:text-red-700'>
                        <TrashIcon />
                    </button>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    onClick={() => dispatch(increase(id))}
                    className='text-green-500 hover:text-green-700'>
                    <PlusIcon />
                </button>
                <p className="mx-2">{amount}</p>
                <button
                    onClick={() => dispatch(decrease(id))}
                    className='text-red-500 hover:text-red-700'>
                    <MinusIcon />
                </button>
            </div>
        </article>
    )
}

export default CartItem
