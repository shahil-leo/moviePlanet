import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MovieDetails } from 'src/app/models/details';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {


  $movieDetails?: Observable<MovieDetails>;
  imageUrl: string = 'https://image.tmdb.org/t/p/original/';
  ratingcolor2(rate: number) {
    if (rate >= 70) return "#204529";
    if (rate >= 50) return "#423d0f";
    if (rate <= 49) return "#571435";
    return "none"
  }

  ratingcolor(rate: number) {
    if (rate >= 70) return "#21d07a";
    if (rate >= 50) return "#d2d531";
    if (rate <= 49) return "#db2360";
    return "none"
  }
  math = Math;



  constructor(private service: TmdbService, private route: ActivatedRoute) { }



  ngOnInit(): void {

    this.$movieDetails = this.route.params.pipe(switchMap((parmas => this.service.movieDetails(parmas['id'], parmas['show']))))

    this.$movieDetails.subscribe(console.log)

  }

}
