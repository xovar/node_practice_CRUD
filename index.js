const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products_models.js');

const app = express();


app.use(express.json());

app.post('/api/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        console.log(product);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.get('/api/product', async(req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({massage: error.massage})
    }
})

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