import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl: string = 'https://www.omdbapi.com/?apikey=3a05bca5';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  searchMovies(searchTerm: string): Observable<any>{

    return this.http.get(baseUrl, {params: {s: searchTerm}});
  }

  getMovieDetails(id: string): Observable<any>{
    return this.http.get(baseUrl, {params: {i: id}});
  }




}
