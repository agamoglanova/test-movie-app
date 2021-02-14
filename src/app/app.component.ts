import { Component } from '@angular/core';
import {MoviesService} from './movies.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-test';
  constructor() {
  
  }
}
