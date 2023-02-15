import { useActions } from "@/app/hooks/useActions";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { IProduct } from "@/app/types/IProduct";
import Image from "next/image";

const Cart: React.FC = () => {
 const { persistedReducer } = useTypedSelector((state) => state);
 const { decrementQuantity, incrementQuantity, removeFromCart } = useActions();
 // Total price
 const total = persistedReducer.cart.items
  .reduce((prev, curr) => (prev += curr.price * curr.quantity), 0)
  .toFixed(2);

 const myLoader = ({ src, width }: { src: string; width: number }) => {
  return `http://localhost:4200${src}?${width}`;
 };

 return (
  <div className="h-[calc(100vh-84px)] bg-white">
   {persistedReducer.cart &&
    persistedReducer.cart.items.map((item: IProduct) => (
     <div key={item.id}>
      <main className="flex flex-row justify-around p-4 m-4 h-[120px] border-[1px] border-gray-300 rounded-md ">
       <div className="flex flex-row lg:justify-around space-x-2 max-md:w-[380px] w-[55%]">
        <div className="flex justify-center w-[160px]">
         <Image
          className="rounded-md border-2 border-black"
          loader={myLoader}
          src={item.images}
          width={160}
          height={100}
          alt={item.name}
         />
        </div>
        <div className="my-auto pl-4 overflow-hidden w-[180px] max-md:w-[120px]">{item.name}</div>
        <div className="py-8 pl-4 whitespace-nowrap">
         {(item.price * item.quantity).toFixed(2)} €
        </div>
       </div>

       <div className="flex flex-row space-x-3 my-auto">
        <button
         className="border-[1px] border-gray-300 rounded-md w-[28px]"
         onClick={() => incrementQuantity(item.id)}
        >
         +
        </button>
        <p className="mt-[1px]">{item.quantity}</p>
        <button
         className="border-[1px] border-gray-300 rounded-md w-[28px]"
         onClick={() => decrementQuantity(item.id)}
        >
         -
        </button>
       </div>
       <div
        onClick={() => removeFromCart(item)}
        className="flex my-auto text-red-500 border-black cursor-pointer hover:border-b-2"
       >
        Remove
       </div>
      </main>
     </div>
    ))}
   {persistedReducer.cart.items.length >= 1 && (
    <div className="flex justify-end mr-20 max-md:mr-10">Total : {total} €</div>
   )}
   {persistedReducer.cart.items.length < 1 && (
    <div className="flex justify-center pt-[20vh]">Cart is Empty</div>
   )}
  </div>
 );
};

export default Cart;
