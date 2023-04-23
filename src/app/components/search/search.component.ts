import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movies } from 'src/app/modals/trending';
import { searchMovie } from 'src/app/models/search';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  $search?: Observable<searchMovie[]>

  constructor(
    private service: TmdbService,
    private route: ActivatedRoute
  ) { }
  imageUrl: string = 'https://image.tmdb.org/t/p/w500/';


  ngOnInit(): void {
    this.$search = this.route.params.pipe(switchMap(param => this.service.searchMovie(param['id'])))
  }


}
