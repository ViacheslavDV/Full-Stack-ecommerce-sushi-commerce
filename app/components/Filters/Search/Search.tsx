import { Dispatch, SetStateAction } from "react";
import { ChangeEvent } from "react";
import { MdSearch, MdClose } from "react-icons/md";

type SearchType = {
 searchQuery: string;
 setSearchQuery: Dispatch<SetStateAction<string>>;
};

const Search: React.FC<SearchType> = ({ searchQuery, setSearchQuery }) => {
 return (
  <div className=" flex flex-row bg-white border-[1px] border-gray-400 rounded-md w-[380px] h-[28px] pt-[2px]">
   <MdSearch className="opacity-60 ml-1 mt-[2px] w-[20px] h-[20px]" />
   <input
    value={searchQuery}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
    placeholder="search"
    className="ml-[2px] bg-transparent w-[320px] text-black placeholder:text-zinc-300  focus:outline-none"
   />
   {searchQuery && (
    <MdClose
     className="ml-[6px] opacity-60 w-[24px] h-[24px] cursor-pointer"
     onClick={() => setSearchQuery("")}
    />
   )}
  </div>
 );
};

export default Search;
