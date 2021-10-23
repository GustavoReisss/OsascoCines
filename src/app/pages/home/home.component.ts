import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionsService } from './../../shared/services/sessions.service';
import { Movie, MoviesEntity } from 'src/app/shared/models/interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private subs: Subscription[] = []
  //movies: Movie[] = []
  movies: MoviesEntity[] = []


  constructor(private sessionsService: SessionsService) { }

  ngOnInit(): void {
    //this.subs.push(this.sessionsService.getAllSections('845').subscribe(movies => {this.movies = movies; console.log(this.movies)}))
    this.subs.push(this.sessionsService.getMovies().subscribe( movies => this.movies = movies ));
  
  }

}
