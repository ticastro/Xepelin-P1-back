const router = require('express').Router()

router.post('/', (req, res) => {
    res.send('RefreshToken')
})

module.exports = router