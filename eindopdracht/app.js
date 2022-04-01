const http = require('http');
const hostname = '127.0.0.1';
const port = 5500;
// let ejs = require('ejs');
// const bodyParser = require('body-parser');

const express = require('express')
const app = express()

// sets view engine as ejs
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views');

// Hierdoor kan ik CSS en JS bestanden aan de client side uitlezen
app.use(express.static(__dirname + '/public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {

  console.log(res)
  res.render('home', {
    pageTitle: 'Home'
  })
})

// respond with "hello world" when a GET request is made to the user page
app.get('/viewpoll', (req, res) => {
  res.render('viewpoll', {
    pageTitle: 'View Polls'
  })
})

// respond with "hello world" when a GET request is made to the admin page
app.get('/makepoll', (req, res) => {
  res.render('makepoll', {
    pageTitle: 'Make new Poll'
  })
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

