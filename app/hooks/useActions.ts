import { cartActions } from "./../store/slices/cartSlice";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const allActions = {
 ...cartActions,
};

export const useActions = () => {
 const dispatch = useDispatch();
 return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
