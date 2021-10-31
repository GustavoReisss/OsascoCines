import { Movie } from "./movie.interface";

export interface AllMovies {
    items?: (Movie)[] | null;
    count: number;
  }
