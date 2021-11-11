import { Movie } from "./movie.interface";

export interface MovieList {
    items: (Movie)[];
    count: number;
}