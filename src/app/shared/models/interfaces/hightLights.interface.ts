import { Movie } from 'src/app/shared/models/interfaces/movie.interface';

export interface Highlights {
    event: Movie;
    showtimes?: (null)[] | null;
}