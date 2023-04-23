import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Users } from 'src/app/modals/user';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {


  constructor(private userService: TmdbService) { }
  users?: Observable<User[]>;
  upComming: any

  onSide: boolean = true
  @Output() sideBar = new EventEmitter<boolean>();
  onSidebar(value: boolean) {
    this.onSide = !value
    this.sideBar.emit(this.onSide)
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }
  onUpcoming() {
  }

}
