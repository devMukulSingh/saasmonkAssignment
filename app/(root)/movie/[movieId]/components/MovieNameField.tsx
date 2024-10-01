import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React from 'react'
import { Iform } from '../page';
import { Input } from '@/components/ui/input';



const MovieNameField = ({
  form
}:Iform) => {
  return (
    <>
      <FormField 
      name="name" 
      control={form.control} 
      render={({field}) => (
        <FormItem>
          <FormControl>
            <Input {...field} placeholder='Name'/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )} />
    </>
  );

}

export default MovieNameField