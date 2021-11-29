import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theater-properties',
  templateUrl: './theater-properties.component.html',
  styleUrls: ['./theater-properties.component.scss']
})
export class TheaterPropertiesComponent implements OnInit {

  @Input() props: any

  constructor() { }

  ngOnInit(): void {
  }

}
