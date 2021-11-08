import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater-sessions',
  templateUrl: './theater-sessions.component.html',
  styleUrls: ['./theater-sessions.component.scss']
})
export class TheaterSessionsComponent implements OnInit {

  @Input() theater?: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.theater)
  }

  ComprarIngresso(url: string): void {
    window.open(url)
  }

}
