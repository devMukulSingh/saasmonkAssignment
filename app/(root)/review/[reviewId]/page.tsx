"use client";
import { useParams,  } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Ireview } from "@/lib/types";
import React from "react";
import ReviewForm from "./components/ReviewForm";

const ReviewAddEditPage = () => {
  const { reviewId } = useParams();

  const { data, isLoading } = useSWR<Ireview>(
    reviewId !== "new" ? `/api/review/${reviewId} ` : null,fetcher
  );
  return(

    <ReviewForm intialValues={data}/>
  )
};

export default ReviewAddEditPage;
