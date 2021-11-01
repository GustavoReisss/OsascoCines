import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SessionsService } from 'src/app/shared/services/sessions.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

import { MovieSessions } from './../../../shared/models/interfaces/movieSessions.interface';
import { Movie } from './../../../shared/models/interfaces/movie.interface';
import { Theater } from './../../../shared/models/interfaces/theater.interface';


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
  kinoplex: any[] = [];
  cinemark: any[] = [];

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
          
          this.movieSessions?.forEach(session => {

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

    this.subs.push(
      this.moviesService.getMovie(this.movieId).subscribe( movie => {
          this.movie = movie;
      
          if (this.movie.images![1]){
            this.movie.images![1].url =  ` '${this.movie.images![1].url}' `
          }
      
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
