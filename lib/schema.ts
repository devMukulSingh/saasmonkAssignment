import { z } from "zod";

export const movieSchema = z.object({
    name:z.string({
        required_error:'Movie name is required'
    }).trim().min(1).max(200, {
        message: 'Max 200 characters allowed'
    }),
    releaseDate:z.coerce.date({
        required_error:'date is required'
    })
})

export const reviewSchema = z.object({
    movieName: z.string({
        required_error: 'Movie name is required'
    }).min(1).max(200,{
        message:'Max 200 characters allowed'
    }),
    reviewerName: z.string().optional(),
    rating : z.number({
        required_error:'rating is required',
        invalid_type_error:'Only number till 10 are allowed'
    }).min(1),
    reviewComments : z.string({
        required_error:'Review comment is required'
    }).trim().min(1).max(500, {
        message: 'Max 500 characters allowed'
    })
})