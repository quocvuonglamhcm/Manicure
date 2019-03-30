const FireBase = require('../firebase');
const httpCode = require('../http_code')


var Auth = {
    login: function (phone, password) {
        return FireBase.login(phone, password);
    }
}

module.exports.auth = function (req, res) {
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
