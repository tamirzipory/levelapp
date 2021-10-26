const LocalStrategy = require('passport-local').Strategy; //פספורט משתמש בשיטות לאימות הסיסמא ולוקלסטרטגי זו שיטה לצורך אימות לפי שם משתמש ויסמא
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      console.log('verifying user', email, password)
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' }); //מסיימת את תהליך האימות בכישלון  עם הודעה מתאימה ולא נותנת להתחבר. "לא נכון" מציין את כישלון האימות
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    console.log('serielizing user')
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserielizing user')

    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};