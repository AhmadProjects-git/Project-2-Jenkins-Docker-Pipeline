const express = require('express');
const app = express();
const PORT = 3000;

// Main Endpoint
app.get('/', (req, res) => {
    res.status(200).send("Welcome to Daraz Clone - Enterprise Edition");
});

// ⚠️ Zaroori Command: Jo server ko background mein continuous chalati rakhegi
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;