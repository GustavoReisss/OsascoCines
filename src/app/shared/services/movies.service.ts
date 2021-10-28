import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/interfaces/movie.interface';
import { ingressoApi } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private client: HttpClient ) { }

  getAllMovies(): Observable<Movie> {
    let url = "/api" + ingressoApi.allMovie + ingressoApi.partner
    return this.client.get<Movie>(url) 
  }
}
