import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TesteService } from '../../services/teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  public cinemas: any = [];

  constructor(private testeService: TesteService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.testeService.getCinemas().subscribe((response: any) => {
      this.cinemas = response.data;
      console.log(this.cinemas);
    })
  }


}
