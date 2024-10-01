import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { Iform } from "./ReviewForm";
import { Input } from "@/components/ui/input";

const ReviewerNameField = ({ form }: Iform) => {
  return (
    <>
      <FormField
        name="reviewerName"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input {...field} placeholder="Your name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ReviewerNameField;
