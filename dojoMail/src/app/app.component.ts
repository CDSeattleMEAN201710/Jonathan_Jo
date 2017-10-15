import { Component } from '@angular/core';
import {User} from "./user"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	users:Array<User>
	constructor() { }
	ngOnInit() {

		this.users = [{
		email: "bill@gates.com",
		importance: "High",
		subject:"New Windows",
		content: "Windows XI will launch in year 2100",
		},{
		email:"ada@lovelace.com",
		importance: "High",
		subject:"programming",
		content:"Enchantress of Numbers"
		},{
		email:"john@carmac.com",
		importance: "Low",
		subject:"Updated Algo",
		content:"New algroithm for shadow volumes",
		},{
		email:"gabe@newel.com",
		importance:"Low",
		subject:"HL3!",
		content:"Just cruel...",
		}]

	}
	create_user(new_user: User){
		this.user.push(new_user)
	}
}

