import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MoviesService } from './../../../shared/services/movies.service';

import { generoMovies } from 'src/app/shared/models/classes/generoMovies.class';
import { Movie } from './../../../shared/models/interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-genre-movies-page',
  templateUrl: './genre-movies-page.component.html',
  styleUrls: ['./genre-movies-page.component.scss']
})
export class GenreMoviesPageComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  generos: generoMovies[] = [];
  filtroGenero: string = "Todos";
  hasQueryParam: boolean = false;
  hasMovies: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let genero = this.route.snapshot.queryParams['genre'];
    if(genero){
      this.filtroGenero = genero;
      this.hasQueryParam = true;
    }
   }

  ngOnInit(): void {

    // FAZER UMA FUNÇÃO NO movies.service.ts RETORNANDO OS DADOS JÁ MAPEADOS
    this.subs.push(
      this.moviesService.getAllMovies().subscribe(allMovies => {
        
        let generos: Map<string, any[]> = new Map<string, any[]>();
          
        allMovies.forEach(movie => {    
          
          movie.genres?.forEach(genre => {
            let movies: Movie[] | undefined = [];

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

        this.generos.sort(
          (genreA, genreB) => 
            genreA.name.toLowerCase() > genreB.name.toLowerCase() ? 1 : -1 
        )

        if(this.hasQueryParam){
          this.generos.forEach(genre => {
            if(genre.name == this.filtroGenero) {
              this.hasMovies = true;
            }
          })
        }

        console.log(this.generos);

      })
    )
  }

  obterGeneros(): generoMovies[] {
    if(this.filtroGenero == 'Todos' || this.filtroGenero == undefined || this.filtroGenero == null){
      return this.generos;
    }

    return this.generos.filter(genero => {
      return (genero.name == this.filtroGenero)
    })
  }

  TodosGeneros(): void {
    this.hasMovies = true;
    this.filtroGenero = 'Todos'
    this.router.navigate(['/movies/genres'])
    this.hasQueryParam = false;
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe);
  }

}
