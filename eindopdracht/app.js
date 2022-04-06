const http = require('http');
const hostname = '127.0.0.1';
const port = 5500;
 // let ejs = require('ejs');
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express')
const app = express()


// sets view engine as ejs
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views');

// Hierdoor kan ik CSS en JS bestanden aan de client side uitlezen
app.use(express.static(__dirname + '/public'));

// Gebruik body-parser om te lezen wat er in POST requests van de form staat
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {

  //console.log(res)
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

//let pollAntwoorden;

// get form data and post
app.post('/makepoll', (req, res) => {
fs.readFile('statham.json', 'utf8', (err, data) => {
  let pollList = JSON.parse(data)
  let arr = {
    "vraag": req.body.vraag,
    "antwoordA": req.body.antwoordA,
    "antwoordb": req.body.antwoordB
  }
  pollList.push(arr)
  let pollAntwoorden = JSON.stringify(pollList, null, 2);
  fs.writeFile('statham.json', pollAntwoorden, 'utf8', cb => {});
})

//fs.writeFile('statham.json', pollAntwoorden, 'utf8', cb  => {
//   jsonData.push(pollAntwoorden);
// 	});



res.render('viewpoll', {
    pageTitle: 'Poll answers'
  })
})


//console.log(data);
  


//render questions on take poll page
app.post('/viewpoll', (req, res) => {

  fs.readFile('statham.json', (data) => {
      var jsonData = JSON.parse(data);
      console.log(jsonData);
  });
  
})

// respond with "hello world" when a GET request is made to the admin page
app.get('/makepoll', (req, res) => {
  res.render('makepoll', {
    pageTitle: 'Make new Poll'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

