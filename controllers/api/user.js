const router = require('express').Router();
const { User } = require('../../models')

router.get('/users', async (req, res) => {
    try {
        const userdata = await User.findAll()
        res.json(userdata)

    } catch(err) {
        console.log(err)
    }
    
});

module.exports = router;