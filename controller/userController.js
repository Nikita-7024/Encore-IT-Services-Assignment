const userModel = require("../model/userModel");

// create new User....
const createNewUser = (req, res) => {
  const userReqData = new userModel(req.body);
  console.log("userReqData", userReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    userModel.createUser(userReqData, (err, user) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "User Created Successfully",
        data: user.insertId,
      });
    });
  }
};

// get all user list....
const getUserList = (req, res) => {
  //console.log('here all user list');
  userModel.getAllUser((err, user) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("User", user);
    res.send(user);
  });
};


module.exports.createNewUser = createNewUser;
module.exports.getUserList = getUserList;