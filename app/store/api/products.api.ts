import { IProduct } from "@/types/IProduct";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get } from "http";

export const productApi = createApi({
 reducerPath: "productApi",
 baseQuery: fetchBaseQuery({
  baseUrl: "http://localhost:4200/api",
 }),
 endpoints: (builder) => ({
  getProducts: builder.query<IProduct[], void>({
   query: () => "products",
  }),
 }),
});

export const { useGetProductsQuery } = productApi;
