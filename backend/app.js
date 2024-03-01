const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const oracledb = require('oracledb');

const app = express();

// Oracle Database connection configuration
const dbConfig = {
  user: 'your_username',
  password: 'your_password',
  connectString: 'your_connection_string',
};

oracledb.createPool(dbConfig);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add your routes and other middleware here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
