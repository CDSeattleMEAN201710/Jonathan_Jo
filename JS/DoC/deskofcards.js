class Card
{
	constructor(suit, rank)
	{
		this.suit = suit
		this.rank = rank
	}
}

//deck class
//it will have cards in it, shuffle, deal card, reset


function Deck()
{
	this.shuffle = () => {
		for(let i = 0; i<this.cards.length; i++)
		{
			let random_index = Math.floor(Math.random()*this.cards.length)
			let temp = this.cards[i]
			this.cards[i] = this.cards[random_index]
			this.cards[random_index] = temp;
		}
	}

	this.deal = () => this.cards.pop()

	this.reset= ()=>{
		this.cards = []
		///CAN USE this.cards in replace of card sif you dont wnt it to be private
		let ranks = ["Ace", "2" ,"3","4","5", "6" ,"7","8","9", "10" ,"Jack","Queen", "King"]
		let suits = ["Hearts", "Spades", "Diamonds", "Clubs"]

		for( let suit of suits)
		{
			for(let rank of ranks)
			{
				this.cards.push(new Card(suit,rank))
			}
		}
	}

	this.reset()

	this.showDeck = () => this.cards.slice()
}

let myDeck = new Deck()
console.log(myDeck.cards)
myDeck.shuffle()
console.log(myDeck.cards)

for(let i = 0; i<4; i++)
{
	console.log(myDeck.deal())
}
myDeck.showDeck()
//console.log(myDeck.cards[myDeck.cards.length-1])