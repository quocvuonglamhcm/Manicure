const randomstring = require('randomstring')

const TWILIO = {
    accountSID: 'ACa10351c021a6c4b50692d401da28f324',
    phone_number: '+15127725694',
    authToken: '216900306ffdf929645ee36c93d4fcf0'
  }

  const twilioClient = require('twilio')(
    TWILIO.accountSID,
    TWILIO.authToken
  );
module.exports.sms =(req, res) => {
    const number = randomstring.generate({
        length: 4,
        charset: 'numeric'
      });
    console.log(number)
    res.header('Content-Type', 'appication/json');

    twilioClient.messages.create({
        from: TWILIO.phone_number,
        to: req.body.to,
        body: number
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }) );
    })
    .catch(err => {
      res.send(JSON.stringify({ success: false }) );

    })
}