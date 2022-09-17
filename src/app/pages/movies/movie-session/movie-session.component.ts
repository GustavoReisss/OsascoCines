import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import * as moment from 'moment';
import { MoviesService } from './../../../shared/services/movies.service';

import { Movie } from './../../../shared/models/interfaces/movie.interface';


@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent implements OnInit, OnDestroy {
  
  subs: Subscription[] = [];

  movie!: Movie;
  movieId: string;
  theaters: string[] = ['340', '845']; // cinemark e kinoplex
  date: any = null;
  popup: number = 0;
  
  hasSessions!: boolean;
  retornoTheaterSession: number = 0;
  hasMovie: boolean = true;
  jaLancou: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.movieId = this.route.snapshot.params["id"]
    
    let theater = this.route.snapshot.queryParams["theater"];
    if(theater){
      this.theaters = [theater]
    }

    let date = this.route.snapshot.queryParams["date"];
    if(date){
      this.date = date
    }
  }

  ngOnInit(): void { 
    this.spinner.show()

    this.subs.push(
      this.moviesService.getMovie(this.movieId).subscribe( 
        movie => { 
          this.movie = movie
          // console.log(this.movie); 

          let now = moment();
          this.jaLancou = now.isAfter(moment(new Date(this.movie.premiereDate.localDate)))
          // console.log(this.jaLancou)
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
        },
        () => {
          this.hasMovie=false;
          this.spinner.hide();
        }
    ))

  }

  mostrarTodasSessoes() {
    this.theaters = ['340', '845']; // cinemark e kinoplex
    this.date = null;
    this.router.navigate([`/movies/movie`, this.movieId])
  }

  atualizaPopUp(numDiv: number): void {
    this.popup = numDiv;
  }

  atualizaHasSession(possui: boolean) {
    this.retornoTheaterSession++;
    if(possui){
      this.hasSessions = true;
    }

    if(this.retornoTheaterSession == 2 && !this.hasSessions){
      this.hasSessions = false;
    }
    console.log(this.hasSessions)
  }

  ngOnDestroy(): void {
    this.subs.map(
      sub => sub.unsubscribe()
    );
  }
}





// this.subs.push(
    //   this.sessionsService.getMovieSessions(this.movieId).subscribe(
    //     movieSessions => {
    //       // console.log(movieSessions);
          
    //       movieSessions?.forEach(session => {

    //         session.theaters?.forEach(theater => {
              
    //           if(theater.name.includes('Cinemark')){
    //             this.cinemark.push(theater)
    //             let len = this.cinemark.length;
    //             this.cinemark[len-1].dayOfWeek = session.dayOfWeek;
    //             this.cinemark[len-1].dateFormatted = session.dateFormatted;
    //           }
    //           else {
    //             this.kinoplex.push(theater)
    //             let len = this.kinoplex.length;
    //             this.kinoplex[len-1].dayOfWeek = session.dayOfWeek;
    //             this.kinoplex[len-1].dateFormatted = session.dateFormatted;
    //           }

    //         })

    //       })
          // console.log(this.kinoplex)
          // console.log(this.cinemark)
      // })
    // )