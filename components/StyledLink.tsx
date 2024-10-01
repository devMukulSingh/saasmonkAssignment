import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href: string;
};

const StyledLink = ({ children, className, href }: Props) => {
  return (
    <Link
      prefetch={false}
      href={href}
      className={cn(
        `inline-flex 
        bg-blue-600
        h-8
        px-4
        text-white
        items-center 
        ring-2
        hover:opacity-80
        justify-center 
        whitespace-nowrap 
        rounded-md 
        text-sm 
        font-medium 
        transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        `,
        className
      )}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
