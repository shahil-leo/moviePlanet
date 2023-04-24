import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BehaviorSubject, Observable, combineLatest, map, switchMap } from 'rxjs';
import { Movie } from 'src/app/modals/trending';
import { PopularMovies, popular } from 'src/app/models/popular-movies';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  popular: Observable<popular[]>
  trending?: Observable<Movie[]>
  imageUrl: string = 'https://image.tmdb.org/t/p/w500/';
  imageUrl1: string = 'https://image.tmdb.org/t/p/original/';

  $times = new BehaviorSubject<'day' | 'week'>('day')
  $show = new BehaviorSubject<'tv' | 'movie'>('movie')
  filter = combineLatest({
    time: this.$times,
    show: this.$show
  })
  // switchMap will merge  two observables
  // we have two behavior subjects in the time and show and then we want to merge that two beha subject into one

  constructor(private service: TmdbService) {
    this.trending = this.filter.pipe(switchMap(({ time, show }) => this.service.getTrending(time, show)))
    this.popular = this.service.getPopular()
  }
  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    mouseDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      50: {
        items: 1,
      },
      100: {
        items: 1,
      }
    }
  }

  onClick(data: 'day' | 'week') {
    this.$times.next(data)
  }
  onShow(data: 'tv' | 'movie') {
    this.$show.next(data)
  }

}
