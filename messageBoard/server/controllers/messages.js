const mongoose = require("mongoose")
const Post = mongoose.model("Post")

module.exports = {
	index: (req,res) =>{
	  	Post.find({}, function(err, posts) {
	    	if (err) {return console.log(err)}
	  	

	      context = {
	    	"posts": posts
	    	}
	    	console.log(context)
	  	res.render('index', context)
	    })
	}

  newPost: (req,res)=>{
    var post= new Post({name: req.body.name, text: req.body.text, comments: req.body.comments});
    post.save(function(err) {
  	    if(err) {
  	      console.log('something went wrong');
  	    } else {
  	      console.log('successfully added a post!');
  		res.redirect("/")
  		}
  	})
  }


  // // route for getting a particular post and comments
  // app.get('/posts/:id', function (req, res){
  //  Post.findOne({_id: req.params.id})
  //  .populate('comments')
  //  .exec(function(err, post) {
  //       res.render('post', {post: post});
  //         });
  // });

  // route for creating one comment with the parent post id
  newComment: function (req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
           var comment = new Comment(req.body);
           comment._post = post._id;
           post.comments.push(comment);
           comment.save(function(err){
                   post.save(function(err){
                         if(err) { console.log('Error'); } 
                         else { res.redirect('/'); }
                   });
           });
     });
   }

}
