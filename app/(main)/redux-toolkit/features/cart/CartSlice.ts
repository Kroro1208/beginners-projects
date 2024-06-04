import { createSlice, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../../types";

const initialState: CartState = {
  cartItems: [],
  amount: 1,
  total: 0,
};