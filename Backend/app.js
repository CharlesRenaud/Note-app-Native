// MONGODB connection : mongodb+srv://Vilpex:<password>@cluster0.cepds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const stuffRoutes = require("./routes/stuff")
const userRoutes = require('./routes/user');
const app = express();
const path = require('path');

app.use(express.json());

mongoose.connect('mongodb+srv://Vilpex:Rgnthygtyluvir157$@cluster0.cepds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connect to DB")
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json())  

app.use('/api/stuff', stuffRoutes)  
app.use('/api/auth', userRoutes);

  
module.exports = app;


