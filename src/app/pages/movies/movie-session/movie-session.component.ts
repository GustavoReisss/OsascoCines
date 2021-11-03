import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SessionsService } from 'src/app/shared/services/sessions.service';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent implements OnInit, OnDestroy {
  
  subs: Subscription[] = [];

  movieId: string;
  popup: number = 0;
  trailerUrl: any = "";

  kinoplex: any[] = [];
  cinemark: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private sessionsService: SessionsService,
  ) {
    this.movieId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.subs.push(
      this.sessionsService.getMovieSessions(this.movieId).subscribe(
        movieSessions => {
          console.log(movieSessions);
          
          movieSessions?.forEach(session => {

            session.theaters?.forEach(theater => {
              
              if(theater.name.includes('Cinemark')){
                this.cinemark.push(theater)
                let len = this.cinemark.length;
                this.cinemark[len-1].dayOfWeek = session.dayOfWeek;
                this.cinemark[len-1].dateFormatted = session.dateFormatted;
              }
              else {
                this.kinoplex.push(theater)
                let len = this.kinoplex.length;
                this.kinoplex[len-1].dayOfWeek = session.dayOfWeek;
                this.kinoplex[len-1].dateFormatted = session.dateFormatted;
              }

            })

          })
          console.log(this.kinoplex)
          console.log(this.cinemark)
      })
    )
  }

  atualizaPopUp(numDiv: number): void {
    this.popup = numDiv;
  }

  ngOnDestroy(): void {
    this.subs.map(
      sub => sub.unsubscribe()
    );
  }

}
