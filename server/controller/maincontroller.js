
const path = require("path");
const fs = require("fs");
const maincontroller = {};




/*3) user adds in URL that they want to track
api= /addURL
req.body = will hold URL
res.status of 200 or error
default interval every hour 
backend timer: [https://nodejs.org/en/docs/guides/timers-in-node/](https://nodejs.org/en/docs/guides/timers-in-node/)
twillio API for text messages*/

//post request
//storeUrl - store URL in database, store default interval in database
//pingUrlInterval - A- retrieve URL and interval from database, B-set timer to ping URL, C-send message to twilio if status is not 200, D- save status code and time in database
//send to client success message so client can render URL component




/*6) - data pull[https://mdbootstrap.com/docs/react/advanced/charts/](https://mdbootstrap.com/docs/react/advanced/charts/)
get historical data from database , will be default time (we will test to determine later)
api = /historicaldata
req.body = will hold URL
res.locals = will send back 2 arrays
A)all the times URL was pinged
B)all the status codes */
//getData 5 -query the database for times and status code for url given in req.body, then save to res.locals and send back a res contiaing res.locals


module.exports = maincontroller;