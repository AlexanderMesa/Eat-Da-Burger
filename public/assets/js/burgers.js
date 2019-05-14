$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger")
        .val()
        .trim(),
      devoured: false
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created a new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".devour").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    // Send the POST request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: true }
    }).then(function() {
      console.log("Devoured the burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".digest").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    $.ajax("/api/burgers/digest/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("Digested the burger");
      location.reload();
    });
  });
});
