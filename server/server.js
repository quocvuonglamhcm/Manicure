const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiWelcome = require('./apis/welcome');
const apiSms = require('./apis/sms');

app.use(apiWelcome, apiSms);

app.listen(port, () => console.log(`Listening on port ${port}!`));
