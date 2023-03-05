import { useActions } from "@/app/hooks/useActions";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { IProduct } from "@/app/types/IProduct";

type ICartMenu = {
 item: IProduct;
};

const CartMenu: React.FC<ICartMenu> = ({ item }) => {
 const { incrementQuantity, decrementQuantity, removeFromCart } = useActions();
 const { persistedReducer } = useTypedSelector((state) => state);
 const uniqueProduct = persistedReducer.cart.items.find((i) => i.id === item.id);

 return (
  <div className="flex flex-col mx-auto justify-center rounded-md w-[140px] my-[10px]">
   <div className="flex flex-row mx-auto space-x-3">
    <button
     onClick={() => incrementQuantity(item.id)}
     className="border-[1px] border-gray-300 rounded-md w-[28px]"
    >
     +
    </button>
    <p className="mt-[1px]">{uniqueProduct?.quantity}</p>
    <button
     onClick={() => decrementQuantity(item.id)}
     className="border-[1px] border-gray-300 rounded-md w-[28px]"
    >
     -
    </button>
   </div>
   <div
    className="flex mx-auto mt-[8px] rounded-md w-[70px] shadow-md justify-center border-[1px] border-red-500 text-red-400 cursor-pointer hover:text-red-600"
    onClick={() => removeFromCart(item)}
   >
    Remove
   </div>
  </div>
 );
};

export default CartMenu;
