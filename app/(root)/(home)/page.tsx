"use client";
import SearchBar from "./components/SearchBar";
import MovieCards from "./components/MovieCards";
import { useSearchParams } from "next/navigation";
import SearchMovies from "./components/SearchMovies";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  return (
    <main className="flex flex-col gap-8 p-5">
      <h1 className="text-3xl">The best movie reviews site!</h1>
      <SearchBar />
      {query ? <SearchMovies query={query} /> : <MovieCards />}
    </main>
  );
}
