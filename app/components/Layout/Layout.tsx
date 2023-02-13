import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";

type LayoutType = {
 children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
 const { persistedReducer } = useTypedSelector((state) => state);

 return (
  <>
   <div className="flex flex-row justify-around h-[68px] pt-[20px] bg-slate-100 text-black border-b-[1px] border-slate-300 shadow-md">
    <Link href="/products">
     <span className="flex flex-row justify-center font-extrabold text-lg rounded-md w-[140px] h-[28px] ml-12 whitespace-nowrap hover:border-b-[1px] hover:border-r-[1px] border-slate-400 hover:text-gray-600">
      Sushi Place
     </span>
    </Link>
    <div className="flex justify-around space-x-8">
     <div>
      <Link href="/products">
       <div className="rounded-md w-[80px] h-[28px] pt-[2px] text-center hover:border-b-[1px] hover:border-r-[1px] border-slate-400 hover:text-gray-600">
        Menu
       </div>
      </Link>
     </div>
     <Link href="/cart">
      <div className="rounded-md w-[80px] h-[28px] text-center hover:border-b-[1px] hover:border-r-[1px] border-slate-400 hover:text-gray-600">
       {/* {persistedReducer.cart.items.length !== 0 && (
        <span className="animate-ping relative left-[42px] bottom-[10px] inline-flex h-[8px] w-[8px] rounded-full bg-red-500 opacity-75"></span>
       )} */}
       <MdShoppingCart className="w-[80px] h-[22px] pt-1" />
      </div>
     </Link>
    </div>
   </div>
   <main>{children}</main>
  </>
 );
};

export default Layout;
