import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div
      className="
        border-2 
        rounded-sm 
        border-blue-500 

        bg-white 
        text-black
        flex
        gap-2
        px-2
        w-[25rem]
        items-center

        "
    >
      <Search />
      <Input
        className="h border-none e"
        placeholder="Search for your favourite movie "
      />
    </div>
  );
};

export default SearchBar;
