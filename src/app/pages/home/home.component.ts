import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { ComingSoonMovies } from './../../shared/models/interfaces/comingSoonMovie.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subs: Subscription[] = [];
  soonMovies!: ComingSoonMovies;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.subs.push(
      this.moviesService.getComingSoon().subscribe(
        soonMovies => {this.soonMovies = soonMovies; console.log(this.soonMovies)}
    ))
  }

}
