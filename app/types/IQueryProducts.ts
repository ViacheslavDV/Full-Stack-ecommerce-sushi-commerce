import { Dispatch, SetStateAction } from "react";

export interface IParam {
 sortedParam: "price" | "rating" | "createdAt";
}

export interface IOrder {
 sortOrder: "asc" | "desc";
}

export interface ISortedParam {
 sortedParam: "price" | "rating" | "createdAt";
 setSortedParam: Dispatch<SetStateAction<string>>;
}

export interface ISortedOrder {
 sortOrder: "asc" | "desc";
 setSortedOrder: Dispatch<SetStateAction<string>>;
}
