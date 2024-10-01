"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { KeyboardEvent, useState } from "react";

const SearchBar = ({}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query !== "") {
      router.push(`/?query=${query}`);
    }
  };
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
        onKeyUp={(e) => handleSearch(e)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h border-none e"
        placeholder="Search for your favourite movie "
      />
    </div>
  );
};

export default SearchBar;
