import { Ireview } from '@/lib/types'
import { Edit, Edit2, Trash2 } from 'lucide-react'
import React from 'react'

type Props = {
    review :Ireview
}

const Review = ({
    review
}:Props) => {
  return (
    <div
      className="
    border-2
    border-blue-100
    pb-2
    pt-5
    px-5
    flex
    flex-col
    gap-5
    "
    >
      <div
        className="
        flex 
        justify-between
        "
      >
        <h1>{review.reviewComments}</h1>
        <h1 className='
        text-blue-500
        '>{review.rating}/10</h1>
      </div>
      <div
        className="
         flex 
        justify-between
        "
      >
        <h1 className='
        italic

        '>By {review?.reviewerName || 'N/A'}
        </h1>
        <div className='
        flex
        gap-2
        text-neutral-500
        '>
            <Edit size={15}/>
            <Trash2 size={15}/>
        </div>
      </div>
    </div>
  );
}

export default Review