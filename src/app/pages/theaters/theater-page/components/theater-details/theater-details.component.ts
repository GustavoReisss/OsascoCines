import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Theater } from './../../../../../shared/models/interfaces/theater.interface';

@Component({
  selector: 'app-theater-details',
  templateUrl: './theater-details.component.html',
  styleUrls: ['./theater-details.component.scss']
})
export class TheaterDetailsComponent implements OnInit {

  @Input() theater!: Theater;
  @Output() mapa = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    
  }

  abrirMapa(): void {
    this.mapa.emit();
  }

}
