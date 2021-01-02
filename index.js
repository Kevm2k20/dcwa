var mysqlDAO = require('./mysqlDAO');
//var mongoDAO = require('./mongoDAO');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/', (req, res) => {
    res.send("<a href='/countries'>List Countries</a> </br> <a href='/cities'>List Cities</a> </br> <a href='/headsOfState'>List Heads of State</a>")
});

app.get('/countries', (req, res) => {
    mysqlDAO.getCountries()
    .then((result) => {
        res.render('countries', {countries:result})
    })
    .catch((error) => {
        res.send(error)
    })
})

app.get('/cities', (req, res) => {
    mysqlDAO.getCities()
    .then((result) => {
        res.render('cities', {cities:result})
    })
    .catch((error) => {
        res.send(error)
    })
})

app.listen(3004, () =>{
    console.log("Listening on port 3004")
});