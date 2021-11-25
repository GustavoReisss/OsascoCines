import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Subscription } from 'rxjs';

import { Movie } from 'src/app/shared/models/interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  movies: Movie[] = [];

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.subs.push(
      this.moviesService.getAllPlayingMovies().subscribe(
        movies => this.movies = movies));
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

  

}
