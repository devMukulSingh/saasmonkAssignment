'use client'

import { Imovie } from "@/lib/types";
import useSWR from "swr";
import MovieCard from "./MovieCard";

type Props = {
    query:string
}

const SearchMovies = ({
    query
}:Props) => {

  const {
    data: movies,
  } = useSWR<Imovie[]>(`/api/movie/get-movies`);

  const searchedMovies = movies?.filter( movie => movie.name.toLocaleLowerCase().includes(query.toLowerCase())) || [];

  return (
    <div
      className="
      grid 
      lg:grid-cols-3 
      md:grid-cols-2 
      grid-cols-1
      gap-8
      "
    >
      {searchedMovies?.length >0 ? (
        searchedMovies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))
      ) : (
          <h1>No movies found</h1>
      )}
    </div>
  );

}

export default SearchMovies