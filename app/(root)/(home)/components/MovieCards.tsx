'use client'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { Imovie } from '@/lib/types';
import { prisma } from '@/lib/prisma';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';
import { useParams, useSearchParams } from 'next/navigation';

const MovieCards = () => {

  
  const {  data:movies,isLoading,mutate } = useSWR<Imovie[]>(`/api/movie/get-movies`,fetcher);
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
        {movies?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    );
}

export default MovieCards