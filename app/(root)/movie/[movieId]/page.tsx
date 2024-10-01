"use client";
import { Form } from "@/components/ui/form";
import { movieSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import MovieNameField from "./components/MovieNameField";
import ReleaseDateField from "./components/ReleaseDateField";
import { Button } from "@/components/ui/button";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import useSWR, { useSWRConfig } from "swr";
import { Imovie } from "@/lib/types";

export type formValues = z.infer<typeof movieSchema>;

export interface Iform {
  form: UseFormReturn<formValues, any, undefined>;
  isMutating: boolean;
}
async function sendRequest(url: string, { arg }: { arg: formValues }) {
  return await axios.post(url, arg);
}
async function sendRequestPUT(url: string, { arg }: { arg: formValues }) {
  return await axios.put(url, arg);
}

const MovieAddEditPage = () => {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const { movieId } = useParams();

  const { data: movies } = useSWR<Imovie[]>(`/api/movie/get-movies`);
  const movieByMovieId = movies?.find((movie) => movie.id === movieId);

  const { trigger, isMutating } = useSWRMutation(
    !movieByMovieId ? "/api/movie/add-movie" : `/api/movie/${movieId}`,
    !movieByMovieId ? sendRequest : sendRequestPUT,
    {
      onSuccess() {
        mutate(
          (key) => true,
          undefined, // update cache data to `undefined`
          { revalidate: false }, // do not revalidate
        );
        toast.success(!movieByMovieId ? "Movie added" : "Movie updated");
        movieByMovieId && router.push("/");
        form.reset();
      },
      onError(e) {
        toast.error(`Something went wrong, please try again later`);
        console.log(e);
      },
    },
  );
  const form = useForm<formValues>({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      name: movieByMovieId?.name,
      releaseDate: movieByMovieId?.releaseDate,
    },
  });
  const onSubmit = (data: formValues) => {
    trigger(data);
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
      py-10
      px-8
      flex
      flex-col
      gap-5
      "
      >
        <h1 className="text-lg">
          {movieByMovieId ? "Edit movie" : "Add new movie"}
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
            <ReleaseDateField form={form} isMutating={isMutating} />
          </Form>
          <Button disabled={isMutating} className="ml-auto" type="submit">
            {movieByMovieId ? "Update movie" : "  Create movie"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MovieAddEditPage;
