import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SessionsService } from 'src/app/shared/services/sessions.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

import { MovieSessions } from './../../../shared/models/interfaces/movieSessions.interface';
import { Movie } from './../../../shared/models/interfaces/movie.interface';


@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];

  movieId!: string;
  movie!: Movie;
  movieSessions!: MovieSessions[];

  constructor(
    private route: ActivatedRoute,
    private sessionsService: SessionsService,
    private moviesService: MoviesService
  ) {
    this.movieId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.subs.push(
      this.sessionsService.getMovieSessions(this.movieId).subscribe(
        movieSessions => {
          this.movieSessions = movieSessions; 
          console.log(this.movieSessions);
        })
    )

    this.subs.push(
      this.moviesService.getMovie(this.movieId).subscribe(
        movie => {
          this.movie = movie; 
          console.log(this.movie);
        })
    )

}

  ngOnDestroy(): void {
    this.subs.map(
      sub => sub.unsubscribe()
    );
  }
}
