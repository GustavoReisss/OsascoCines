import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent implements OnInit, OnDestroy {
  
  subs: Subscription[] = [];

  movieId: string;
  popup: number = 0;
  theaters: string[] = ['340', '845']; // cinemark e kinoplex
  date: any = null;
  hasSessions: boolean = true;
  hasMovie: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.movieId = this.route.snapshot.params["id"]
    
    let theater = this.route.snapshot.queryParams["theater"];
    if(theater){
      this.theaters = [theater]
    }

    let date = this.route.snapshot.queryParams["date"];
    if(date){
      this.date = date
    }
  }

  ngOnInit(): void { }

  mostrarTodasSessoes(){
    this.theaters = ['340', '845']; // cinemark e kinoplex
    this.date = null;
    this.router.navigate([`/movies/movie`, this.movieId])
  }

  atualizaPopUp(numDiv: number): void {
    this.popup = numDiv;
  }

  setHasSessions(possui: boolean): void {
    this.hasSessions = possui;
  }

  setHasMovie(possui: boolean): void {
    this.hasMovie = possui;
  }

  ngOnDestroy(): void {
    this.subs.map(
      sub => sub.unsubscribe()
    );
  }
}





// this.subs.push(
    //   this.sessionsService.getMovieSessions(this.movieId).subscribe(
    //     movieSessions => {
    //       // console.log(movieSessions);
          
    //       movieSessions?.forEach(session => {

    //         session.theaters?.forEach(theater => {
              
    //           if(theater.name.includes('Cinemark')){
    //             this.cinemark.push(theater)
    //             let len = this.cinemark.length;
    //             this.cinemark[len-1].dayOfWeek = session.dayOfWeek;
    //             this.cinemark[len-1].dateFormatted = session.dateFormatted;
    //           }
    //           else {
    //             this.kinoplex.push(theater)
    //             let len = this.kinoplex.length;
    //             this.kinoplex[len-1].dayOfWeek = session.dayOfWeek;
    //             this.kinoplex[len-1].dateFormatted = session.dateFormatted;
    //           }

    //         })

    //       })
          // console.log(this.kinoplex)
          // console.log(this.cinemark)
      // })
    // )