const router = require('express').Router();
const { Post } = require('../../models')

router.get('/post', async (req, res) => {
    try {
        const postdata = await Post.findAll()
        res.json(postdata)

    } catch(err) {
        console.log(err)
    }
    
});
//localhost:3001/api/posts/
// generally api routes use post, put or delete routes
router.post("/",async (req, res)=>{
  try{
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body
    })

    res.json(newPost)
  }catch(err){
    console.log(err)
  }
})
module.exports = router;