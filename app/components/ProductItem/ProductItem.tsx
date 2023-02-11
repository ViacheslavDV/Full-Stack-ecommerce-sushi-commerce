import { useActions } from "@/app/hooks/useActions";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { IProduct } from "@/app/types/IProduct";
import Image from "next/image";
import CartMenu from "../CartMenu/CartMenu";

type ProductType = {
 item: IProduct;
};

const ProductItem: React.FC<ProductType> = ({ item }) => {
 const myLoader = ({ src, width }: { src: string; width: number }) => {
  return `http://localhost:4200${src}?${width}`;
 };

 const { addToCart } = useActions();
 const { persistedReducer } = useTypedSelector((state) => state);
 const isInCart = persistedReducer.cart.items.some((p) => p.id === item.id);

 return (
  <div className="flex flex-row flex-wrap p-6 m-8 max-md:p-0 shadow-slate-600 shadow-2xl rounded-md">
   <p className="w-[680px] h-[380px] flex mx-auto shadow-2xl max-md:max-w-[400px] max-md:max-h-[280px]">
    <Image
     className="border-2 border-black rounded-md shadow-lg"
     loader={myLoader}
     src={item.images}
     width={680}
     height={400}
     alt={item.name}
    />
   </p>
   <div className="flex flex-col mx-auto my-auto justify-center min-w-[360px] max-md:p-6">
    <ul className="text-center flex flex-col space-y-4 max-md:space-y-1">
     <li className="pb-10 font-bold text-2xl max-md:text-xl pt-6 max-md:pb-20">{item.name}</li>
     <li>{item.rating}</li>
     <li>{item.price} €</li>
    </ul>
    {isInCart ? (
     <CartMenu item={item} />
    ) : (
     <button
      onClick={() => addToCart(item)}
      className="flex justify-center py-[7px] mx-auto mt-8 mb-2 text-center bg-gradient-to-br from-pink-500 to-sky-200 text-black border-gray-300 w-[140px] h-[40px] rounded-md shadow-md cursor-pointer hover:border-b-2 hover:border-r-2"
     >
      Add To Cart
     </button>
    )}
   </div>
  </div>
 );
};

export default ProductItem;
