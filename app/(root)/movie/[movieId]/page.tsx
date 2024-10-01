"use client";
import MovieForm from "./components/MovieForm";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Imovie } from "@/lib/types";
import { useParams } from "next/navigation";
import { Fragment } from "react";

const MovieAddEditPage = () => {
  const { data: movies, isLoading } = useSWR<Imovie[]>(
    `/api/movie/get-movies`,
    fetcher
  );
  const { movieId } = useParams();
  const movieByMovieId = movies?.find((movie) => movie.id === movieId);
  return (
    <Fragment>
      {!isLoading ? (
        <MovieForm initialValues={movieByMovieId} />
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
};

export default MovieAddEditPage;
