var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      //console.log(result);
    });
  },
  insertOne: function(tableInput, column, value, cb) {
    // value = "'" + value[0] + "'" + ", " + value[1];
    var queryString = `INSERT INTO ?? (??) VALUES ('${value[0]}', ${
      value[1]
    } )`;

    // console.log(queryString);
    // column = column[0] + ", " + column[1];

    // console.log(column);
    // console.log(value);
    connection.query(queryString, [tableInput, column, value], function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      cb(result);
      //console.log(result);
    });
  },
  updateOne: function(tableInput, setToUpdate, whereToUpdate, value, cb) {
    var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
    connection.query(
      queryString,
      [tableInput, setToUpdate, whereToUpdate],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
        //console.log(result);
      }
    );
  }
};

module.exports = orm;
