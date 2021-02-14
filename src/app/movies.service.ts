import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getData(movie: string): Observable<any> {
    let url = `https://www.omdbapi.com/?t=${movie}&apikey=9f54e8f6`;
    return this.http.get(url).pipe(
      map((response: Response) => {
        console.log(response)
        return response;
      })
    );
    
  }
  
}
