import { useAtom } from "jotai";
import { cartAtom, type CartItem } from "./utils/CartAtom";

export default function CartPage() {
    const [cartItem, setCartItem] = useAtom(cartAtom);

    // カートにアイテム追加する機能
    const addItem = (item: CartItem) => {
        setCartItem((prevCart) => {
                const existingItem = prevCart.find((prevItem) => prevItem.id === item.id);
                if(existingItem) {
                    return prevCart.map((prevCartItem) => (
                        prevCartItem.id === item.id
                    ) ? { ...prevCartItem, quantity: item.quantity + 1} : prevCartItem
                );
            }
            return [...prevCart, {...item, quantity: item.quantity + 1}];
        });
    }
    
  return (
    <div>
      
    </div>
  )
}
