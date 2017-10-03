function Ninja(name)
{
	this.name = name;
	this.health = 100;
	var speed = 3;
	var strength = 3;
	
	this.showStats = function()
	{
		console.log(this.health, speed,strength)
		return this;
	}
	this.kick = function(kicked_ninja)
	{
		let kickDamage = (15*strength);
		kicked_ninja.health -= kickDamage;
		console.log(kicked_ninja.name, "was punched by ", this.name, " and lost", kickDamage ," health" )
	}
	
}
Ninja.prototype.sayName = function()
	{
		console.log(this.name)
		return this;
	}
Ninja.prototype.drinkSake = function()
	{
		this.health+=10;
		return this;
	}
Ninja.prototype.punch = function(punched_ninja)
	{
		punched_ninja.health -=5;
		console.log(punched_ninja.name, "was punched by ", this.name, " and lost 5 health" )
	}

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
red_ninja.punch(blue_ninja);
blue_ninja.kick(red_ninja);

console.log(red_ninja.name,red_ninja.health);
console.log(red_ninja.name,blue_ninja.health);

red_ninja.showStats();
blue_ninja.showStats();