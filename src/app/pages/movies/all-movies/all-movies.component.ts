import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from 'src/app/shared/services/movies.service';

import { Movie } from 'src/app/shared/models/interfaces/movie.interface';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  movies: Movie[] = [];

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
      this.moviesService.getAllMovies().subscribe(
        allMovies => {this.movies = allMovies;console.log(allMovies)}
      ));
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe);
  }
}



// inscrição para o segundo teste do getAllMovies
// this.moviesService.getAllMovies2().subscribe(res => console.log(res))


// inscrição para o terceiro teste do getAllMovies
// this.moviesService.getAllMovies3().subscribe(res => console.log(res))


// inscrição para o quarto teste do getAllMovies
// this.moviesService.getAllMovies4().subscribe(res => console.log(res))
