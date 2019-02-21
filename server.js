var express = require("express");



var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var friends = require("./data/friends.js");

var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

apiRoutes(app);
htmlRoutes(app);












// Basic route that sends the user first to the AJAX Page
// app.get("/", function (req, res) {
//     // res.send("Welcome to the Star Wars Page!")
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// });



// Displays all characters
// app.get("/api/friends", function (req, res) {

//     return res.json(friends);


  //**  
    // var content;
    // First I want to read the file
    // fs.readFile('.friends.js', function read(err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //     return res.json(friends);
    // });

    // function processFile() {
    //     console.log(content);
    // }


    // return res.json(friends);
    
// });

// Basic route that sends the user first to the AJAX Page
// app.get("/survey", function (req, res) {
//     // res.send("Welcome to the Star Wars Page!")
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
