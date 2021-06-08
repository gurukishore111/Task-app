const express = require('express');
const { UserData } = require('../model/userModel');
const router = express.Router();

//Get Post
router.get('/', async (req, res) => {
  const user = await UserData.find({});
  if (!user) {
    return res
      .status(500)
      .json({ message: 'No User in system', success: false });
  }
  res.json(user);
});
//Add Post
router.post('/', async (req, res) => {
  let userData = new UserData({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
  });
  await userData.save((err, result) => {
    if (err) {
      return res.status(400).json({ message: err, success: false });
    }
    return res.status(200).json(result);
  });
});

module.exports = router;
