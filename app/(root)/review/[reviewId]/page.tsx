"use client";
import { Form, FormField } from "@/components/ui/form";
import {reviewSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import ReviewerNameField from "./components/ReviewerNameField";
import RatingField from "./components/RatingField";
import ReviewCommentsField from "./components/ReviewerNameField copy 2";
import MovieNameField from "./components/MovieNameField";

export type formValues = z.infer<typeof reviewSchema>;

export interface Iform {
  form: UseFormReturn<formValues, any, undefined>;
}

const ReviewAddEditPage = () => {
  const form = useForm<formValues>({
    resolver: zodResolver(reviewSchema),
  });
  const onSubmit = (data: formValues) => {
    console.log(data);
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
      sm:w-1/4
      w-full
      "
      >
        <h1 className="text-lg">Add new movie</h1>
        <form
          className="
        flex
        flex-col
        gap-5
        "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Form {...form}>
            <MovieNameField form={form}/>
            <ReviewerNameField form={form} />
            <RatingField form={form} />
            <ReviewCommentsField form={form}/>
          </Form>
          <Button className="ml-auto" type="submit">
            Add review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewAddEditPage;
