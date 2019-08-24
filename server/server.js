const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session); 
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const routes = require('./routes');
let db = require('./models');
const Sequelize = require('sequelize');
const sequelize = require('sequelize');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

let syncOptions = { force: false };
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}
db.sequelize.sync( {force: false }).then(function() {
  app.listen(PORT, function() { 
    console.log(`Listening on port ${PORT}`);
  });
});
const env = require('dotenv').config();
const path = require('path'); 
const config = require('./config/config.json')[env];
const PORT = process.env.PORT || 3001;
const app = express();


app.use(session ({
  genid: (req) => {
    return uuid()},
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user || null
next();
})
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Express will handle data parsing
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('public'));
app.use(routes);
app.get("*", function(req, res) {
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


function checkAuth(req, res, next) {
  if (req.user) next();//Forward the request so it can be handled by your router
  else res.send(403);//send access denied
}
app.all('*', checkAuth);
