"use client";
import { useAtom } from "jotai";
import { cartAtom, type CartItem } from "./utils/CartAtom";
import { products } from "./data/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MinusIcon } from '../redux-toolkit/components/icon/MinusIcon';

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

    // カートに戻す機能
    const reduceItem = (itemId: number) => {
        setCartItem((prevCart) => {
            const existingItem = prevCart.find((prevItem) => prevItem.id === itemId);
            if(existingItem) {
                return prevCart.map((prevCartItem) => (
                    prevCartItem.id === itemId && prevCartItem.quantity > 1
                ) ? { ...prevCartItem, quantity: prevCartItem.quantity - 1} : prevCartItem
            );
        }
        return prevCart;
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
    <div className="container mx-auto py-10 px-4 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-10">Shopping Cart 🛒</h1>
      <div className="flex justify-center mb-8">
        <p className="text-xl font-semibold text-gray-800">カートの中身の合計: <span className="text-green-500">{totalAmount}</span> 円</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
            <Card key={product.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <CardTitle className="text-2xl font-medium">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700">値段: {product.price} 円</p>
                    <Badge variant="outline" className="mt-2">季節の果物</Badge>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button variant="default"  onClick={() => addItem(product)}>
                        カートに追加
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-6">カートの中身</h3>
        <ul className="space-y-4">
            {cartItem.map((item) => (
                <li key={item.id} className="flex justify-between items-center p-4 border rounded-lg shadow-md">
                    <div>
                        <span className="font-medium text-lg">{item.name}</span>
                        <span className="ml-4 text-gray-700">価格: {item.price * item.quantity} 円 / 数量: {item.quantity}</span>
                    </div>
                    <div className="flex gap-3">
                        <Button className="bg-green-500" onClick={() => reduceItem(item.id)}>
                            戻す
                        </Button>
                        <Button variant="destructive" onClick={() => removeItem(item.id)}>
                            削除
                        </Button>
                    </div>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
