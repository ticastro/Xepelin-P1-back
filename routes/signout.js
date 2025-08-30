const router = require('express').Router()

router.post('/', (req, res) => {
    const [username, password] = req.body;

    if (!!username || !!password) {
        return res.status(400).json(
            jsonResponse(400, {
                error: 'Username and password are required' })
        )
    }


    res.status(200).json(
        jsonResponse(200, {
            message: 'Signout successful' })
    )

})

module.exports = router