const router = require('express').Router();
const { User, Post } = require('../models')

//localhost:3000/about

router.get('/addpost', async (req, res) => {
    try {
        // const userdata = await User.findAll()
        // res.json(userdata)
        res.render('addpost')

    } catch(err) {
        console.log(err)
    }
    
});

router.get('/blogs', async (req, res) => {
    try{
      const postData = await Post.findAll()
      //complicated return
      //console.log(postData)


      //simplified return array
      const posts = postData.map(singlepost => singlepost.get({plain:true}))
      console.log(posts)

        res.render('blogs.handlebars', {posts})

    } catch(err) {
        console.log(err)
    }
})

router.get('/', async (req, res) => {
  try {
      // const userdata = await User.findAll()
      // res.json(userdata)
      res.render('home')

  } catch(err) {
      console.log(err)
  }
  
});


module.exports = router;