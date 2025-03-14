const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products_models.js');
const productRoutes = require('./routes/products.routes.js');

const app = express();

app.use('/api/product', productRoutes);


app.use(express.json());


app.get('/', (_, res) => {
    res.send('The Api Is Working Well Buddy ;-)');
});

mongoose.connect('mongodb+srv://admin:admin@crud.omfmm.mongodb.net/?retryWrites=true&w=majority&appName=CRUD')
    .then(() => {
        console.log("Connected To The Database Successfully");
        app.listen(3000, () => {
            console.log("Hello, it's working");
        });
    })
    .catch((err) => {
        console.log("Something went wrong", err);
    });