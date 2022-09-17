import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionsService } from '../../../shared/services/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { AllSessions } from '../../../shared/models/interfaces/allSessions.interface';
import { Subscription } from 'rxjs';
import { Theater } from '../../../shared/models/interfaces/theater.interface';
import { TheatersService } from '../../../shared/services/theaters.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-theater-page',
  templateUrl: './theater-page.component.html',
  styleUrls: ['./theater-page.component.scss']
})
export class TheaterPageComponent implements OnInit, OnDestroy {

  theaterId!: string;
  private subs: Subscription[] = [];
  sessions: AllSessions[] = [];
  theater!: Theater;

  dia: string = "Todos";

  popup: number = 0;

  constructor(
    private sessionsService: SessionsService,
    private theatersService: TheatersService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { 
    this.theaterId = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.spinner.show()

    this.subs.push(
      this.sessionsService.getAllTheatherSections(this.theaterId).subscribe(
        sessions => {
          this.sessions = sessions;
          setTimeout(() => this.spinner.hide(), 500);
        }
    ))

    this.subs.push(
      this.theatersService.getTheater(this.theaterId).subscribe(
        theater => this.theater = theater
    ))
  }

  obterSessoes(): AllSessions[] {
    if (this.dia == 'Todos'){
      return this.sessions;
    }

    return this.sessions.filter(session => {
      // console.log(session)
      return (session.dayOfWeek == this.dia)
    }) 
  }

  popupMode(numDiv: number): void {
    this.popup = numDiv;
    // this.valorPopUp.emit(numDiv);
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

}
