const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiWelcome = require('./apis/welcome');
const apiSms = require('./apis/sms');
const accountRoute = require('./apis/routes/account.route')

// app.use(
//   require('./apis/sms'),
//   require('./apis/sms'),
//   require('./apis/auth')
// );

app.use('/api/account',accountRoute);

app.listen(port, () => console.log(`Listening on port ${port}!`));
