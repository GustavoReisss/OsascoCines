import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Movie } from './../../../shared/models/interfaces/movie.interface';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-comming-soon-movies',
  templateUrl: './comming-soon-movies.component.html',
  styleUrls: ['./comming-soon-movies.component.scss']
})
export class CommingSoonMoviesComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  soonMovies!: Movie[];

  constructor(
    private moviesService: MoviesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    this.subs.push(
      this.moviesService.getComingSoonMovies().subscribe(
        soonMovies => {
          this.soonMovies = soonMovies;
          setTimeout(() => this.spinner.hide(), 500) 
        }
    ))
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }


}
