require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const connectDB = require('./server/config/db');

const app = express(); // This creates an express application
//The express app also needs to have a port 
const PORT = 5000 || process.env.PORT; //To publish the project online to a server , you might have to use their default port number

// Connect to DB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) }
}));

app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main'); //Setting default layout
app.set('view engine', 'ejs'); //Setting view engine

//Set up basic route
app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));

//Listen to port number
app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);  //This logs a message when the server is running
});
