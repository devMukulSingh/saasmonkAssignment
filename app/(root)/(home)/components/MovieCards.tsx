import React from 'react'
import MovieCard from './MovieCard';
import { Imovie } from '@/lib/types';
import { prisma } from '@/lib/prisma';

const MovieCards = async() => {
  const movies = await prisma.movie.findMany();
  // const movies:Imovie[] = [
  //   {
  //     name: "Star wars",
  //     releaseDate: "12/12/2000",
  //     averageRating: 8.5,
  //     id: 1,
  //   },
  //   {
  //     name: "Terminator",
  //     releaseDate: "12/12/2001",
  //     averageRating: 9.5,
  //     id: 2,
  //   },
  //   {
  //     name: "Avenger",
  //     releaseDate: "12/12/2002",
  //     averageRating: 8.5,
  //     id: 3,
  //   },
  // ];
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
      {
        movies.map( (movie,index) => (
          <MovieCard movie={movie} key={index}/>
        ))
      }

    </div>
  );
}

export default MovieCards