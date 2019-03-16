const express = require('express')
const router  = express.Router()
const FireBase = require('./firebase');

router.get('/api/welcome', (req, res) => {
  console.log('welcom');
  console.log(FireBase.hello());
  res.send('Welcome Nails');
  res.end();
})

module.exports = router;
