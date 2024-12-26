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
import type { CartItem } from "./utils/CartAtom";

// 商品カードのProps型定義
type ProductCardProps = {
  product: CartItem;
  onAddToCart: (product: CartItem) => void;
};

// カート内アイテムのProps型定義
type CartItemProps = {
  item: CartItem;
  onReduce: (id: number) => void;
  onRemove: (id: number) => void;
};

// 商品カードコンポーネント
const ProductCard = ({ product, onAddToCart }: ProductCardProps) => (
  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-2xl font-medium">{product.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700">値段: {product.price.toLocaleString()} 円</p>
      <Badge variant="outline" className="mt-2">
        季節の果物
      </Badge>
    </CardContent>
    <CardFooter className="flex justify-center">
      <Button
        variant="default"
        onClick={() => onAddToCart(product)}
        aria-label={`${product.name}をカートに追加`}
      >
        カートに追加
      </Button>
    </CardFooter>
  </Card>
);

// カート内アイテムコンポーネント
const CartItemRow = ({ item, onReduce, onRemove }: CartItemProps) => (
  <li className="flex justify-between items-center p-4 border rounded-lg shadow-md">
    <div>
      <span className="font-medium text-lg">{item.name}</span>
      <span className="ml-4 text-gray-700">
        価格: {(item.price * item.quantity).toLocaleString()} 円 / 数量:{" "}
        {item.quantity}
      </span>
    </div>
    <div className="flex gap-3">
      <Button
        className="bg-green-500 hover:bg-green-600"
        onClick={() => onReduce(item.id)}
        aria-label={`${item.name}の数量を減らす`}
      >
        減らす
      </Button>
      <Button
        variant="destructive"
        onClick={() => onRemove(item.id)}
        aria-label={`${item.name}をカートから削除`}
      >
        削除
      </Button>
    </div>
  </li>
);

// ヘッダーコンポーネント
const PageHeader = ({ totalAmount }: { totalAmount: number }) => (
  <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
    <h1 className="text-4xl font-bold text-center mb-4 sm:mb-0">
      Shopping Cart 🛒
    </h1>
  </div>
);

export default function CartPage() {
  const {
    items: cartItems,
    totalAmount,
    addItem,
    reduceItem,
    removeItem,
  } = useCart();

  const handleAddToCart = (product: CartItem) => {
    const result = addItem(product);
    if (!result.success) {
      console.error(result.message);
      // ここでエラー通知を表示することもできます
    }
  };

  const handleReduceItem = (id: number) => {
    const result = reduceItem(id);
    if (!result.success) {
      console.error(result.message);
    }
  };

  const handleRemoveItem = (id: number) => {
    const result = removeItem(id);
    if (!result.success) {
      console.error(result.message);
    }
  };

  return (
    <main className="container mx-auto py-10 px-4 lg:px-8 min-h-screen">
      <PageHeader totalAmount={totalAmount} />

      <section aria-label="商品一覧" className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <section aria-label="カートの中身" className="mt-12">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-6">カートの中身</h2>
          <p className="text-xl font-semibold text-gray-800">
            合計:{" "}
            <span className="text-green-500">
              {totalAmount.toLocaleString()}
            </span>{" "}
            円
          </p>
        </div>
        {cartItems.length > 0 ? (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onReduce={handleReduceItem}
                onRemove={handleRemoveItem}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center py-8">
            カートは空です。商品を追加してください。
          </p>
        )}
      </section>
    </main>
  );
}
