import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { SessionsService } from 'src/app/shared/services/sessions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theater-sessions',
  templateUrl: './theater-sessions.component.html',
  styleUrls: ['./theater-sessions.component.scss']
})
export class TheaterSessionsComponent implements OnInit {

  subs: Subscription[] = [];

  @Output() hasSession = new EventEmitter<boolean>();
  @Input() theaterId!: string;
  @Input() movieId!: string;
  @Input() date?: any;
  theaterSessions: any[] = [];

  constructor(private sessionsService: SessionsService ) { }

  ngOnInit(): void {

    this.subs.push(
      this.sessionsService.getMovieSessions(this.movieId).subscribe(
        movieSessions => {

          movieSessions?.forEach(session => {

            session.theaters?.forEach(theater => {

            // Salva as sessões do filme no cinema informado

              if(theater.id == this.theaterId){
                this.theaterSessions.push(theater)
                let len = this.theaterSessions.length;
                this.theaterSessions[len-1].dayOfWeek = session.dayOfWeek;
                this.theaterSessions[len-1].dateFormatted = session.dateFormatted;
              }
            })
          })

          if(this.theaterSessions.length > 0) {
            this.hasSession.emit(true);
          } else {
            this.hasSession.emit(false)
          }
        }, () => this.hasSession.emit(false)),
    )
  }

  // Filtra as sessões de acordo com a data do input
  obterSessoes(): any {
    if (this.date == null){
      return this.theaterSessions
    }

    return this.theaterSessions.filter(
      theaterSession => {
        return (theaterSession.dateFormatted == this.date)
      })
  }

  ComprarIngresso(url: string): void {
    window.open(url)
  }

}
