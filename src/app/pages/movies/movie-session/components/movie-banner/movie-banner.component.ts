import { Component, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Movie } from 'src/app/shared/models/interfaces/movie.interface';


@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.scss']
})
export class MovieBannerComponent implements OnChanges {
  
  @Output() valorPopUp = new EventEmitter<number>();
  @Input() movie!: Movie;
  @Input() jaLancou!: boolean;

  popup: number = 0;
  trailerUrl: any = "";

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnChanges(){
    if (this.movie?.images![1]){
      this.movie.images![1].url =  ` '${this.movie.images![1].url}' `
    }
  
    if(this.movie?.trailers!.length > 0){
      this.getTrailerUrl();
    }
  }

  popupMode(numDiv: number): void {
    this.popup = numDiv;
    this.valorPopUp.emit(numDiv);
  }

  getTrailerUrl(): void {
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailers![0]!.embeddedUrl);
  }
}
