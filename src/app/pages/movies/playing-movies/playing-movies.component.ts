import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from 'src/app/shared/services/movies.service';

import { Movie } from 'src/app/shared/models/interfaces/movie.interface';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-playing-movies',
  templateUrl: './playing-movies.component.html',
  styleUrls: ['./playing-movies.component.scss']
})
export class PlayingMoviesComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  movies!: Movie[];

  constructor(
    private moviesService: MoviesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
    this.subs.push(
      this.moviesService.getAllPlayingMovies().subscribe(
        movies => this.movies = movies));
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe);
  }

}
