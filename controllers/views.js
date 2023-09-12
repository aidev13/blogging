const router = require('express').Router();
const { User } = require('../models')

router.get('/addpost', async (req, res) => {
    try {
        // const userdata = await User.findAll()
        // res.json(userdata)
        res.render('addpost')

    } catch(err) {
        console.log(err)
    }
    
});

module.exports = router;