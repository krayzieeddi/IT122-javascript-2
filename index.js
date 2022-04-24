"use strict"

import { getAllCards, findCard, cards } from './data.js'; // import all exported items from data.js
import express from 'express';
// import routes from './routes.js';

// const app_routes = routes(app); // passes ‘app’ instance to the routes module
const app = express();

app.set("port", process.env.PORT || 3000); // sets the port to 3000
app.use(express.static('./')); // allows direct navigation to static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

// set the view engine to ejs template engine
app.set("view engine", "ejs");

// send content of home.ejs from view folder to browser
app.get('/', (req,res) => {
    res.render('home', {cards: (cards)}); // passes the home ejs and cards object as parameters 
});
   
   // about ejs page
app.get('/about', (req,res) => {
    res.render('about');
});

// find cards route ----------------------------------------------------
app.get('/detail', (req,res) => {
    res.type('text/html');
    // console.log(req.query);
    res.end("detail page " + req.query.name); // req.query returns js object with key refer to url
});

//  same function as get detail route different syntax
// app.get('/user(name)?', (req,res) => {
//     res.end( 'thing ' + req.query.name);
// });


   // define 404 handler --------------------------------
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

// starts up the server
app.listen(app.get('port'), () => {
    console.log('Express started');    
});