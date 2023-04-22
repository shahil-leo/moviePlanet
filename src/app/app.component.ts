import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieZone';
  onTrue: boolean = true

  onClick(event: boolean) {
    this.onTrue = !event
  }
}
