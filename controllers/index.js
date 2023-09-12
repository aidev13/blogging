const router = require('express').Router();
const viewRoute = require('./views')
const apiRoutes = require('./api')


router.use('/api', apiRoutes)
router.use('/', viewRoute)

module.exports = router;