import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {User} from "./../user"
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
	new_user: User
	@Output() add_a_user = new EventEmitter()  //event listener for parent
  constructor() { }

  ngOnInit() {
  	this.new_user = new User
  	// this.add_a_user = new EventEmitter
  }

  	create_user(){
		
		this.add_a_user.emit(this.new_user)  // can pass any data through parameter
		this.new_user = new User  //clear the form
}
