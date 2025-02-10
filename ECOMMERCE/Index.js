const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const categoryRoutes = require('./Routes/categoryRoutes')
const order = require('./Routes/order')
const productRoutes = require('./Routes/productRoutes') 
const cartRoutes = require('./Routes/cartRoutes')
const payment = require('./Routes/payment')
const review = require('./Routes/review')
const promotion = require('./Routes/promotion')
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const atlasUrl = "mongodb+srv://testuser:TestUser123@cluster0.j5hpx.mongodb.net/ecommerce_db";
// const atlasUrl = "mongodb://localhost:27017/ecommerce_db"
mongoose.connect(atlasUrl).then(() => {
    console.log("Connected to DB Server");

    const app = express();

    app.use(bodyParser.json())
    //use routes
    app.use('/api/users', userRoutes);
    app.use('/api/categories',categoryRoutes)
    app.use('/api/product',productRoutes)
    app.use('/api/cart',cartRoutes)
    app.use('/api/order',order)
    app.use('/api/payment',payment)
    app.use('/api/review',review)
    app.use('/api/promotion',promotion)


    app.listen(3000, () => {
        console.log("Web server started @ 3000");
    });

}).catch((error) => {
    console.log(error)
});