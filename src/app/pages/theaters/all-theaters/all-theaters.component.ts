import { Component, OnInit } from '@angular/core';
import { TheatersService } from './../../../shared/services/theaters.service';
import { AllTheaters } from '../../../shared/models/interfaces/allTheaters.interface';

@Component({
  selector: 'app-all-theaters',
  templateUrl: './all-theaters.component.html',
  styleUrls: ['./all-theaters.component.scss']
})
export class AllTheatersComponent implements OnInit {

  theaters!: AllTheaters;

  constructor(
    private theatersService: TheatersService
  ) { }

  ngOnInit(): void {

    this.theatersService.getAllTheaters().subscribe(theaters => this.theaters = theaters)
  }

}
