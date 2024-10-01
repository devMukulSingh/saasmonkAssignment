import { Edit, Trash, Trash2 } from 'lucide-react'
import React from 'react'

const RatingCard = () => {
  return (
    <div className='
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
        Star Wars : A New Hope    
    </h1> 
    <h1 className='italic'>
        Released: 1st August, 2022
    </h1>
    <h1 className='font-bold'>
        Ratings: 8.33/10
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
    </div>
  )
}

export default RatingCard