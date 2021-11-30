const express = require('express');
const app = express.Router();
app.get('/hello', function(req, res) {
    res.send('Hello World')
})
app.get('/clima:ciudad', function(req, res) {
    const request = require('postman-request');
    request('https://us1.locationiq.com/v1/reverse.php?key=pk.44c67cf95f5617c911d14899e61836c7&lat=' + lat + '&lon=' + long + '&format=json', function(error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
})

app.get('/about', function(req, res) {
    res.send('About Myself')
})
app.get('/package', function(req, res) {
    res.send('Youre package are send By JAMESCORP')
})
app.get('/group', function(req, res) {
    res.send('<head><style>*{padding:2%}</style></head> <body> Our team is conformed by <br> <br> <li>James Juarez </li><br> <li>Angel Salvador </li><br>  <li>Gabriel Cruz </li> </li><br>  <li>Pedro Fernandez </li><br>  <li> Felipe Rodriguez</li>')
})
app.use(express.static('../../view'));
module.exports = app;