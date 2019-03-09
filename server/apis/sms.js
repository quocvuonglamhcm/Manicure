const express = require('express')
const router = express.Router()
const randomstring = require('randomstring')

const TWILIO = {
  accountSID: 'AC977d848d906928ef3527b4e7762ae4ec',
  phone_number: '+14055719159',
  authToken: 'ede848bbac13f22fa130b37b21fedc85'
}

const twilioClient = require('twilio')(
  TWILIO.accountSID,
  TWILIO.authToken
);

router.post('/sms/verify_number', (req, res) => {
  const number = randomstring.generate({
    length: 4,
    charset: 'numeric'
  });

  res.header('Content-Type', 'application/json');
  
  twilioClient.messages
    .create({
      from: TWILIO.phone_number,
      to: req.body.to,
      body: number
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
})

module.exports = router
