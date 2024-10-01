"use client";
import { ReactNode } from "react";
import { SWRConfig } from "swr";
import { LocalStorageProvider } from "./localStorageProvider";

export default function CacheProvider({ children }: { children: ReactNode }) {
  return (
    //@@ts-expect-error
    <SWRConfig value={{ provider: LocalStorageProvider }}>{children}</SWRConfig>
  );
}
