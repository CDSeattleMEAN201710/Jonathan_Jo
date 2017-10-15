const posts = require("./../controllers/messages.js")

module.exports = app =>{
  app.get("/", posts.index)
  app.post("/post", posts.newPost)
  // // route for getting a particular post and comments
  // app.get('/posts/:id', function (req, res){
  //  Post.findOne({_id: req.params.id})
  //  .populate('comments')
  //  .exec(function(err, post) {
  //       res.render('post', {post: post});
  //         });
  // });

  // route for creating one comment with the parent post id
  app.post('/newComment', posts.newComment)
}