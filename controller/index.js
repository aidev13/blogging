const router = require('express').Router();
const userRoute = require('./user')
const postRoute = require('./post')


router.get('/', async (req, res) => {
    res.send('Hello World')
})

module.exports = router;