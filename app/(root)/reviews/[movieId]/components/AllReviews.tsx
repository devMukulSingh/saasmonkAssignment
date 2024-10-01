import { Ireview } from '@/lib/types'
import React from 'react'
import Review from './Review';

const AllReviews = () => {
    const reviews: Ireview[] = [
      {
        movieId: 1,
        rating: 7,
        reviewComments: "This is the best movie ever",
        reviewerName: "Amitav Khandelwal",
      },
      {
        movieId: 1,
        rating: 7,
        reviewComments: "This is the best movie ever",
        reviewerName: "Amitav Khandelwal",
      }
      ,
      {
        movieId: 1,
        rating: 7,
        reviewComments: "This is the best movie ever",
        reviewerName: "Amitav Khandelwal",
      },
    ];
  return (
    <div className='space-y-5'>
        {
            reviews.map( (review,index) => (
                <Review review={review} key={index}/>
            ))    
        }
    </div>
  )
}

export default AllReviews