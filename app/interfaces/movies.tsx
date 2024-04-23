
export interface results {
    id: number,
    title: string,
    overview?: string,
    poster_path?: string
}
export interface MoviesProps{
    results: results
}

export interface MoviesDetailsProps {
    title: string;
    backdrop_path: string;
    overview: string;
}