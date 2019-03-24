const express = require('express')
const router  = express.Router()

let controller = require('../controllers/signup.controller')

router.post('/sms', controller.sms )

module.exports = router;