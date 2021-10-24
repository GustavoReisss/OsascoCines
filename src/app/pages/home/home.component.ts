import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SessionsService } from 'src/app/shared/services/sessions.service';
import { MoviesService } from 'src/app/shared/services/movies.service';

import { Movie } from 'src/app/shared/models/interfaces/movie.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private subs: Subscription[] = []
  movies!: Movie;

  constructor(
    private sessionsService: SessionsService,
    private moviesService: MoviesService
    ) { }

  ngOnInit(): void {
    this.subs.push(this.moviesService.getAllMovies().subscribe(movies => this.movies = movies))
  }
  
  testeMovieSections(movieId: string): void {
    this.sessionsService.getMovieSessions(movieId).subscribe(sessions => console.log(sessions))
  }

}
