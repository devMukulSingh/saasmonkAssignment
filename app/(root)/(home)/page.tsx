import dynamic from "next/dynamic";
import { Suspense } from "react";
const HomePage = dynamic(() => import("./components/HomePage"),{ssr:false})

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-5">
      <h1 className="text-3xl">The best movie reviews site!</h1>
      <Suspense>
        <HomePage />
      </Suspense>
    </main>
  );
}
