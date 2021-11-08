import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from 'src/app/shared/services/movies.service';

import { Movie } from 'src/app/shared/models/interfaces/movie.interface';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  movies: Movie[] = [];
  moviesSorting: string = "a-z";  // "a-z" & "z-a"
  filtro: string = "";

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.subs.push(
      this.moviesService.getAllMovies().subscribe(
        allMovies => this.movies = allMovies
      ));
  }

  reverteArray(sortingType: string): void {
    if(this.moviesSorting != sortingType){
      this.movies.reverse();
      this.moviesSorting = sortingType;
    }
  }

  obterFilmes(): Movie[] {
    if (this.filtro.length === 0 || this.filtro == undefined || this.filtro.trim() === ''){
      return this.movies;
    }

    return this.movies.filter(movie => {
      return (movie.title.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0)
    })
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