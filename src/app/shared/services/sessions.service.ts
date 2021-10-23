import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Movie, MoviesEntity } from './../models/interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private client: HttpClient) {
    let allMovies: MoviesEntity[] = [];
    
    this.getAllSections('845').subscribe(movies => {
      
      movies.map(moviesArray => {
        moviesArray.movies?.map(movie => allMovies.push(movie))
        this.movies.next(allMovies);
      })
    });

    this.getAllSections('340').subscribe(movies => {
      
      movies.map(moviesArray => {
        moviesArray.movies?.map(movie => allMovies.push(movie))
        this.movies.next(allMovies);
      })
    });

  }

  private movies = new BehaviorSubject<MoviesEntity[] | any >(null);


  getMovies(): Observable<MoviesEntity[]> {
    return this.movies.asObservable();
  }


  private getAllSections(theatherId: string): Observable<Movie[]> {
    let url: string = `/api/v0/sessions/city/42/theater/${theatherId}/partnership/faetec_felipedosantos`
    
    return this.client.get<Movie[]>(url)
                      .pipe(
                          map(obj => obj), 
                          
                          catchError(e => {
                            console.log(e);
                            return EMPTY;
                          })
                      );
  }
}
