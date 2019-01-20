const router = require('express').Router();

router.post('/', function(req, res) {
    res.status(200).end();
})

module.exports = router;