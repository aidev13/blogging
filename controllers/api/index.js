const router = require('express').Router()
const userRoute = require('./user')
const postRoute = require('./post')

router.use('/posts', postRoute)
router.use('/users', userRoute)


module.exports = router;
