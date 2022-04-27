const express = require('express');
const app = express();


//importing routes
const authRoute = require('./routes/authentification');
const productRoute = require('./routes/addProduct');

//connect to DB
require("./config/mongoose.config");

//middleware
app.use(express.json());

//route middleware
app.use('/api/user', authRoute);
app.use('/api/product', productRoute);

//start server
app.listen(8000, () => console.log('The server has started'));
