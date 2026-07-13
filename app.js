const express = require('express');
const app = express();

// Real Web Route
app.get('/', (req, res) => {
    res.status(200).send("Welcome to Daraz Clone - Enterprise Edition");
});

module.exports = app;