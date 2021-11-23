import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from 'src/app/shared/services/movies.service';

import { Movie } from 'src/app/shared/models/interfaces/movie.interface';

@Component({
  selector: 'app-playing-movies',
  templateUrl: './playing-movies.component.html',
  styleUrls: ['./playing-movies.component.scss']
})
export class PlayingMoviesComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  movies!: Movie[];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.subs.push(
      this.moviesService.getAllPlayingMovies().subscribe(
        movies => this.movies = movies));
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe);
  }

}
