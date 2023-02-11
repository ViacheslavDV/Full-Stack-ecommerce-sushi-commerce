import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import Link from "next/link";
import { GiSushis } from "react-icons/gi";

type LayoutType = {
 children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
 const { persistedReducer } = useTypedSelector((state) => state);
 return (
  <>
   <div className="flex flex-row justify-around h-[68px] pt-[20px] bg-gradient-to-b from-black to-sky-900 text-gray-300">
    <Link href="/products">
     <span className="flex flex-row justify-center font-extrabold rounded-md w-[120px] h-[28px] pt-[2px] ml-12 whitespace-nowrap hover:border-b-2 hover:border-r-2 hover:text-gray-400">
      <GiSushis className="h-[24px] w-[24px] mr-4 text-rose-500" /> 寿司
     </span>
    </Link>
    {/* <Search /> */}
    <div className="flex justify-around space-x-8">
     <div>
      <Link href="/products">
       <div className="rounded-md w-[80px] h-[28px] pt-[2px] text-center hover:border-b-2 hover:border-r-2 hover:text-gray-400">
        Menu
       </div>
      </Link>
     </div>
     <Link href="/cart">
      <div className="rounded-md w-[80px] h-[28px] pt-[2px] text-center hover:border-b-2 hover:border-r-2 hover:text-gray-400">
       {persistedReducer.cart.items.length !== 0 && (
        <span className="animate-ping relative left-[42px] bottom-[10px] inline-flex h-[8px] w-[8px] rounded-full bg-red-500 opacity-75"></span>
       )}
       Cart
      </div>
     </Link>
    </div>
   </div>
   <main>{children}</main>
  </>
 );
};

export default Layout;
