import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genre-not-found',
  templateUrl: './genre-not-found.component.html',
  styleUrls: ['./genre-not-found.component.scss']
})
export class GenreNotFoundComponent implements OnInit {

  @Output() hasMovie = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  setHasMovie() {
    this.hasMovie.emit();
  }
}
