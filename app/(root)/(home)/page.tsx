import dynamic from "next/dynamic";
import { Suspense } from "react";
import HomePage from "./components/HomePage";
export const dynamicParams = true;

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
