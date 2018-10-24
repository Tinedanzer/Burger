let db = require('../models')
// Routes for data
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the noneaten burgers, to see it  as a json(for developer)
  app.get("/api/burgers", function(req, res) {
    
    db.Burger.findAll({
    }).then(result=>{
      let brgerObj={Burger:result};
      res.json(brgerObj)})
  });
  // updating devoured state with a put request
  // using req.params for finding id. console.log() was a great help here
  app.put("/api/burgers/:id", function(req, res) {
    console.log(req.params);
    db.Burger.update({
      devoured: req.body.devoured},
      {
      where:{
        id: req.params.id
      }
     }
     ).then(function(result){
       let brgerObj= {Burger:result}
       res.render("index", brgerObj)
     })
     .catch(function(err) {
       // Whenever a validation or flag fails, an error is thrown
       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
         res.json(err);
       });
   });
// all of the eaten ones! nom(dont need this code due to html-routes.js and handlebars)
  // app.get("/api/burgers-done", function(req, res) {
    
  //   db.Burger.findAll({
  //     where: {
  //       devoured:true
  //     }
  //   }).then(result=>{
  //     brgerObj={Burger:result};
  //     res.render("index", brgerObj)})
  // });
  // POST route for saving a new burger. 
  app.post("/api/create", function(req, res) {
   let Aroo1=req.body;
    db.Burger.create({
      name: Aroo1.name,
      devoured: Aroo1.devoured
    })
    .then(result=>res.render(result))
    .catch(function(err) {res.json(err)
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      });
  });

  // DELETE route for deleting burgers. We can access the ID of the burger to delete in
  // make this link to button on the front-side in the future, then delete comment.
  app.delete("/api/burgersdel", function(req, res) {
   console.log(req.body)
   db.Burger.destroy({
     where: {
       
     }
   }).then(result=>res.json(result))
  });
  // db.Burger.destroy({}).findAll({}).then(result=>res.json(result))});
}