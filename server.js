const express = require("express");
const bodyParser = require("body-parser");
app=express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
// Static directory
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// requiring handlebars and setting 'main'.handlebars as primary
const exhbs = require("express-handlebars");
app.engine("handlebars", exhbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// Routes
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// taking out db.sequelize.sync({force:true})
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});