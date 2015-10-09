var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var app = express();

var members = require('./routes/members');

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})

app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/members', members);

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
