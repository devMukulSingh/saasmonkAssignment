

export interface Imovie{
    name:string,
    releaseDate:string,
    averageRating?:number,
    id:string
}

export interface Ireview {
    movieId: string,
    reviewerName?: string,
    rating: number,
    reviewComments:string
}