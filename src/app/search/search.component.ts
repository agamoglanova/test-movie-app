import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr: string = ''
  isLoaded: boolean = false
  isShowed: boolean = true
  isNotFound: boolean = false
  movie: any

  constructor(private service: MoviesService) { }

  handleChange() {
      this.service.getData(this.searchStr)
      .subscribe(movie => {
        this.movie = movie
        console.log(movie.Response)
        if (movie.Response==='True') {
          this.isLoaded = true
        }
        else if (movie.Response==='False') {
          this.isLoaded = false
          this.isNotFound = true
        }
      })
  };
  hideItems () {
    this.isShowed = false
  }
  showItems() {
    this.isShowed = true
  }
  ngOnInit(): void {
  }

}
