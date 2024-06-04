import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import ModalSlice from "./features/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: ModalSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
