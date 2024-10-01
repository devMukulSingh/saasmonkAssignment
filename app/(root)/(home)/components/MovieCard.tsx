import { Imovie } from '@/lib/types'
import { Edit, Trash, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  movie : Imovie
}

const MovieCard = ({
  movie
}:Props) => {
  return (
    <Link 
    href={`reviews/${movie.id}`}
    className='
    bg-slate-300
    flex
    flex-col
    gap-2
    px-4
    py-8
    rounded-sm
    justify-center
    relative
    '>
    <h1>
        {movie.name} 
    </h1> 
    <h1 className='italic'>
        Released: {movie.releaseDate}
    </h1>
    <h1 className='font-bold'>
        Ratings: {movie?.averageRating || 'N/A'} 
    </h1>
    <div className='
    text-neutral-600 
    flex 
    gap-3 
    self-end 
    ml-auto
    absolute
    right-2
    bottom-3
    '>
        <Edit size={20}/>
        <Trash2 size={20}/>
    </div>
    </Link>
  )
}

export default MovieCard