import { Dispatch, SetStateAction, useState } from "react";
import Search from "./Search/Search";
import { IoIosOptions } from "react-icons/io";
import FilterByDate from "./FilterByDate/FilterByDate";
import FilterByPrice from "./FilterByPrice/FilterByPrice";
import FilterByRating from "./FilterByRating/FilterByRating";

type FilterType = {
 searchQuery: string;
 setSearchQuery: Dispatch<SetStateAction<string>>;
};

const Filters: React.FC<FilterType> = ({ searchQuery, setSearchQuery }) => {
 const [showFilters, setShowFilters] = useState(false);

 return (
  <>
   <div
    onClick={() => setShowFilters((prev) => !prev)}
    className="flex justify-center mx-auto my-2 bg-slate-100 border-[1px] w-[90%] rounded-md cursor-pointer"
   >
    Filters <IoIosOptions className="ml-2 mt-[3px] w-[18px] h-[18px]" />
   </div>
   {showFilters && (
    <div className="flex justify-center">
     <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
   )}
   {showFilters && (
    <ul className="flex flex-row  justify-around">
     <li>
      <FilterByDate />
     </li>
     <li>
      <FilterByRating />
     </li>
     <li>
      <FilterByPrice />
     </li>
    </ul>
   )}
  </>
 );
};

export default Filters;
