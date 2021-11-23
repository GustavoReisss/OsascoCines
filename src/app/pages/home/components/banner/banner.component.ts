import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Movie } from './../../../../shared/models/interfaces/movie.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() movies: Movie[] = [];
  img: number = 0;

  constructor() { 
  }

  ngOnInit() {
    setInterval(() => {this.mudarFilme(1)}, 5000)
  }

  mudarFilme(num: number): void {
    if(this.img == 0 && num == -1) {
      this.img = this.movies.length
    }
    console.log((this.img + num) % this.movies.length)
    this.img = (this.img + num) % this.movies.length;
  }
}