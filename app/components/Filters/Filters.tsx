import { Dispatch, SetStateAction, useState, useCallback, memo } from "react";
import Search from "./Search/Search";
import { IoIosOptions, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineHorizontalRule } from "react-icons/md";

type FilterType = {
 searchQuery: string;
 setSearchQuery: Dispatch<SetStateAction<string>>;
 sortedParam: string;
 setSortedParam: Dispatch<SetStateAction<string>>;
 sortOrder: string;
 setSortOrder: Dispatch<SetStateAction<string>>;
};

const Filters: React.FC<FilterType> = memo(
 ({ searchQuery, setSearchQuery, sortedParam, setSortedParam, sortOrder, setSortOrder }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleDate = useCallback(() => {
   setSortedParam("createdAt");
   setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  }, [sortOrder, sortedParam]);

  const handleRating = useCallback(() => {
   setSortedParam("rating");
   setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  }, [sortOrder, sortedParam]);

  const handlePrice = useCallback(() => {
   setSortedParam("price");
   setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  }, [sortOrder, sortedParam]);

  return (
   <>
    <div
     onClick={() => setShowFilters((prev) => !prev)}
     className="flex justify-center mx-auto border-b-[1px] border-slate-200 shadow-sm my-2 w-[90%] rounded-md cursor-pointer"
    >
     Filters <IoIosOptions className="ml-2 mt-[3px] w-[18px] h-[18px]" />
    </div>
    {showFilters && (
     <div className="flex justify-center mx-auto pb-1">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
     </div>
    )}
    {showFilters && (
     <div className="flex flex-row justify-around mx-auto w-[90%] my-2 border-b-[1px] border-slate-200 rounded-md">
      <p className="text-sky-900">Order By :</p>
      <p
       className="flex flex-row cursor-pointer hover:border-b-[1px] border-pink-600"
       onClick={() => handleDate()}
      >
       Date
       {sortedParam === "createdAt" && sortOrder === "desc" ? (
        <IoIosArrowDown className="mt-[6px] ml-[4px]" />
       ) : sortedParam === "createdAt" && sortOrder === "asc" ? (
        <IoIosArrowUp className="mt-[5px] ml-[4px]" />
       ) : (
        <MdOutlineHorizontalRule className="mt-[6px] ml-[4px]" />
       )}
      </p>
      <p
       className="flex flex-row cursor-pointer hover:border-b-[1px] border-pink-600"
       onClick={() => handleRating()}
      >
       Rating
       {sortedParam === "rating" && sortOrder === "desc" ? (
        <IoIosArrowDown className="mt-[6px] ml-[4px]" />
       ) : sortedParam === "rating" && sortOrder === "asc" ? (
        <IoIosArrowUp className="mt-[5px] ml-[4px]" />
       ) : (
        <MdOutlineHorizontalRule className="mt-[6px] ml-[4px]" />
       )}
      </p>
      <p
       className="flex flex-row cursor-pointer hover:border-b-[1px] border-pink-600"
       onClick={() => handlePrice()}
      >
       Price
       {sortedParam === "price" && sortOrder === "desc" ? (
        <IoIosArrowDown className="mt-[6px] ml-[4px]" />
       ) : sortedParam === "price" && sortOrder === "asc" ? (
        <IoIosArrowUp className="mt-[5px] ml-[4px]" />
       ) : (
        <MdOutlineHorizontalRule className="mt-[6px] ml-[4px]" />
       )}
      </p>
     </div>
    )}
   </>
  );
 }
);

export default Filters;
