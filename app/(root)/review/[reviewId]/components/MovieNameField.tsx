import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import { Imovie } from "@/lib/types";
import { Iform } from "./ReviewForm";

const MovieNameField = ({ form }: Iform) => {
  const { data: movies, isLoading } = useSWR<Imovie[]>(
    `/api/movie/get-movies`,
    fetcher,
  );
  return (
    <>
      <FormField
        name="movieId"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Select
              disabled={isLoading}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a movie" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {movies?.map((movie, index) => (
                  <SelectItem key={index} value={movie.id}>
                    {movie.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default MovieNameField;
