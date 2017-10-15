const express = require("express")
const app = express()
const PATH = require("path")
const PORT = 8000
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:true}))
app.set("views",PATH.join(__dirname,"./views"))
app.set("view engine", "ejs")

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
 name: String,
 comment: String,
 creationTime: {type: Date, default: Date.now},
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this  Schema from our Models, named 'User'
mongoose.Promise = global.Promise;


app.get("/", (req,res)=>{
	res.render('index')
  })


app.post("/quotes", (req,res)=>{
  var user = new User({name: req.body.name, comment: req.body.comment, creationTime : req.body.creationTime});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
	    if(err) {
	      console.log('something went wrong');
	    } else { // else console.log that we did well and then redirect to the root route
	      console.log('successfully added a user!');
		res.redirect("/quotes")
		}
	})
})

app.get("/quotes", (req,res)=>{
  User.find({}, function(err, users) {
  	if (err) return console.log(err)
  		
    context = {
  	"users": users
  }
  console.log(context['users'])
	res.render('quotes', context)
  })

})

app.listen(PORT,()=>{
	console.log(`listening on port ${PORT})`)
})