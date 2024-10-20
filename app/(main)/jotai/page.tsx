import { useAtom } from "jotai";
import { cartAtom, type CartItem } from "./utils/CartAtom";

export default function CartPage() {
    const [cartItem, setCartItem] = useAtom(cartAtom);
  return (
    <div>
      
    </div>
  )
}
