import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { Iform } from "./ReviewForm";
import { Textarea } from "@/components/ui/textarea";

const ReviewCommentsField = ({ form }: Iform) => {
  return (
    <>
      <FormField
        name="reviewComments"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea rows={4} {...field} placeholder="Review comments" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ReviewCommentsField;
