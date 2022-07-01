var dbConn = require("../config/db.config");

const User = function (user) {
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.email = user.email;
  this.phone = user.phone;
  this.organization = user.organization;
  this.designation = user.designation;
  this.salary = user.salary;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// create new user.....
User.createUser = (userReqData, result) => {
  dbConn.query("INSERT INTO user SET ? ", userReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("user created successfully");
      result(null, res);
    }
  });
};

// get all User....
User.getAllUser = (result) => {
  dbConn.query("SELECT * FROM user WHERE is_deleted=0", (err, res) => {
    if (err) {
      console.log("Error while fetching user", err);
      result(null, err);
    } else {
      console.log("user fetched successfully");
      result(null, res);
    }
  });
};


module.exports = User;
