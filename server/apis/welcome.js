const express = require('express')
const router  = express.Router()

router.get('/api/welcome', (req, res) => {
  console.log('welcom');
  res.send('Welcome Nails');
  res.end();
})

module.exports = router;
