import { Pipe, PipeTransform } from '@angular/core';
 import {Quote} from './quote'

@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {

  transform(quotes: Array<Quote>, rating:string): Array<Quote> {
  	
 //   	let new_arr = []
	
	// var count = 0;
	// var index = 0
	// let totalLength = quotes.length

	// while( count != totalLength)
	// {
		
	// 	var max = quotes[0]
	// 	for (let i = 0; i<quotes.length; i++)
	// 	{
	// 		if(max.rating <= quotes[i].rating)
	// 		{
	// 			max = quotes[i]
	// 			index = i
	// 		}
	// 	}
	// 	new_arr.push(max)
	// 	quotes.splice(index,1)
	// 	count++
	// }
	// console.log(new_arr)
	// return new_arr
	for(let i = 0; i<quotes.length;i++)
	{
		for(let j = i+1; j<quotes.length;j++)
		{
			if( quotes[i].rating < quotes[j].rating)
			{
				let temp = quotes[i]
				quotes[i] = quotes[j]
				quotes[j] = temp
			}
		}
	}
	return quotes
}
  }


