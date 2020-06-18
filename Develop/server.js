// add required modules
const express = require("express");
const path = require("path");
const fs = require("fs");
//const htmlRoutes = require("./routes/htmlroutes");
//const apiRoutes = require("./routes/apiroutes");

// Create server
const app = express();
const PORT = process.env.PORT || 3000;

// Read URL or JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use("/api", apiRoutes);
//app.use("/", htmlRoutes);

// Include js files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Use public folder
app.use(express.static("public"));

// Add listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});