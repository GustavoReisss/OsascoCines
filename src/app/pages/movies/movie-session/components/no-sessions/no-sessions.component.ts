import { Component, OnInit, Input } from '@angular/core';
import { PremiereDate } from 'src/app/shared/models/interfaces/movie.interface';

@Component({
  selector: 'app-no-sessions',
  templateUrl: './no-sessions.component.html',
  styleUrls: ['./no-sessions.component.scss']
})
export class NoSessionsComponent implements OnInit {

  @Input() estreia!: PremiereDate;

  constructor() { }

  ngOnInit(): void {
  }

}
