const express = require('express')
const router  = express.Router()

let controller = require('../controllers/login.controller')

router.post('/auth', controller.auth )

module.exports = router;