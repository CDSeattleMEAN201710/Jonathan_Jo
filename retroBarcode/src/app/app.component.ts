import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    colors:Array<string>
    barcode = Array
	colorBarcode = []

    constructor() {} 
 
	ngOnInit() {
		let colors = ["red", "blue", "green", "yellow", "purple", "pink","white","black", "orange", "grey"];
		let barcode = []
		let randomize = function() {
			
			for (let i = 0; i < 10; i++){
			const randNum = Math.floor(Math.random()*colors.length)
			 barcode.push(colors[randNum])
			} return barcode
		}
	this.colorBarcode = randomize()
	}	
}
 