import { useAtom } from "jotai";
import { cartAtom, type CartItem } from "./CartAtom";

// カート操作の結果を表す型
type CartOperationResult = {
  success: boolean;
  message?: string;
};

// カートの状態を表す型
type CartState = {
  items: CartItem[];
  totalAmount: number;
};

// 数量更新関数
const updateItemQuantity = (
  items: CartItem[],
  itemId: number,
  updateFn: (quantity: number) => number
): CartItem[] => {
  return items.map((item) =>
    item.id === itemId ? { ...item, quantity: updateFn(item.quantity) } : item
  );
};

// 合計金額更新関数
const calculateTotalAmount = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const useCart = () => {
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const addItem = (item: CartItem): CartOperationResult => {
    try {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (prevItem) => prevItem.id === item.id
        );
        if (existingItem) {
          return updateItemQuantity(prevItems, item.id, (q) => q + 1);
        }
        return [...prevItems, { ...item, quantity: 1 }];
      });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: `Failed to add item: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  };

  const reduceItem = (itemId: number): CartOperationResult => {
    try {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === itemId);
        if (!existingItem) {
          return prevItems;
        }
        if (existingItem.quantity <= 1) {
          return prevItems;
        }
        return updateItemQuantity(prevItems, itemId, (q) => q - 1);
      });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: `Failed to reduce item quantity: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  };

  const removeItem = (itemId: number): CartOperationResult => {
    try {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: `Failed to remove item: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  };

  const cartState: CartState = {
    items: cartItems,
    totalAmount: calculateTotalAmount(cartItems),
  };

  return {
    ...cartState,
    addItem,
    reduceItem,
    removeItem,
  };
};
