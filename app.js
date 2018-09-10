const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE,HEAD");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.url.substr(-1) === '/') {
        return res.send({
            message: "Welcome to Mestry!"
        });
    }
    next();
});
app.use(bodyparser.json())
app.use('/v1', routes);

app.listen(8000, () => {
    console.log(`expressjs app started on port 8000`);
});

module.exports = app;


/* {
            "firstName": "hello",
            "lastName": "1236",
            "UID": "123",
            "PID": "czppp",
            "owner": "Galaxy",
            "location": "Bangalore",
            "state": "KA"
        }
         */