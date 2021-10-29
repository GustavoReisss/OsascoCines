import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ingressoApi } from './../../../environments/environment';

import { Movie } from '../models/interfaces/movie.interface';
import { ComingSoonMovies } from '../models/interfaces/comingSoonMovie.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private client: HttpClient ) { }

  getAllMovies(): Observable<Movie> {
    let url = "/api" + ingressoApi.allMovie + ingressoApi.partner;
    return this.client.get<Movie>(url);
  }

  getComingSoon(): Observable<ComingSoonMovies> {
    let url = "/api" + ingressoApi.comingSoon + ingressoApi.partner;
    return this.client.get<ComingSoonMovies>(url);
  }
}
