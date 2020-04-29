const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const pokemonApi = require('./routes/pokemon-api');

const app = express();



// to handle JSON payloads
app.use(bodyParser.json());

// Routes
app.use('/api', pokemonApi);

// Example for redirecting
app.get("/old", (req, res) =>{
    res.redirect(301, "/")
});


app.use(express.static('public'));

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app