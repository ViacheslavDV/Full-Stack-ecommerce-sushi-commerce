import { IProduct } from "@/types/IProduct";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
 reducerPath: "productApi",
 tagTypes: ["Products"],
 baseQuery: fetchBaseQuery({
  baseUrl: "http://localhost:4200/api",
 }),
 endpoints: (builder) => ({
  getProducts: builder.query<IProduct[], void>({
   query: () => "products",
   providesTags: ["Products"],
  }),
  getBySearch: builder.query<IProduct[], string>({
   query: (name) => `products?searchTerm=${name}`,
  }),
 }),
});

export const { useGetProductsQuery } = productApi;
