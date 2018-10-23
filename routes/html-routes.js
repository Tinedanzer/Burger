// var path = require("path");
let db = require('../models');

module.exports = function(app) {

// // rendering index while using main.handlebars; this is understood due to our server file calling Main.js
// // as the primary building block for express handlebars.
app.get("/", function(req, res) {
    db.Burger.findAll({
        // where: {
        //   devoured:false
        // }
      }).then(result=>{
        brgerObj={Burger:result}
        res.render("index", brgerObj)})
    });

}