import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theater-properties',
  templateUrl: './theater-properties.component.html',
  styleUrls: ['./theater-properties.component.scss']
})
export class TheaterPropertiesComponent implements OnInit {

  @Input() props: any
  @Output() mapa = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  abrirMapa(): void {
    this.mapa.emit();
  }
}
