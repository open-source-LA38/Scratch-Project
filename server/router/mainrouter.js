const express = require('express');
const maincontroller = require('../controller/maincontroller');
const router = express.Router();


/*3) user adds in URL that they want to track
api= /addURL
req.body = will hold URL
res.status of 200 or error
default interval every hour 
backend timer: [https://nodejs.org/en/docs/guides/timers-in-node/](https://nodejs.org/en/docs/guides/timers-in-node/)
twillio API for text messages*/

/*4) api= /interval
time will be req.body*/

/*5) based on user clicking on button in front end, will check current status code
api= /checknow - will be invoked on an interval or also based on a button click
req.body = will hold the URL 
res.locals = will hold the "URL status"*/

/*6) - data pull[https://mdbootstrap.com/docs/react/advanced/charts/](https://mdbootstrap.com/docs/react/advanced/charts/)
get historical data from database , will be default time (we will test to determine later)
api = /historicaldata
req.body = will hold URL
res.locals = will send back 2 arrays
A)all the times URL was pinged
B)all the status codes */


module.exports = router;