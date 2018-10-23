let db = require('../models')
// Routes for data
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the noneaten burgers
  app.get("/api/burgers", function(req, res) {
    
    db.Burger.findAll({
    }).then(result=>{
      let brgerObj={Burger:result};
      res.json(brgerObj)})
  });
  // updating devoured state with a put request
  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      name: req.body.name,
      devoured: req.body.devoured},
      {
      where:{
        id: req.body.id
      }
     }
     ).then(function(result){
       let brgerObj= {Burger:result}
       res.render('index', brgerObj)
     })
     .catch(function(err) {
       // Whenever a validation or flag fails, an error is thrown
       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
         res.json(err);
       });
   });
// all of the eaten ones! nom
  app.get("/api/burgers-done", function(req, res) {
    
    db.Burger.findAll({
      where: {
        devoured:true
      }
    }).then(result=>{
      brgerObj={Burger:result};
      res.render("index", brgerObj)})
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
  // make this link to button on the front-side in the future, then delete comment.
  app.delete("/api/burgersdel", function(req, res) {
  //  db.Burger.destroy({
  //    where: {
  //      id:req.params.id
  //    }
  //  }).then(result=>res.json(result))
  // });
  db.Burger.destroy({}).findAll({}).then(result=>res.json(result))
 });
}