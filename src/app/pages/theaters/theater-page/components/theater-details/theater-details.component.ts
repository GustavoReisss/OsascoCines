import { Component, OnInit, Input } from '@angular/core';
import { Theater } from './../../../../../shared/models/interfaces/theater.interface';

@Component({
  selector: 'app-theater-details',
  templateUrl: './theater-details.component.html',
  styleUrls: ['./theater-details.component.scss']
})
export class TheaterDetailsComponent implements OnInit {

  @Input() theater!: Theater;

  constructor() { }

  ngOnInit(): void {
    
  }

}
