// Import the ORM to create functions that will interact with the database.
var orm = require("./../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(column, value, cb) {
    orm.insertOne("burgers", column, value, function(res) {
      cb(res);
    });
  },
  updateOne: function(setToUpdate, whereToUpdate, cb) {
    orm.updateOne("burgers", setToUpdate, whereToUpdate, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;

/*
$(function() {
  $(".add-burger").on("submit", function(event) {
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
});
*/
