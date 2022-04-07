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
app.use(bodyParser.urlencoded({extended: true,}));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  //console.log(res)
  res.render("home", {
    pageTitle: "Home",
  });
});

// respond with view poll render on viewpoll route
app.get("/makepoll", (req, res) => {
  res.render("makepoll", {
    pageTitle: "Make A New Poll",
  });
});

// get form data and post to json file, then render viewpoll view
app.post("/makepoll", (req, res) => {
  fs.readFile("statham.json", "utf8", (err, data) => {
    let pollList = JSON.parse(data);
    let arr = {
      vraag: req.body.vraag,
      antwoordA: req.body.antwoordA,
      antwoordb: req.body.antwoordB,
    };
    pollList.push(arr);
    let pollSubmit = JSON.stringify(pollList, null, 2);
    fs.writeFile("statham.json", pollSubmit, "utf8", (cb) => {});
  });
  res.render("home", {
    pageTitle: "Poll questions",
  });
});

// respond with view poll render on viewpoll route
app.get("/viewpoll", (req, res) => {
  fs.readFile("statham.json", "utf8", (err, data) => {
    let pollList = JSON.parse(data);
    pollList.reverse();
    console.log(pollList)

    res.render("viewpoll", { 
      data: pollList,
      pageTitle: "View Polls",
    })
  })
 
});

//take poll answers and put results in json file, then render viewanswers
app.post("/viewanswers", (req, res) => {
  fs.readFile("pollanswers.json", "utf8", (err, data) => {
    let pollList = JSON.parse(data);
    let arr = {
      answer1: req.body.answer1,
      answer2: req.body.answer2,
    };
    pollList.push(arr);
    let pollAntwoorden = JSON.stringify(pollList, null, 2);
    fs.writeFile("pollanswers.json", pollAntwoorden, "utf8", (cb) => {});
  
    res.render("viewanswers", {
      pollData: pollAntwoorden,
      pageTitle: "Poll answers",

    });

  });

});




// listen to the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
