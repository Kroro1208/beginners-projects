import { atom } from "jotai";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number
}

export const cartAtom = atom<CartItem[]>([]);