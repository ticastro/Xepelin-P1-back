const router = require('express').Router()

router.post('/', (req, res) => {
    res.send('User')
})

module.exports = router