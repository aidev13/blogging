const router = require('express').Router();
const {Post} = require('../models')

router.post('/', async (req, res) => {

    try{
        const allPosts = await Post.findAll()
        console.log(allPosts)
    } catch(err) {
        res.status(404).json(err)
    }
})

module.exports = router;