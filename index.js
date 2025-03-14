const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products_models.js');

const app = express();


app.use(express.json());
/* to add product */
app.post('/api/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        console.log(product);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error.message);
    }
});
/* to get all products */
app.get('/api/product', async(req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({massage: error.massage})
    }
})

/* to get single product */

app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).lean();
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* to update product */

app.put('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* DELETE a single Product */

app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

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