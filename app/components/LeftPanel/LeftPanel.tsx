import { useScrollToTop } from "@/app/hooks/useScrollToTop";
import { FiArrowUpCircle } from "react-icons/fi";
import CartPanel from "./CartPanel";
import { memo } from "react";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";

const LeftPanel: React.FC = memo(() => {
 const { scrollToTop, showButton } = useScrollToTop();
 const { persistedReducer } = useTypedSelector((state) => state);
 return (
  <div className="space-y-4 p-2 rounded-md flex flex-col">
   {showButton && (
    <button className="space-y-4">
     <FiArrowUpCircle onClick={() => scrollToTop()} className="h-[42px] w-[42px] cursor-pointer" />
    </button>
   )}
   {persistedReducer.cart.items.length !== 0 && (
    <button>
     <CartPanel />
    </button>
   )}
  </div>
 );
});

export default LeftPanel;
