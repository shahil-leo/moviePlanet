import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/modals/user';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {



  users?: Observable<User[]>;
  upComming: any

  onSide: boolean = true
  @Output() sideBar = new EventEmitter<boolean>();
  onSidebar(value: boolean) {
    this.onSide = !value
    this.sideBar.emit(this.onSide)
  }



  ngOnInit(): void {
  }
  onUpcoming() {
  }

}
