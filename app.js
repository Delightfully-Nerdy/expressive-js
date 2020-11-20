// Imports

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;


// static files 
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));

// Set Views without express layout
// app.set('views', './views');

// Set templating engine 
app.use(expressLayouts);
app.set('layout', './layouts/full-width');
app.set('view engine', 'ejs');

// Navigation 

app.get('', (req, res) => {
    res.render('index', { title: 'Home page' } );
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' , layout: './layouts/sidebar'});
});

// Listen on port 3000 
app.listen(port, () => console.info(`Listening on port ${port}`));