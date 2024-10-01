"use client";
import { Imovie, Ireview } from "@/lib/types";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const Header = () => {
  const { movieId } = useParams();
  const { data: movies } = useSWR<Imovie[]>(`/api/movie/get-movies`);
  const movie = movies?.find((movie) => movie.id === movieId);
  const { data: reviews, isLoading } = useSWR<Ireview[]>(
    `/api/review/get-review?movieId=${movieId}`
  );
  const ratingsTotal =
    reviews?.reduce((prev, curr) => prev + curr.rating, 0) || 0;

  const averageRating = ratingsTotal / (reviews?.length || 0);

  return (
    <div
      className="
      flex
      justify-between
       text-2xl
      "
    >
      <h1>{movie?.name}</h1>
      <h1
        className="
        text-blue-600
        "
      >
        {averageRating ? averageRating.toFixed() : 0}/10
      </h1>
    </div>
  );
};

export default Header;
