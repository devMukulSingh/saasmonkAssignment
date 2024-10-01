import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { Input } from "@/components/ui/input";
import { Iform } from "./ReviewForm";

const RatingField = ({ form }: Iform) => {
  return (
    <>
      <FormField
        name="rating"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input {...field} placeholder="Rating out of 10" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default RatingField;
