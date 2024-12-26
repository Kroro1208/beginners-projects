import { useAtom } from "jotai";
import { cartAtom, type CartItem } from "./CartAtom";

export const useCart = () => {
  // カートにアイテム追加する機能
  const [cartItem, setCartItem] = useAtom(cartAtom);

  const addItem = (item: CartItem) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((prevItem) => prevItem.id === item.id);
      if (existingItem) {
        return prevCart.map((prevCartItem) =>
          prevCartItem.id === item.id
            ? { ...prevCartItem, quantity: prevCartItem.quantity + 1 }
            : prevCartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // カートに戻す機能
  const reduceItem = (itemId: number) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((prevItem) => prevItem.id === itemId);
      if (existingItem) {
        return prevCart.map((prevCartItem) =>
          prevCartItem.id === itemId && prevCartItem.quantity > 1
            ? { ...prevCartItem, quantity: prevCartItem.quantity - 1 }
            : prevCartItem
        );
      }
      return prevCart;
    });
  };

  // 削除機能
  const removeItem = (itemId: number) => {
    setCartItem((prevCart) =>
      prevCart.filter((prevCartItem) => prevCartItem.id !== itemId)
    );
  };

  const totalAmount = cartItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return { addItem, reduceItem, removeItem, totalAmount, cartItem };
};
