const router = require('express').Router();
const userRoute = require('./user')
const postRoute = require('./post')

router.use ('/api', postRoute)

module.exports = router;