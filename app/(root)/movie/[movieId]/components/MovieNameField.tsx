import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { Iform } from "../page";
import { Input } from "@/components/ui/input";

const MovieNameField = ({ form, isMutating }: Iform) => {
  return (
    <>
      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input disabled={isMutating} {...field} placeholder="Name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default MovieNameField;
