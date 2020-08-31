//  SERVER (implemented in node.js)

//  The server will have 2 main routes:
//  -> POST create customer (should return status 200 OK if everything fine and error 404 otherwise)
//  -> GET all country values

// use express.js
const express = require('express');
const app = express();

//  use cors
const cors = require('cors');
app.use(cors());

//  use body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


//  GET route: /country-values
app.get('/country-values', (req, res) => {

    const flag_urls = "https://www.countryflags.io/";
    const flag_end = "/flat/64.png"

    const values = [
        {
            key: 'FR',
            name: "France",
            code: '+33',
            currency: '€ (EUR)',
            flag: flag_urls + "fr" + flag_end
        },
        {
            key: 'CN',
            name: "China",
            code: '+265',
            currency: '¥ (CNY)',
            flag: flag_urls + "cn" + flag_end
        },
        {
            key: "GB",
            name: "United Kingdom",
            code: '+44',
            currency: '£ (GBP)',
            flag: flag_urls + "gb"+ flag_end
        },
        {
            key: 'US',
            name: "USA",
            code: '+1',
            currency: '$ (USD)',
            flag: flag_urls + "us" + flag_end
        },
        {
            key: "IL",
            name: "Israel",
            code: '+972',
            currency: '₪ (NIS)',
            flag: flag_urls + "il" + flag_end
        }
    ];

    res.send(values);
});

//  POST route: /subscribe
app.post('/subscribe', (req, res) => {
    var data = req.body;
    console.log(data);
    res.send({ status: 200, msg: "OK" });
})


const PORT = 4000;
app.listen(PORT, () => console.log('Server is running and listening on port ' + PORT));