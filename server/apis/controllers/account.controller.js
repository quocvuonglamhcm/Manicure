const FireBase = require('../firebase');
const httpCode = require('../http_code');
const randomstring = require('randomstring');



var Auth = {
    login: function (phone, password) {
        return FireBase.login(phone, password);
    },
    signOut: function(){
        return FireBase.logout();
    }
}

module.exports.authLogin = function (req, res) {
    const phone = req.body.phone;
    const pass = req.body.password;
    res.header('Content-Type', 'application/json');
    Auth.login(phone, pass)
        .then(() => {
            res.send(JSON.stringify(httpCode.authStatus()))
            res.end()
        })
        .catch(err => {
            res.send(JSON.stringify(httpCode.authStatus()))
            res.end();
        })
}


module.exports.sms =(req, res) => {
    const TWILIO = {
        accountSID: 'ACa10351c021a6c4b50692d401da28f324',
        phone_number: '+15127725694',
        authToken: '216900306ffdf929645ee36c93d4fcf0'
      }
    
      const twilioClient = require('twilio')(
        TWILIO.accountSID,
        TWILIO.authToken
      );
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

module.exports.signOut = (req, res)=> {
    Auth.signOut().then(() =>{
        res.send(JSON.stringify({success: true}))
    }).catch(err =>{
        res.send(JSON.stringify({success:true}))
    })
}