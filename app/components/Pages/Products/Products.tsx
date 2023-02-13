import Preview from "@/app/components/Preview/Preview";
import { IProduct } from "@/app/types/IProduct";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import Filters from "@/app/components/Filters/Filters";
import { useProductsQuery } from "@/app/hooks/useProductsQuery";
import Error from "@/app/components/Loaders/Error";
import { useScrollToMenu } from "@/app/hooks/useScrollToMenu";

type ProductsType = {
 menuRef: any;
};

const Products: React.FC<ProductsType> = () => {
 const { data, status, searchQuery, setSearchQuery } = useProductsQuery();
 const { menuRef } = useScrollToMenu();

 return (
  <div className="bg-white">
   <div>
    <Preview />
   </div>
   <div ref={menuRef}>
    <Filters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
   </div>
   <div>
    {status === "loading" && "Loading"}
    {status === "error" && <Error />}
    {data?.length === 0 && <Error />}
    {status === "success" &&
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
