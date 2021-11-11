import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

import { ingressoApi } from '../../../environments/environment'
import { AllSessions } from '../models/interfaces/allSessions.interface'; 
import { MovieSessions } from '../models/interfaces/movieSessions.interface';



@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private client: HttpClient) { }

  getAllTheatherSections(theatherId: string): Observable<AllSessions[]> {
    let url = "/api" + ingressoApi.theaterSessions + theatherId + ingressoApi.partner
    
    return this.client.get<AllSessions[]>(url)
                      .pipe(
                          map(obj => obj), 
                          
                          catchError(e => {
                            console.log(e);
                            return EMPTY;
                          })
                      );
  }

  getMovieSessions(movieId: string): Observable<MovieSessions[]> {
    
    let url = "/api" + ingressoApi.movieSessions + movieId + ingressoApi.partner
    
    return this.client.get<MovieSessions[]>(url).pipe(
      map(obj => obj), 
      
      catchError(e => {
        console.log(e);
        return EMPTY;
      })
  );;
  }
} 
