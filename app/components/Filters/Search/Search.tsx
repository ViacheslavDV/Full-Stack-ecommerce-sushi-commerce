import { useState, ChangeEvent } from "react";

const Search: React.FC = () => {
 const [searchValue, setSearchValue] = useState("");

 return (
  <div className="bg-yellow-500 rounded-md w-[300px] h-[28px] pt-[2px]">
   <input
    value={searchValue}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
    placeholder="search"
    className="ml-2 bg-transparent text-black placeholder:text-red-600 focus:outline-none"
   />
  </div>
 );
};

export default Search;
