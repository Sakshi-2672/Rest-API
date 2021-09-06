const express = require('express');
const routes = require('./routes.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.get('/', (req,res) => {
    res.send('Hello world from express');
});

app.use(bodyParser.urlencoded({
    extended: true
 }));

app.use(bodyParser.json());

app.use('/api', routes);

const url = process.env.DB_URL;

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        console.log("Connected to the database")

        app.use('/api',routes);
        app.listen(port, () =>{
            console.log('Server Started:'+ port);
        })
    }
)

