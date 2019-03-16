const express = require('express')
const FireBase = require('./firebase');

var Auth = {
  login: function(phone, password) {
    return FireBase.login(phone, password);
  }
}

const router  = express.Router()

router.post('/auth/login', (req, res) => {
  const phone = req.body.phone
  const pass = req.body.password

  res.header('Content-Type', 'application/json');

  Auth.login(phone, pass).then(
    () => {
      res.send(JSON.stringify({
        code: 200,
        message: 'Login success'
      }))
      res.end()
    }
  ).catch(error => {
    let statusCode, message

    switch (error.code) {
      case 'auth/user-not-found':
        statusCode = 500
        message = 'User not found'
        break;
      case 'auth/wrong-password':
        statusCode = 401
        message = 'Password wrong'
        break;
      case 'auth/invalid-email':
        statusCode = 401
        message = 'Invalid email'
        break;
      case 'auth/user-disabled':
        statusCode = 401
        message = 'Account disabled'
        break;
    }

    res.send(JSON.stringify({
      status: statusCode,
      message: message
    }))
  })
})

module.exports = router;
