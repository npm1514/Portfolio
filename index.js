const express = require('express');
const compression = require('compression');
const cors = require('cors');

var port = process.env.PORT || 3000;
var app = express();

app.use(cors())

app.use(compression());

app.use(express.static(__dirname + '/public'));

app.get('/health', (req, res) => res.send('OK'));

app.listen(port, function(){
  console.log("listening to " + port);
});
