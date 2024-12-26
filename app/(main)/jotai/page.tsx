"use client";
import { products } from "./data/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "./utils/CartHooks";

export default function CartPage() {
  const { addItem, reduceItem, removeItem, totalAmount, cartItem } = useCart();

  return (
    <div className="container mx-auto py-10 px-4 lg:px-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Shopping Cart 🛒</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Card
            key={product.id}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-medium">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">値段: {product.price} 円</p>
              <Badge variant="outline" className="mt-2">
                季節の果物
              </Badge>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="default" onClick={() => addItem(product)}>
                カートに追加
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold mb-6">カートの中身</h3>
          <p className="text-xl font-semibold text-gray-800">
            カートの中身の合計:{" "}
            <span className="text-green-500">{totalAmount}</span> 円
          </p>
        </div>
        <ul className="space-y-4">
          {cartItem.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 border rounded-lg shadow-md"
            >
              <div>
                <span className="font-medium text-lg">{item.name}</span>
                <span className="ml-4 text-gray-700">
                  価格: {item.price * item.quantity} 円 / 数量: {item.quantity}
                </span>
              </div>
              <div className="flex gap-3">
                <Button
                  className="bg-green-500"
                  onClick={() => reduceItem(item.id)}
                >
                  減らす
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => removeItem(item.id)}
                >
                  削除
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
