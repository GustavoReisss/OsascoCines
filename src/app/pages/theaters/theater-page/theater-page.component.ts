import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionsService } from '../../../shared/services/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { AllSessions } from '../../../shared/models/interfaces/allSessions.interface';
import { Subscription } from 'rxjs';
import { Theater } from '../../../shared/models/interfaces/theater.interface';
import { TheatersService } from '../../../shared/services/theaters.service';

@Component({
  selector: 'app-theater-page',
  templateUrl: './theater-page.component.html',
  styleUrls: ['./theater-page.component.scss']
})
export class TheaterPageComponent implements OnInit, OnDestroy {

  theaterid!: string;
  private subs: Subscription[] = [];
  sessions: AllSessions[] = [];
  theater!: Theater;

  dia: string = "Todos";

  constructor(
    private sessionsService: SessionsService,
    private theatersService: TheatersService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.theaterid = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.subs.push(
      this.sessionsService.getAllTheatherSections(this.theaterid).subscribe(
        sessions => {this.sessions = sessions; console.log(this.sessions)}
    ))

    this.subs.push(
      this.theatersService.getTheater(this.theaterid).subscribe(
        theater => {this.theater = theater; console.log(this.theater)}
    ))
  }

  obterSessoes(): AllSessions[] {
    if (this.dia == 'Todos'){
      return this.sessions;
    }

    return this.sessions.filter(session => {
      console.log(session)
      return (session.dayOfWeek == this.dia)
    }) 
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

}
