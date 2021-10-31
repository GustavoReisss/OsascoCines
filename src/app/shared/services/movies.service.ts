import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ingressoApi } from './../../../environments/environment';

import { AllMovies } from '../models/interfaces/allMovies.interface';
import { ComingSoonMovies } from '../models/interfaces/comingSoonMovie.interface';
import { Movie } from '../models/interfaces/movie.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private client: HttpClient ) { }

  getMovie(movieId: string): Observable<Movie> {
    let url = "/api" + ingressoApi.movie + movieId + ingressoApi.partner;
    return this.client.get<Movie>(url);
  }

  getAllMovies(): Observable<AllMovies> {
    let url = "/api" + ingressoApi.allMovie + ingressoApi.partner;
    return this.client.get<AllMovies>(url);
  }

  getComingSoon(): Observable<ComingSoonMovies> {
    let url = "/api" + ingressoApi.comingSoon + ingressoApi.partner;
    return this.client.get<ComingSoonMovies>(url);
  }
}
