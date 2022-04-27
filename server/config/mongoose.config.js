const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
    () => console.log('Database connected'));
