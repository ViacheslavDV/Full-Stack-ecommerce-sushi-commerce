import { useDebounce } from "./useDebounce";
import { IProduct } from "@/app/types/IProduct";
import { useState } from "react";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import axios from "axios";

export async function getStaticProps() {
 const queryClient = new QueryClient();
 await queryClient.prefetchQuery<IProduct[]>(
  ["products"],
  async (): Promise<IProduct[]> =>
   await axios
    .get(`http://localhost:4200/api/products?searchQuery=""&sortByPar="createdAt"&orderByPar="asc"`)
    .then((res) => res.data)
 );
 return {
  props: {
   dehydratedState: dehydrate(queryClient),
  },
 };
}

export const useProductsQuery = () => {
 const [searchQuery, setSearchQuery] = useState("");
 const [sortedParam, setSortedParam] = useState("createdAt");
 const [sortOrder, setSortOrder] = useState("asc");
 const debounced = useDebounce(searchQuery);

 const { data, status } = useQuery({
  queryKey: ["products", debounced, sortedParam, sortOrder],
  queryFn: async (): Promise<IProduct[]> =>
   await axios
    .get(
     `http://localhost:4200/api/products?searchQuery=${searchQuery}&sortByPar=${sortedParam}&orderByPar=${sortOrder}`
    )
    .then((res) => res.data),
  refetchOnMount: false,
  refetchOnWindowFocus: false,
 });

 return {
  data,
  status,
  searchQuery,
  setSearchQuery,
  sortedParam,
  setSortedParam,
  sortOrder,
  setSortOrder,
 };
};
