import Preview from "@/app/components/Preview/Preview";
import { useGetProductsQuery } from "@/app/store/api/products.api";
import { IProduct } from "@/app/types/IProduct";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import Filters from "@/app/components/Filters/Filters";

const Products = () => {
 const { data } = useGetProductsQuery();

 return (
  <div className="bg-white">
   <div>
    <Preview />
   </div>
   <div>
    <Filters />
   </div>
   <div>
    {data &&
     data?.map((item: IProduct) => (
      <div key={item.id}>
       <ProductItem item={item} />
      </div>
     ))}
   </div>
  </div>
 );
};

export default Products;
