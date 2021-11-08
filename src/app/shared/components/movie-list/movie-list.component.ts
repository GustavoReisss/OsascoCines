import { Component, Input } from '@angular/core';

import { Movie } from '../../models/interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  
  @Input() movies: Movie[] = [];
  @Input() filtros: boolean = true;
  
  moviesSorting: string = "a-z";  // "a-z" & "z-a"
  filtro: string = "";


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
}
