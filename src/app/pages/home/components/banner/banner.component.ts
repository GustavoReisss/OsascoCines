import { MoviesService } from 'src/app/shared/services/movies.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Movie } from './../../../../shared/models/interfaces/movie.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() movies: Movie[] = [];
  img: number = 0;
  listMovies: any = [];
  imagens: any = [];

  constructor(private moviesService: MoviesService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.getAllMoviesCarousel();
  }

  getAllMoviesCarousel() {
    this.spinner.show();
    this.moviesService.getAllMoviesCarousel().subscribe((response: any) => {
      this.listMovies = response;
      this.spinner.hide();
      this.imagens = this.listMovies.items.map((i: any) => i.images);
    });
  }
}
