"use client";
import { useAtom } from "jotai";
import { cartAtom, type CartItem } from "./utils/CartAtom";
import { products } from "./data/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CartPage() {
    const [cartItem, setCartItem] = useAtom(cartAtom);

    // カートにアイテム追加する機能
    const addItem = (item: CartItem) => {
        setCartItem((prevCart) => {
                const existingItem = prevCart.find((prevItem) => prevItem.id === item.id);
                if(existingItem) {
                    return prevCart.map((prevCartItem) => (
                        prevCartItem.id === item.id
                    ) ? { ...prevCartItem, quantity: prevCartItem.quantity + 1} : prevCartItem
                );
            }
            return [...prevCart, {...item, quantity: 1}];
        });
    }

    // 削除機能
    const removeItem = (itemId: number) => {
        setCartItem((prevCart) => (
            prevCart.filter((prevCartItem) => prevCartItem.id !== itemId)
        ))
    }

    const totalAmount = cartItem.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)
    
  return (
    <div>
      <h1>Shopping Cart🛒</h1>
      <p>カートの中身の合計{totalAmount}</p>
      <div>
        {products.map((product) => (
            <Card key={product.id}>
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>値段: {product.price}</p>
                    <Badge>季節の果物</Badge>
                </CardContent>
                <CardFooter>
                    <Button variant="default"  onClick={() => addItem(product)}>
                        カートに追加
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
      <div>
        <h3>カートの中身</h3>
        <ul>
            {cartItem.map((item) => (
                <li key={item.id}>
                    <div>
                        <span>{item.name}</span>
                        <span>価格: {item.price * item.quantity}/数量: {item.quantity}</span>
                    </div>
                    <Button variant="destructive" onClick={() => removeItem(item.id)}>
                        削除
                    </Button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
