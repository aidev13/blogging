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

module.exports = router;