

export interface Imovie{
    name:string,
    releaseDate:string,
    averageRating?:number,
    id:number
}

export interface Ireview {
    movieId: number,
    reviewerName?: string,
    rating: number,
    reviewComments:string
}