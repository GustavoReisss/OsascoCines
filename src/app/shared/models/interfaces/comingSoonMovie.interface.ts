import { Movie } from "./movie.interface";


export interface ComingSoonMovies {
    items?: (Movie)[] | null;
    count: number;
}