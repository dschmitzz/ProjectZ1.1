// const got = require('got');
const express = require('express');
const mysql = require("mysql2");
const {restart} = require("nodemon");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sug#09wWRg09",
    database: "projectZ"
})

conn.connect(function(err) {
    if (err) console.log("bad news-- ", err);
    else console.log("Connection established.");
})

const app = express();

app.use(express.static("public"));

app.get("/registration", function(req, res) {res.sendFile(__dirname + "/public/" + "registration.html");});

app.get('/logout', function(req, res) {
    authenticated = false;
    currentUser = '';
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(3000, function() {console.log('Listening on port 3000...');});