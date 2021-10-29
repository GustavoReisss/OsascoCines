import { Component, OnInit } from '@angular/core';
import { SessionsService } from './../../../shared/services/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { AllSessions } from './../../../shared/models/interfaces/allSessions.interface';
import { Subscription } from 'rxjs';
import { Theater } from './../../../shared/models/interfaces/theater.interface';
import { TheatersService } from './../../../shared/services/theaters.service';

@Component({
  selector: 'app-theater-sessions',
  templateUrl: './theater-sessions.component.html',
  styleUrls: ['./theater-sessions.component.scss']
})
export class TheaterSessionsComponent implements OnInit {

  private id!: string;
  private subs: Subscription[] = [];
  sessions: AllSessions[] = [];
  theater!: Theater;


  constructor(
    private sessionsService: SessionsService,
    private theatersService: TheatersService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.id = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.subs.push(
      this.sessionsService.getAllTheatherSections(this.id).subscribe(
        sessions => {this.sessions = sessions; console.log(this.sessions)}
    ))

    this.subs.push(
      this.theatersService.getTheater(this.id).subscribe(
        theater => {this.theater = theater; console.log(this.theater)}
    ))
  }

}
