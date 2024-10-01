"use client";
import SearchBar from "./SearchBar";
import MovieCards from "./MovieCards";
import { useSearchParams } from "next/navigation";
import SearchMovies from "./SearchMovies";
import { Fragment, Suspense } from "react";

const HomePage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  return (
    <Fragment>
      <SearchBar />
      {query ? <SearchMovies query={query} /> : <MovieCards />}
    </Fragment>
  );
};

export default HomePage;
