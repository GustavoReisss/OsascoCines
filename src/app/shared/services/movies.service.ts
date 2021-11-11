import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ingressoApi } from './../../../environments/environment';

import { MovieList } from '../models/interfaces/movieList.interface'
import { Movie } from '../models/interfaces/movie.interface';
import { flatten } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private client: HttpClient ) { }

  getMovie(movieId: string): Observable<Movie> {
    let url = "/api" + ingressoApi.movie + movieId + ingressoApi.partner;
    return this.client.get<Movie>(url);
  }

  getAllPlayingMovies(): Observable<Movie[]> {
    let url = "/api" + ingressoApi.allMovie + ingressoApi.partner;
    return this.client.get<MovieList>(url).pipe(map(movieList => movieList.items.sort(
      (movieA, movieB) =>
        movieA.title.toLowerCase() > movieB.title.toLowerCase() ? 1 : -1 
    )));
  }

  getComingSoonMovies(): Observable<Movie[]> {
    let url = "/api" + ingressoApi.comingSoon + ingressoApi.partner;
    return this.client.get<MovieList>(url).pipe(
      map(movieList => movieList.items.sort(
        (movieA, movieB) =>
          movieA.title.toLowerCase() > movieB.title.toLowerCase() ? 1 : -1 
      )));
  }

  getAllMovies(): Observable<Movie[]> {

    return forkJoin([  // forkJoin retorna um array de Observables
      this.getAllPlayingMovies(),
      this.getComingSoonMovies() 
    ]).pipe(   // pipe() leva como argumentos as funções que desejamos combinar e retorna uma nova função que, quando executada, executa as funções compostas em sequência.  
      map(resultFork => 
        flatten(resultFork) // flatten transforma multiplos arrays em um unico array.
        .sort((movieA, movieB) => // ordenando os filmes do array pelo título
            movieA.title.toLowerCase() > movieB.title.toLowerCase() ? 1 : -1 )
      ));
  }
}


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// GetAllMovies2() USANDO forkJoin QUE DEVOLVE UM ARRAY DE OBSERVABLES

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//   getAllMovies2(): Observable<[MovieList, MovieList]> {

//     let teste1 = this.getAllPlayingMovies();
//     let teste2 = this.getComingSoonMovies();

//     return forkJoin([teste1, teste2]);
//   }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// GetAllMovies3() USANDO BehaviorSubject

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    /* getAllMovies3(): Observable<Movie[]> {
        let allMovies: Movie[] = [];
        let allMovieBS = new BehaviorSubject<Movie[]>(allMovies);
      
        this.getAllPlayingMovies().subscribe(
            playingMovies => {
              playingMovies.items?.forEach(
                movie => allMovies.push(movie));
              
              allMovieBS.next(allMovies)
            })
      
        this.getComingSoonMovies().subscribe(
            comingSoonMovies => {
              comingSoonMovies.items?.forEach(
                movie => allMovies.push(movie));
              
                allMovieBS.next(allMovies)
            })
        
        return allMovieBS.asObservable();
    } */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// GetAllMovies3() USANDO ReplaySubject

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    
      /* getAllMovies4(): Observable<any> {

          let allMovies = new ReplaySubject(1); 

          this.getAllPlayingMovies().subscribe(playingMovies => {
            allMovies.next(playingMovies.items)
          })

          this.getComingSoonMovies().subscribe(comingSoonMovies => {
            allMovies.next(comingSoonMovies.items)
          })

          return allMovies.asObservable(); 
      } */
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

