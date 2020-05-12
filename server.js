var express = require("express");
var htmlRoutes = require("./routes/html-routes.js");
var apiRoutes = require("./routes/api-routes");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  