const express = require('express');
const mongoose = require('mongoose');
const app = express();
const products_routes = require('./routes/Products.js');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(3000, () => console.log('Server is running on port 3000')))
    .catch((err) => console.error('MongoDB Connection Error:', err.message));

app.use(express.json());
app.use('/api/products', products_routes);
