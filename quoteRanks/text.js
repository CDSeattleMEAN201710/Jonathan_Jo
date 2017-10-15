function sortArray(arr){
	new_arr = []
	
	var count = 0;
	var index = 0
	totalLength = arr.length

	while( count != totalLength)
	{
		
		var max = arr[0]
		console.log(arr, "arraaaaayyyyyyy")
		console.log(max)
		for (let i = 0; i<arr.length; i++)
		{
			if(max.rating <= arr[i].rating)
			{
				max = arr[i]
				index = i
			}
		}
		new_arr.push(max)
		console.log(index)
		arr.splice(index,1)
		count++
	}
	return new_arr
}

arr= [ {rating:5},{rating:-4},{rating:15},{rating:26},{rating:901}]
console.log(arr)
console.log(sortArray(arr))

