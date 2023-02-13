import { useDebounce } from "./useDebounce";
import { IProduct } from "@/app/types/IProduct";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProductsQuery = () => {
 const [searchQuery, setSearchQuery] = useState("");
 const [priceQuery, setPriceQuery] = useState();
 const [ratingQuery, setRatingQuery] = useState();
 const [dateQuery, setDateQuery] = useState();
 const debounced = useDebounce(searchQuery);

 const { data, status } = useQuery({
  queryKey: ["products", debounced],
  queryFn: async () =>
   await axios
    .get(
     `http://localhost:4200/api/products?searchTerm=${searchQuery}&?sortByPrice=${priceQuery}&?sortByRating=${ratingQuery}&?sortByDate=${dateQuery}`
    )
    .then((res) => res.data),
 });

 console.log(data);
 return {
  data,
  status,
  searchQuery,
  setSearchQuery,
 };
};
