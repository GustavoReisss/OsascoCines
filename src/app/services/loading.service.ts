import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingObserver: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() { }

  start() {
    this.loadingObserver.next(true);
  }

  end() {
    this.loadingObserver.next(false);
  }

}
