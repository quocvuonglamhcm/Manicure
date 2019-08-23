const express = require('express')
const path = require('path')

const port = 4001

const app = express()

app.use('/static',express.static(path.join(__dirname, '/client_app/build/static')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client_app/build/index.html');
});
app.listen(port, () => console.log(`Listening on port ${port}`))