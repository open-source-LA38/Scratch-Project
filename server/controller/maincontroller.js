/* eslint-disable prefer-destructuring */
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const maincontroller = {};
const db = require('../db/databaseIndex.js');

/* REQUEST/RESPONSE MIDDLEWARE */

//* CSS Gods one
// storeUrl - store URL in database, store default interval in database
// maincontroller.saveUrl = (req, res, next) => {
//   // receive Url from req.body, interval defaulted to 1 hour
//   // let status;
//   const userId = req.body.user_id;// recieved from state
//   // https://www.postgresql.org/docs/9.0/dml-insert.html
//   const updateUrlTable = 'INSERT INTO url (user_id,url) VALUES ($1, $2) RETURNING url_id';
//   db.query(updateUrlTable, [userId, req.body.url])
//     .then((saved) => {
//       res.locals.urlId = saved.rows.urlId;
//     })// MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
//     .catch((error) => next({
//       log:
//           'Express error handler caught error in maincontroller.saveURL',
//       status: 400,
//       message: { err: error },
//     }));
// };

//* Lucy's saveURL
maincontroller.saveUrl = (req, res, next) => {
  console.log('maincontroller saveURL req.body', req.body);
  const urlBody = req.body;
  const urlArray = Object.keys(urlBody);
  // pulled url out of object and then array
  const url = urlArray[0];
  res.locals.url = url;
  console.log('url', url);

  // receive Url from req.body, interval defaulted to 1 hour
  // let status;
  const userId = 42; // req.body.user_id; recieved from state
  // https://www.postgresql.org/docs/9.0/dml-insert.html
  const updateUrlTable = 'INSERT INTO url (user_id, url) VALUES ($1, $2) RETURNING url_id';
  db.query(updateUrlTable, [userId, `${url}`])
    .then((saved) => {
      // console.log('saved', saved)
      res.locals.db_url_id = saved.rows[0].url_id;
      console.log('dburlid', res.locals.db_url_id)
      return next();
    })// MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
    .catch((error) => next({
      log:
          'Express error handler caught error in maincontroller.saveURL',
      status: 400,
      message: { err: error },
    }));
  // return next()
};

maincontroller.pingUrl = (req, res, next) => {
  let check;
  if (!res.locals.url) check = req.body.url;
  else check = res.locals.url;
  fetch(check)// recieved from state
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      if (typeof response === 'object') {
        res.locals.url_id = req.body.url_id;
        res.locals.status = '420';
        console.log(res.locals.status);
        return next();
      }
      res.locals.status = '400';
      return next();
    })
    .catch((error) => next({
      log:
      'Express error handler caught error in maincontroller.pingUrl',
      status: 400,
      message: { err: error },
    }));
};

// //database will insert timestamp into status table when new statu is inserted
// const addStatusQuery = "INSERT INTO status (url_id, status) VALUES ()";
// //fetch- !) ping Url, 2)if ping returns 200 message- we know Url is valid, 3)store Url in database, 4)invoke scheduler, 5)send status code to client (res.locals)
// //https://blog.logrocket.com/axios-or-fetch-api/#:~:text=To%20send%20data%2C%20fetch(),set%20in%20the%20options%20object
// //invoke getstatus to ping url, receive status code

maincontroller.addStatus = (req, res, next) => {
  // console.log('JOOOOOON')
  if (res.locals.db_url_id) res.locals.url_id = res.locals.db_url_id;
  const time = Date.now();
  const urlId = res.locals.url_id;
  console.log('we are at addStatus', urlId);
  const status = res.locals.status;
  console.log(status);
  const updateStatusTable = 'INSERT INTO status (url_id,status,time) VALUES ($1, $2, $3)';

  db.query(updateStatusTable, [urlId, status, time])
    // .then((successpls) => successpls.json())
    .then(() => next())// MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
    .catch((error) => next({
      log:
        'Express error handler caught error in maincontroller.addStatus',
      status: 400,
      message: { err: error },
    }));
};

/* TASK SCHEDULER MIDDLEWARE */

maincontroller.startTasks = () => {
  return maincontroller.pingAll('test');
  const allUrls = 'SELECT url_id,url FROM url';

  db.query(allUrls)
    .then((urlCollection) => {
      this.pingAll(urlCollection.rows);
    })// MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
    .catch((error) => console.log('Error in Task Schduler query: ', error));
};

maincontroller.pingAll = (urlArr) => {
  return maincontroller.saveStatus(urlArr);
  for (let i = 0; i < UrlArr.length; i++) {
    fetch(urlArr[i.url])
      .then((data) => data.json())
      .then((response) => {
        urlArr[i.status] = response.status;
        this.saveStatus(urlArr);
      })
      .catch((error) => console.log('Error in Task Schduler query: ', error));
  }
};

maincontroller.saveStatus = (updatedUrlArr) => {
  return console.log(updatedUrlArr);
  for (let i = 0; i < updatedUrlArr.length; i++) {
    const time = Date.now();
    const urlId = updatedUrlArr[i.url_id];
    const status = updatedUrlArr[i.status];
    const updateStatusTable = 'INSERT INTO status (url_id,status,time) VALUES ($1, $2, $3) RETURNING';
    db.query(updateStatusTable, [urlId, status, time])
      .then(() => {
        console.log('Ping task completed: ', time);
      })
      .catch((error) => console.log('Error in Task Schduler query: ', error));
  }
};

/* Twilio express sms docs
https://www.twilio.com/docs/sms/tutorials/how-to-send-sms-messages-node-js
*/
// node-cron/scheduler to schedule tasks

/* Timestamp for psql
https://www.sqlservertutorial.net/sql-server-date-functions/sql-server-current_time-function/
*/

/* getstatus - to be used inside middleware and node-cron
input is URL or array of URLs to ping
pings URL, saves to database
output is received status code
saveToDb - include our query to save to database, parameter will be status returned from api ping
https://www.restapitutorial.com/httpstatuscodes.html
*/

/* 3) user adds in URL that they want to track
api= /addURL
req.body = will hold URL
res.status of 200 or error
default interval every hour
backend timer: [https://nodejs.org/en/docs/guides/timers-in-node/](https://nodejs.org/en/docs/guides/timers-in-node/)
twillio API for text messages */

// Users Table
// //username password phonenumber user_id
//   cam       hi        714722      1

// Send User_ID -> Client -> User_ID into State

// URL Table
// //URL_ID URL_Link     User_Id
//     1     google.com    1

// select * from users where username == passedInName AND password = encrypted version of passedInPass

// Register username: cam pw: hello -> 7yxf
// Saved in DB

// Login
// cam hello -> 7yxf, bcrypt adds salt register
// updateInterval - update interval in database
maincontroller.updateInterval = (req, res, next) => {
  next();
};

/* 6) - data pull[https://mdbootstrap.com/docs/react/advanced/charts/](https://mdbootstrap.com/docs/react/advanced/charts/)
get historical data from database , will be default time (we will test to determine later)
api = /historicaldata
req.body = will hold URL
res.locals = will send back 2 arrays
A)all the times URL was pinged
B)all the status codes */
// getData 5 -query the database for times and status code for url given in req.body, then save to res.locals and send back a res contiaing res.locals
maincontroller.getData = (req, res, next) => {
  next();
};

module.exports = maincontroller;
