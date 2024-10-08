import StyledLink from "@/components/StyledLink";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-8 h-20 bg-neutral-300 flex justify-between items-center">
      <Link prefetch={false} href={"/"}>
        MOVIECRITIC
      </Link>
      <div className="flex gap-2">
        <StyledLink href={"/movie/new"} className="bg-white text-blue-600">
          Add new movie
        </StyledLink>

        <StyledLink href={"/review/new"} className="">
          Add new review
        </StyledLink>
      </div>
    </div>
  );
};

export default Navbar;
