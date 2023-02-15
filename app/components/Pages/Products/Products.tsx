import Preview from "@/app/components/Preview/Preview";
import { IProduct } from "@/app/types/IProduct";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import Filters from "@/app/components/Filters/Filters";
import { useProductsQuery } from "@/app/hooks/useProductsQuery";
import Error from "@/app/components/Loaders/Error";

const Products: React.FC = () => {
 const { data, status, searchQuery, setSearchQuery } = useProductsQuery();

 return (
  <div className="bg-white">
   <div></div>
   <div>
    <Preview />
   </div>
   <div>
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
