import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ingressoApi } from 'src/environments/environment';

import { AllTheaters } from '../models/interfaces/allTheaters.interface';
import { Theater } from './../models/interfaces/theater.interface';


@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  constructor(
    private client: HttpClient
  ) { }

  getAllTheaters(): Observable<AllTheaters> {

    let url = "/api" + ingressoApi.allTheaters + ingressoApi.partner;

    return this.client.get<AllTheaters>(url);
  }

  getTheater(theaterId: string): Observable<Theater> {
    
    let url = "/api" + ingressoApi.theater + theaterId + ingressoApi.partner;
  
    return this.client.get<Theater>(url);
  }
}
