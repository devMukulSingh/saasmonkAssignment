"use client";
import { Form, FormField } from "@/components/ui/form";
import { reviewSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import ReviewerNameField from "./components/ReviewerNameField";
import RatingField from "./components/RatingField";
import ReviewCommentsField from "./components/ReviewCommentsField";
import MovieNameField from "./components/MovieNameField";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

export type formValues = z.infer<typeof reviewSchema>;

export interface Iform {
  form: UseFormReturn<formValues, any, undefined>;
  isMutating:boolean
}

async function sendRequestPOST(url:string,{arg} : {arg:formValues}){
  return await axios.post(url,arg);
}
async function sendRequestPUT(url: string, { arg }: { arg: formValues }) {
  return await axios.put(url, arg);
}
const ReviewAddEditPage = () => {
  const { reviewId } = useParams();
  const router = useRouter();
  const { data:reviewByReviewId,isLoading } = useSWR(reviewId!=='new' ? `/api/review/${reviewId} `:null,fetcher);
  
  const { isMutating, trigger } = useSWRMutation(
    !reviewByReviewId ? `/api/review/add-review` : `/api/review/${reviewId}`,
    !reviewByReviewId ? sendRequestPOST : sendRequestPUT,
    {
      onSuccess() {
        router.back();
        toast.success(reviewByReviewId ? "Review updated":"Review added");
        form.reset();
      },
      onError(e:any) {
        toast.error("Something went wrong, please try again later");
        console.log(e.message);
      },
    }
  );
  const form = useForm<formValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues:reviewByReviewId || {
      rating:null,
      reviewComments:'',
      reviewerName:''
    }
  });
  const onSubmit = (data: formValues) => {
    try{
      trigger(data);
    }
    catch(e:any){
       toast.error("Something went wrong, please try again later");
       console.log(e.message);
    }
    
  };
  return (
    <div
      className="
    h-[calc(100vh-5rem)] 
    w-screen
    flex
    items-center
    justify-center
    "
    >
      <div
        className="
      border-2
      pt-10
      pb-20
      px-8
      flex
      flex-col
      gap-5
      w-[25rem]

      "
      >
        <h1 className="text-lg">
          {reviewByReviewId ? "Edit review" : "Add new review"}
        </h1>
        <form
          className="
        flex
        flex-col
        gap-5
        "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Form {...form}>
            <MovieNameField form={form} isMutating={isMutating} />
            <ReviewerNameField form={form} isMutating={isMutating} />
            <RatingField form={form} isMutating={isMutating} />
            <ReviewCommentsField form={form} isMutating={isMutating} />
          </Form>
          <Button disabled={isMutating} className="ml-auto" type="submit">
            {reviewByReviewId ? "Continue" : "Add review"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewAddEditPage;
