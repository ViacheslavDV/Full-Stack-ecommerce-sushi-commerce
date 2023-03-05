import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";

const CartPanel = () => {
 const { persistedReducer } = useTypedSelector((state) => state);
 const itemsQuantity = persistedReducer.cart.items.reduce((prev, curr) => prev + curr.quantity, 0);
 return (
  <>
   <div className="bg-rose-600 rounded-full p-[6px]">
    <Link href="/cart">
     <IoMdCart className="h-[32px] w-[30px] cursor-pointer text-white" />
    </Link>
   </div>
   <span className="relative z-2 flex mx-auto my-auto justify-self-center justify-center rounded-full w-[24px] h-[24px] bot-2 bg-black text-white bottom-12 left-4">
    {itemsQuantity}
   </span>
  </>
 );
};

export default CartPanel;
