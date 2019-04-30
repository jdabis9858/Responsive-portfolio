var express = require("express");
var path = require("path")

var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "/../Responsive-Portfolio/portfolio.html"));
    // app.use(express.static(path.join(__dirname, "public")));
    // app.use(express.static(path.join(__dirname, "/../Responsive-Portfolio/style-p.css")));
  });
// app.use(express.static(path.join(_dirname, "/../Responsive-Portfolio/assets/pcss/style-p.css")));
app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "/../Responsive-Portfolio/contact.html"));
});

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "/../Responsive-Portfolio/index-p.html"));
});




app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});