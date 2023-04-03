// import libraries
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session');
const { flash } = require('express-flash-message');
const path = require('path')
const rfs = require('rotating-file-stream')
// express variable & routing
const app = express()
const port = 3000
const webRouter = require("./routes/web");

// Information using EJS & EJS-Layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layout/mainLayout')
app.use(express.static('public'))

app.use(express.json()) // for parsing application/json

// HTTP request logger middleware for node.js
// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'logs')
})
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

// support parsing of application/json type post data
app.use(bodyParser.json())
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))
// support method override with POST having ?_method=VALUE
app.use(methodOverride('_method'))
// support session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      // secure: true, // becareful set this option, check here: https://www.npmjs.com/package/express-session#cookiesecure. In local, if you set this to true, you won't receive flash as you are using `http` in local, but http is not secure
    },
}));
// apply express-flash-message middleware
app.use(flash({ sessionKeyName: 'flashMessage' }));

// the use() method is used to add middleware functions to the request handler chain
// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
// })

// use web router
app.use("/", webRouter);

// Run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})