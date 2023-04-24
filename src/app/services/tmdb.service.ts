import { Movie } from './../modals/trending';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Users } from '../modals/user';
import { Observable, map } from 'rxjs';
import { Movies } from '../modals/trending';
import { PopularMovies, popular } from '../models/popular-movies';
import { Search, searchMovie } from '../models/search';
import { MovieDetails } from '../models/details';
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
    return this.http.get<Movies>(`${this.base_url}/trending/${Show}/${Data}`, {
      params: {
        api_key: this.api_key
      }
    }).pipe(map(res => res.results))
  }
  getPopular(): Observable<popular[]> {
    return this.http.get<PopularMovies>(`${this.base_url}/movie/popular`,
      { params: { api_key: this.api_key } }).pipe(map(res => res.results))
  }

  searchMovie(searchMovie: any): Observable<searchMovie[]> {
    return this.http.get<Search>(`${this.base_url}/search/movie`, {
      params: {
        api_key: this.api_key,
        query: searchMovie
      }
    }).pipe(map(res => res.results))

  }

  movieDetails(id: string, show: 'movie' | 'tv'): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.base_url}/${show}/${id}`, {
      params: {
        api_key: this.api_key
      }
    }).pipe(map(res => res))
  }

}





