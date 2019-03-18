const FireBase = require('../firebase');
const httpCode = require('../http_code');
const randomstring = require('randomstring');



var Auth = {
    login: function (phone, password) {
        return FireBase.login(phone, password);
    },
    signOut: function () {
        return FireBase.logout();
    },
    getOneUser: function (phone) {
        return FireBase.getOneAccount(phone)
    },
    connectDatabaseRegister: function (phone) {
        return FireBase.connectFirebaseDatabaseRegister(phone);
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


module.exports.sms = (req, res) => {
    var phone_number = req.body.to;
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
    res.header('Content-Type', 'appication/json');
// -------------------------------------------------------
    Auth.connectDatabaseRegister(phone_number).once('value')
    .then((data) => {
        console.log(data.val())
        console.log(data.val().smsCode)
 
    }).catch(e => console.log(e))
// ----------------------------------------------
    // Send sms code
    twilioClient.messages.create({
        from: TWILIO.phone_number,
        to: req.body.to,
        body: number
    })
        .then(() => {
            res.send(JSON.stringify({ success: true }));
        })
        .catch(err => {
            console.log(err)
            res.send(JSON.stringify({ success: false }));

        })


    // save data into firebase
    Auth.connectDatabaseRegister(phone_number).set({
        smsCode: number,
        phone_number: req.body.to
    })
}

module.exports.verifySmsCode = (req, res) => {
    var Code = req.body.smsCode;
    var phone_number = req.body.to;
    // console.log(req.body)

    res.header('Content-Type', 'application/json');

    Auth.connectDatabaseRegister(phone_number).once('value')
    .then((data) => {
        // let smsCodeOnDatabase = data.val().smsCode;
        console.log(data.key)
        console.log(data.val())
        // console.log('2'+smsCodeOnDatabase)
        // if(smsCodeOnDatabase === Code){
        //     console.log('true');
        //     res.send({success: true})
        // }else {
        //     console.log('faulse')
        //     res.send({success: false})
        // }
 
    }).catch(e => console.log(e))

}


module.exports.signOut = (req, res) => {
    Auth.signOut().then(() => {
        res.send(JSON.stringify({ success: true }))
    }).catch(err => {
        res.send(JSON.stringify({ success: false }))
    })
}