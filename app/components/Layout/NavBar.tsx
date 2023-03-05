import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";

const NavBar: React.FC = () => {
 return (
  <div className="flex flex-row justify-around h-[68px] pt-[20px] bg-slate-100 text-black border-b-[1px] border-slate-300 shadow-md">
   <Link href="/">
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
      <MdShoppingCart className="w-[80px] h-[22px] pt-1" />
     </div>
    </Link>
   </div>
  </div>
 );
};

export default NavBar;
