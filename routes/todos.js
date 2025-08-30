const router = require('express').Router()

router.post('/', (req, res) => {
    res.send('Todos')
})

module.exports = router 