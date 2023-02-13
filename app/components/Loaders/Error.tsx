import { TbMoodSad } from "react-icons/tb";

const Error = () => {
 return (
  <div className="min-h-[900px] flex flex-row justify-center pt-[20%] text-red-500">
   Something went wrong <TbMoodSad className="ml-6 mt-[2px] w-[20px] h-[20px]" />
  </div>
 );
};

export default Error;
