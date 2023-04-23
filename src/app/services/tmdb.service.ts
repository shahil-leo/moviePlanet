import { Movie } from './../modals/trending';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Users } from '../modals/user';
import { Observable, map } from 'rxjs';
import { Movies } from '../modals/trending';
@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  base_url: string = 'https://api.themoviedb.org/3/'
  api_key: string = "5c22bcbd7888afb81b9c03765cba2dc5"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<Users>('https://dummyjson.com/users').pipe(map(res => res.users))
  }

  getTrending(Data: 'day' | 'week', Show: 'tv' | 'movie'): Observable<Movie[]> {
    return this.http.get<Movies>(`https://api.themoviedb.org/3/trending/${Show}/${Data}`, {
      params: {
        api_key: this.api_key
      }
    }).pipe(map(res => res.results))
  }

}




