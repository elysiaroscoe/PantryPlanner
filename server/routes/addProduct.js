const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/new', verify, (req, res) => {
    res.json({
        product: 'eggs'
    })
})

module.exports = router;