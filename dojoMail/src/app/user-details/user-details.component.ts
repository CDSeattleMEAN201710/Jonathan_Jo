import { Component, OnInit , Input} from '@angular/core';
import {User } from "./../user"
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
	@input() this_user: User
  constructor() { }

  ngOnInit() {

  }

}
