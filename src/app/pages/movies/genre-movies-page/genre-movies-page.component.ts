import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from './../../../shared/services/movies.service';

import { generoMovies } from 'src/app/shared/models/classes/generoMovies.class';


@Component({
  selector: 'app-genre-movies-page',
  templateUrl: './genre-movies-page.component.html',
  styleUrls: ['./genre-movies-page.component.scss']
})
export class GenreMoviesPageComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  generos: generoMovies[] = [];

  constructor(
    private moviesService: MoviesService
  ) { }


  ngOnInit(): void {


    // FAZER UMA FUNÇÃO NO movies.service.ts RETORNANDO OS DADOS JÁ MAPEADOS
    this.subs.push(
      this.moviesService.getAllMovies().subscribe(allMovies => {
        
        let generos: Map<string, any[]> = new Map<string, any[]>();
          
        allMovies.forEach(movie => {    
          
          movie.genres?.forEach(genre => {
            let movies: any[] | undefined = [];

            if(generos.has(genre)){
              movies = generos.get(genre);
            }

            movies!.push(movie);
            generos.set(genre, movies!);
          })
        })
          
        generos.forEach((value, key) => {
          this.generos.push(new generoMovies(key, value));
        })

        console.log(this.generos);

      })
    )
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe);
  }

}
