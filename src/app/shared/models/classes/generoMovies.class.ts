import { Movie } from './../interfaces/movie.interface';


export class generoMovies {
  name: string;
  movies: Movie[];

  constructor(name: string, movies: any[]) {
    this.name = name;
    this.movies = movies;
  }
}