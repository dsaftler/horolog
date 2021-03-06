let passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../../models/user");

passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    
  { usernameField: 'email' },
  function (email, password, done) {
      // When a user tries to sign in this code runs
      db.users.findOne({
        where: {
          email: email
        }

      }).then(function (err,dbUser) {
        if (err) {return done(err);}
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        console.log(dbUser)
        return done(null, dbUser);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  console.log('session user is ID' + req.session.passport.user)
  cb(null, user.id);

});

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });
passport.deserializeUser(function (user, cb) {
  // eslint-disable-next-line no-unused-vars
  db.User.find(user.id).then(function (data) {
    if (user) {
      cb(null, user);
    } else {
      cb(user.errors, null);
    }
  });
});
// Exporting our configured passport
module.exports = passport;
