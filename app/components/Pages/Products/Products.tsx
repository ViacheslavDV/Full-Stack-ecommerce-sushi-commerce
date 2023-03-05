import { memo } from "react";
import { IProduct } from "@/app/types/IProduct";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import Filters from "@/app/components/Filters/Filters";
import { useProductsQuery } from "@/app/hooks/useProductsQuery";
import Error from "@/app/components/Loaders/Error";
import LeftPanel from "@/app/components/LeftPanel/LeftPanel";
import Loading from "@/app/components/Loaders/Loading";
import axios from "axios";

const Products: React.FC = memo(() => {
 const {
  data,
  status,
  searchQuery,
  setSearchQuery,
  sortedParam,
  setSortedParam,
  sortOrder,
  setSortOrder,
 } = useProductsQuery();

 return (
  <>
   <div>
    <Filters
     searchQuery={searchQuery}
     setSearchQuery={setSearchQuery}
     sortedParam={sortedParam}
     setSortedParam={setSortedParam}
     sortOrder={sortOrder}
     setSortOrder={setSortOrder}
    />
   </div>
   <div className="flex right-2 fixed bottom-[200px]">
    <LeftPanel />
   </div>
   <div>
    {status === "loading" && <Loading />}
    {status === "error" && <Error />}
    {data?.length === 0 && <Error />}
    {status === "success" &&
     data?.map((item: IProduct) => (
      <div key={item.id}>
       <ProductItem item={item} />
      </div>
     ))}
   </div>
  </>
 );
});

export default Products;
