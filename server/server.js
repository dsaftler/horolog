const express = require("express");
const routes = require("./routes");
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const FileStoreOptions = {};
// const cookieParser = require('cookie-parser');
// const redis = require("redis") 
// const client = redis.createClient();
// client.on("error", function (err) {
//   console.log("Error " + err);
// });

const bodyParser = require('body-parser');
const path = require("path"); 
const PORT = process.env.PORT || 3001;
const app = express();
let db = require('./models');
const Sequelize = require("sequelize");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
let syncOptions = { force: false };
if (process.env.NOD_ENV === 'test') {
  syncOptions.force = true;
}
db.sequelize.sync( {force: false }).then(function() {
  app.listen(PORT, function() { 
    console.log(`Listening on port ${PORT}`);
  });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// const Users = require('./routes/Users');
// app.use('/users', Users);
app.use(session ({
  store: new FileStore(FileStoreOptions),
  secret: 'onomatopoeia',
  resave: false,
  saveUninitialized: false,  
  path: './sessions'
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Express will handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static('public'));


app.use(routes);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
