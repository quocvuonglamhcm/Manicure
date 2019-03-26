const express = require('express')
const router  = express.Router()

let controller = require('../controllers/account.controller')

router.post('/login', controller.authLogin ); /* /api/account/login */

router.post('/sms', controller.sms ); /* /api/account/sms */

router.post('/verifySmsCode', controller.verifySmsCode)/* /api/account/verifySmsCode */

router.post('/createUser', controller.createNewUser ) /* /api/account/createUser */

router.delete('/signOut', controller.signOut)/* /api/account/signOut */

module.exports = router;