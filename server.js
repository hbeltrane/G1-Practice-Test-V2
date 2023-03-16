const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){ 
  res.sendFile(__dirname + '/index.html');	
})

app.listen(3000);