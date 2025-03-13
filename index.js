const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Hello, it's working");
});

app.get('/', (req, res) => {
    res.send('The Api Is Working Well Buddy ;-)');
});