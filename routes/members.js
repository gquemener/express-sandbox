var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: true });
var members = ['Gildas'];

router.route('/')
    .get(function (request, response) {
        response.json(members);
    })
    .post(parseUrlencoded, function (request, response) {
        var newMember = request.body;
        if (newMember.name.length === 0) {
            response.status(400).json('Name is required.');
        } else {
            members.push(newMember.name);
            response.status(201).send(newMember.name);
        }
    });

module.exports = router;
