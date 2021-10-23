import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable()
export class TesteService {

    private PARTNER_SHIP = 'faetec_felipedosantos';

    constructor(private apiService: ApiService) {

    }

    getCinemas(): Observable<any[]> {
        return this.apiService.get(`theaters?partnership=${this.PARTNER_SHIP}`);
    }
}