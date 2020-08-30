//  SERVER (implemented in node.js)

//  The server will have 2 main routes:
//  -> POST create customer (should return status 200 OK if everything fine and error 404 otherwise)
//  -> GET all country values

// use express.js
const express = require('express');
const app = express();

//  use body parser
const bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


//  GET route: /country-values
app.get('/country-values', (req, res)=> {

    const values= {
        'FR': {
            name: "France",
            code: '+33',
            currency: 'EUR',
            flag: ''
        },
        'UK': {
            name: "United Kingdom",
            code: '+44',
            currency: 'GBP',
            flag: ''
        },
        'USA': {
            name: "USA",
            code: '+1',
            currency: 'USD',
            flag: ''
        }
    };
    
    res.send(values);
});

//  POST route: /subscribe
app.post('/subscribe', (req, res)=> {
    var data = req.query;
    console.log(data);
    res.send({status: 200, msg: "OK"});
})


const PORT = 4000;
app.listen(PORT, () => console.log('Server is running and listening on port ' + PORT));