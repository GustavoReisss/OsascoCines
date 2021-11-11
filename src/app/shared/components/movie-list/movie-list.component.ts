import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../../models/interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  
  @Input() movies: any[] = [];
  @Input() filtros: boolean = true;
  @Input() queryParams: boolean = false;
  @Input() theater?: string;
  @Input() date?: string;
  
  filtro: string = "";
  sorting: string = "-alt";

  constructor(private router: Router) { }

  reverteArray(): void {
    this.movies.reverse();
    this.sorting = (this.sorting === '-alt') ? '' : '-alt'
  }

  obterFilmes(): Movie[] {
    if (this.filtro.length === 0 || this.filtro == undefined || this.filtro.trim() === ''){
      return this.movies;
    }

    return this.movies.filter(movie => {
      return (movie.title.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0)
    })
  }

  AcessarFilme(movieId: string): void {
    if(this.queryParams && this.theater && this.date) {
      this.router.navigate(
        ['/movies/movie', movieId],
        { queryParams: {
            theater: this.theater,
            date: this.date
          }
        })

    } else {
      this.router.navigate(['/movies/movie', movieId])
    }
  }
}
