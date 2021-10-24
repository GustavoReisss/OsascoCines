import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from 'src/app/shared/services/sessions.service';
import { MovieSessions } from './../../shared/models/interfaces/movieSessions.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent implements OnInit, OnDestroy {

  subscription!: Subscription;

  movieId!: string;
  movieSessions!: MovieSessions[];

  constructor(
    private route: ActivatedRoute,
    private sessionsService: SessionsService
  ) {
    this.movieId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.subscription = this.sessionsService.getMovieSessions(this.movieId)
            .subscribe(movieSessions => {this.movieSessions = movieSessions; console.log(this.movieSessions)});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
