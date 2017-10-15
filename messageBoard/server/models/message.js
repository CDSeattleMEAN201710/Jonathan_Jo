const mongoose = require("mongoose")
// define Post Schema
// define Schema variable
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
 name:String,
 text: {type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });

// define Comment Schema
var CommentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: {type: String, required: true },
 name:String
}, {timestamps: true });

post = mongoose.model("Post", PostSchema)