"use strict"

// import { getAllCards, findCard } from './data.js'; // import all exported items from data.js
import { Card } from "./models/Cards.js";
import express from 'express';

// import routes from './routes.js';

// const app_routes = routes(app); // passes ‘app’ instance to the routes module
const app = express();

app.set("port", process.env.PORT || 3000); // sets the port to 3000
app.use(express.static('./')); // allows direct navigation to static files
app.use(express.urlencoded()); //Parse URL-encoded bodies -- use the .query method for the request object
app.use(express.json()); //Used to parse JSON bodies

// set the view engine to ejs template engine
app.set("view engine", "ejs");

// send content of home.ejs from view folder to browser
app.get('/', (req,res) => {
    Card.find({}).lean()
  .then((cards) => {
    res.render('home', { cards });
  })
  .catch(err => next(err));
});
   
   // about ejs page
app.get('/about', (req,res) => {
    res.render('about');
});

//  card detail view route ----------------------------------------------------
app.get('/detail', (req,res,next) => {
    // db query can use request parameters
    Card.findOne({ cardName:req.query.name }).lean()
        .then((card) => {
            res.render('details', {card: card} );
        })
        .catch(err => next(err));
});


// app.get('/detail', (req,res) => {
//     res.type('text/html');
//     // console.log(findCard(req.query.name));
//     res.render('details', {card : findCard(req.query.name)}); // req.query returns js object from url detail?name=blah
// });

// app.get('/detail', (req,res) => {
//     res.type('text/html');
//     // console.log(req.query);
//     res.end("detail page " + req.query.name); // req.query returns js object from url detail?name=blah
// });

//  same function as get detail route above but different syntax
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