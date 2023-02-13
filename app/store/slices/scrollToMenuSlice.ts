import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

const initialState: any = {};

export const scrollToMenuSlice = createSlice({
 name: "scroll",
 initialState,
 reducers: {
  scrollToMenu: (state) => {
   const menuRef = state?.current?.scrollIntoView({
    behavior: "smooth",
   });
  },
 },
});

export const scrollActions = scrollToMenuSlice.actions;
export const scrollReducer = scrollToMenuSlice.reducer;
