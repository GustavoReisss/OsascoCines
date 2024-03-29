import { Component, OnInit, OnDestroy } from '@angular/core';
import { TheatersService } from './../../../shared/services/theaters.service';
import { AllTheaters } from '../../../shared/models/interfaces/allTheaters.interface';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-all-theaters',
  templateUrl: './all-theaters.component.html',
  styleUrls: ['./all-theaters.component.scss']
})
export class AllTheatersComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  theaters!: AllTheaters;

  constructor(
    private theatersService: TheatersService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    this.subs.push(
      this.theatersService.getAllTheaters().subscribe(
        theaters => {
          this.theaters = theaters;
          // console.log(this.theaters);
          
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
        
        })
    )
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

}
