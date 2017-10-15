const express = require("express")
const app = express()
const PATH = require("path")
const PORT = 8000
const bodyParser = require('body-parser')
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}))
app.set("views",PATH.join(__dirname,"./views"))
app.set("view engine", "ejs")

require("./server/config/mongoose.js")
require("./server/config/routes.js")(app)
// set our models by passing them their respective Schemas
// mongoose.model('Post', PostSchema);
// mongoose.model('Comment', CommentSchema);

// // store our models in variables
// var Post = mongoose.model('Post');
// var Comment = mongoose.model('Comment');

app.listen(PORT,()=>{
	console.log(`listening on port ${PORT})`)
})