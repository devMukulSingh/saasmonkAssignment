'use client'
import { Ireview } from '@/lib/types'
import React from 'react'
import Review from './Review';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';
import toast from 'react-hot-toast';

const AllReviews = () => {

  const { movieId } = useParams();
  const { data: reviews, isLoading } = useSWR<Ireview[]>(
    `/api/review/get-review?movieId=${movieId}`,
    fetcher,
    {
      onError(e){
        toast.error(`Something went wrong, please try again later`);
        console.log(e);
      },
      revalidateOnFocus: false,
    },

  );
  

  return (
    <div className='space-y-5'>
        {
            reviews?.map( (review,index) => (
                <Review review={review} key={index}/>
            ))    
        }
    </div>
  )
}

export default AllReviews