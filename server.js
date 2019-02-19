var express = require("express");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
