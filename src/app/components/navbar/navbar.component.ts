import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  onTrue: boolean = false;
  search?: string;
  imageValue: any;

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute) {
    this.imageValue = this.route.params
    console.log(this.imageValue)
  }
  onClick(value: boolean) {
    this.onTrue = !value
    this.newItemEvent.emit(this.onTrue)
  }
  onSubmit(data: NgForm) {
    data.reset()
  }

}
