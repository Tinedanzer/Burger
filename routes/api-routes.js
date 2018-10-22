let db = require('../models')
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    
    db.Burger.findAll({
    }).then(result=>res.json(result))
  });

  // POST route for saving a new burger. 
  app.post("/api/create", function(req, res) {
   let Aroo1=req.body;
    db.Burger.create({
      name: Aroo1.name,
      devoured: Aroo1.devoured
    })
    .then(result=>res.json(result))
    .catch(function(err) {res.json(err)
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      });
  });

  // DELETE route for deleting burgers. We can access the ID of the burger to delete in
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
   db.Burger.destroy({
     where: {
       id:req.params.id
     }
   }).then(result=>res.json(result))
  });
}