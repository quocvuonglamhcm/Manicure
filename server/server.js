const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiWelcome = require('./apis/welcome');
const apiSms = require('./apis/sms');
const loginRoute = require('./apis/routes/login.route')
const signupRoute = require('./apis/routes/signup.route')
// app.use(
//   require('./apis/sms'),
//   require('./apis/sms'),
//   require('./apis/auth')
// );

app.use('/api/login',loginRoute);
app.use('/api/signup',signupRoute)

app.listen(port, () => console.log(`Listening on port ${port}!`));
