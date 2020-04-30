const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require("express-session");
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');

const Users = require('./db/users');
const authApi = require('./routes/auth-api');
const pokemonApi = require('./routes/pokemon-list-api');
const collectionApi = require('./routes/pokemon-collection-api')

const app = express();

// code extended from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-08/src/server/app.js

// to handle JSON payloads
app.use(bodyParser.json());


// Example for redirecting
app.get("/old", (req, res) =>{
    res.redirect(301, "/")
});

app.use(session({
    secret: 'a secret used to encrypt the session cookies',
    resave: false,
    saveUninitialized: false
}));

passport.use(new LocalStrategy(
    {
        usernameField: 'userId',
        passwordField: 'password'
    },
    function (userId, password, done) {

        const ok = Users.verifyUser(userId, password);

        if (!ok) {
            return done(null, false, {message: 'Invalid username/password'});
        }

        const user = Users.getUser(userId);
        return done(null, user);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {

    const user = Users.getUser(id);

    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
});

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', authApi);
app.use('/api', pokemonApi);
app.use('/api', collectionApi);


app.use(express.static('public'));

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = {app};