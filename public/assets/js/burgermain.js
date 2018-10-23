$(document).ready(function() {
    $(".devoured").on("click", function(event) {
     let id = $(this).data("id");
      console.log("this is id:", id)
  
      let newState = {
        devoured: true
      };
      // Send the PUT request to update data at targetid
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(function() {
        // Reload the page to get the updated list after the ajax request comes back
        location.reload();
      });
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        name: $("#booger").val().trim(),
        devoured: false
      };
      console.log("new burger", newBurger);
      // Send the POST request.
      $.ajax("/api/create", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("created new burger!");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });