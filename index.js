var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));
app.use("/images", express.static(__dirname + '/images'));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/web3/dist')));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Dapp Front End listening on port: ' + port);
