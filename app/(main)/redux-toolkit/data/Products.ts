import nikeImg1 from "../../../../public/nike.jpg";
import nikeImg2 from "../../../../public/nike2.jpg";
import nikeImg3 from "../../../../public/nike3.jpg";
import nikeImg4 from "../../../../public/nike4.jpg";
import { CartItem } from "../types";

export const Products: CartItem[] = [
  {
    id: 1,
    title: "Off White",
    price: 25000,
    img: nikeImg1,
    amount: 1,
  },
  {
    id: 2,
    title: "Blue Impulse",
    price: 18500,
    img: nikeImg2,
    amount: 1,
  },
  {
    id: 3,
    title: "Picasso",
    price: 13000,
    img: nikeImg3,
    amount: 1,
  },
  {
    id: 4,
    title: "Run Magic",
    price: 15500,
    img: nikeImg4,
    amount: 1,
  },
];
