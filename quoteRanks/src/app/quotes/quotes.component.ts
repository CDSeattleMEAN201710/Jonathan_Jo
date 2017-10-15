 import { Component, OnInit  } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit  {
	new_quote = new Quote()
	quotes: Array<Quote>
	rating:number
	ngOnInit() {
		this.quotes = []
		this.new_quote = new Quote()
  }

	add(){
		this.new_quote.rating = 0
  		this.quotes.push(this.new_quote)
  		this.new_quote = new Quote
  	}
  	upVote(idx){
  		this.quotes[idx].rating++
  	}
  	downVote(idx){
  		this.quotes[idx].rating--
  	}
  	delete(idx){
  		this.quotes.splice(idx,1)
  	}


}
