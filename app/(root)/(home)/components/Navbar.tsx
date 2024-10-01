import StyledLink from "@/components/StyledLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Link
      href={"/"}
      className="px-8 h-20 bg-neutral-300 flex justify-between items-center"
    >
      <h1>MOVIECRITIC</h1>
      <div className="flex gap-2">
        <StyledLink 
        href={"/movie/new"}
        className="bg-white text-blue-600"
        >
        
        Add new movie
        
        </StyledLink>

        <StyledLink
          href={"/review/new"}
          className=""
        >
          Add new review
        </StyledLink>
      </div>
    </Link>
  );
};

export default Navbar;
