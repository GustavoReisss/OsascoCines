import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor() { }

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }
}
