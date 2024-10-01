'use client'
import { Form, FormField } from '@/components/ui/form'
import { movieSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import MovieNameField from './components/MovieNameField'
import ReleaseDateField from './components/ReleaseDateField'
import { Button } from '@/components/ui/button'

export type formValues = z.infer<typeof movieSchema>

export interface Iform {
  form: UseFormReturn<
    formValues,
    any,
    undefined
  >;
}

const MovieAddEditPage = () => {
  const form = useForm<formValues>({
    resolver:zodResolver(movieSchema)
  })
  const onSubmit = (data: formValues) => {
    console.log(data);
    
  };
  return (
    <div className='
    h-[calc(100vh-5rem)] 
    w-screen
    flex
    items-center
    justify-center
    '>
      <div className='
      border-2
      py-10
      px-8
      flex
      flex-col
      gap-5
      '>
        <h1 className='text-lg'>
          Add new movie
        </h1>
        <form 
        className="
        flex
        flex-col
        gap-5
        "
        onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>
            <MovieNameField form={form}/>
            <ReleaseDateField form={form}/>
          </Form>
          <Button 
          className='ml-auto'
          type='submit'>
            Create movie
          </Button>
        </form>
      </div>
    </div>
  )
}

export default MovieAddEditPage