import { IInitialStateProduct } from "@/app/types/IInitialStateProduct";
import { IProduct } from "@/app/types/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialStateProduct = {
 items: [],
};

export const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addToCart: (state, action: PayloadAction<IProduct>) => {
   const cartItem = state.items.find((item) => item.id === action.payload.id);
   if (cartItem) {
    cartItem.quantity++;
   } else {
    state.items.push({ ...action.payload, quantity: 1 });
   }
  },
  incrementQuantity: (state, action: PayloadAction<number>) => {
   const item = state.items.find((item) => item.id === action.payload);
   if (item) {
    item.quantity++;
   }
  },
  decrementQuantity: (state, action: PayloadAction<number>) => {
   const item = state.items.find((item) => item.id === action.payload);
   if (item) {
    if (item.quantity === 1) {
     item.quantity = 1;
    } else {
     item.quantity--;
    }
   }
  },
  removeFromCart: (state, action: PayloadAction<IProduct>) => {
   state.items = state.items.filter((item) => item.id !== action.payload.id);
  },
 },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
