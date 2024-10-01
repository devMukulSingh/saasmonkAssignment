'use client'
import { ReactNode } from "react";
import { SWRConfig } from "swr";
import { localStorageProvider } from "./localStorageProvider";



export default function CacheProvider({children}:{children:ReactNode}){
    return (
            //@ts-ignore
      <SWRConfig value={{ provider: localStorageProvider  }}>
        {children}
    </SWRConfig>
    );
}