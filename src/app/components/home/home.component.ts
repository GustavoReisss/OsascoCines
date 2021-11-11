import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Subscription } from 'rxjs';
import { SessionsService } from '../../shared/services/sessions.service';
import { Movie} from 'src/app/shared/models/interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  highlights: Movie[] = [];

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.subs.push(
      this.moviesService.getHightlightMovies().subscribe(highlights => { 
        highlights.forEach(highlight => this.highlights.push(highlight.event)); 
        console.log(this.highlights)
      }
    ))
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

}
