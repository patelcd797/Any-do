const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const users = require("../dbModules/user.tsx");

// register page
router.post("/register", (req, res) => {
  const userObject = req.body;
  users.findOne({ email: userObject.email }, async (err, User) => {
    if (err)
      return res.json({
        success: false,
        msg: "something went wrong. try later..",
      });
    if (User)
      return res.json({ success: false, msg: "email is already in use" });

    const user = new users({
      name: userObject.name,
      email: userObject.email,
      password: userObject.password,
      taskYouDone: 0,
      taskPending: 0,
    });
    await user.save((err, user) => {
      if (err)
        return res.json({
          success: false,
          msg: "something went wrong. try later...",
        });
      return res.json({ success: true, msg: "new user created" });
    });
  });
});

// login page

router.post("/login", (req, res) => {
  const userObject = req.body;
  users.findOne({ email: userObject.email }, (err, user) => {
    if (err)
      return res.json({
        success: false,
        type: 0,
        msg: "something went wrong. Try later",
      });
    if (user) {
      if (user.password === userObject.password)
        return res.json({ success: true, type: 0, msg: "successfully login" });
      else
        return res.json({
          success: false,
          type: 2,
          msg: "password not matched",
        });
    } else return res.json({ success: false, type: 1, msg: "user not exist" });
  });
});

// forgot password page

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ffreako617@gmail.com",
    pass: "Freako@1234",
  },
});

router.post("/forgotPassword", (req, res) => {
  const userObject = req.body;
  console.log(userObject);

  users.findOne({ email: userObject.email }, (err, user) => {
    if (err)
      return res.json({
        success: false,
        msg: "something went wrong. try later...",
      });
    if (user) {
      const mail = {
        from: "Anydo@gmail.com",
        to: userObject.email,
        subject: "Any do password",
        text:
          "password of " +
          req.body.email +
          " is" +
          user.password +
          ". have a good day",
      };
      transporter.sendMail(mail, (err, info) => {
        if (err)
          return res.json({
            success: false,
            msg: "something went wrong. try later...",
          });
        else return res.json({ success: true, msg: "mail sent" });
      });
    } else return res.json({ success: false, msg: "user not exist" });
  });
});

// sending user data
// post("http://localhost:8000/api/user/userData", { email: userEmail })
router.post("/userData", (req, res) => {
  const userObject = req.body;
  users.findOne({ email: userObject.email }, (err, User) => {
    if (err) return res.json({ success: false, user: null });
    return res.json({ success: true, user: User });
  });
  
});

//updating user data
//axios.post(`http://localhost:8000/api/user/updateUser`, state all attributes of user)
router.post("/updateUser", (req, res) => {
  const userObject = req.body;
  users.updateOne({ _id: userObject._id }, userObject, (err, info) => {
    if (err)
      return res.json({
        success: false,
        type: 0,
        msg: "something went wrong. try later",
      });
    return res.json({ success: true, msg: "Name successfully changed" });
  });
});

//updating user password
//axios.post(`http://localhost:8000/api/user/resetPassword?id=${state._id}`,{oPassword,nPassword,cPassword})
router.post("/resetPassword", (req, res) => {
  const userId = req.query.id;
  const password = req.body;
  users.findOne({ _id: userId }, (err, user) => {
    if (err)
      return res.json({
        success: false,
        type: 0,
        msg: "something went wrong. try later",
      });
    user.password = password.nPassword;
    users.updateOne({ _id: userId }, user, (err, info) => {
      if (err)
        return res.json({
          success: false,
          type: 0,
          msg: "something went wrong. try later",
        });
      return res.json({ success: true, msg: "password successfully reset" });
    });
  });
});

// deleting user
//axios.delete(`http://localhost:8000/api/user/delete?email=${userEmail}`)
router.delete("/delete", async (req, res) => {
  users.deleteOne({ email: req.query.email }, (err, info) => {
    if (err)
      return res.json({ success: false, msg: "something wrong happens" });
    return res.json({ success: true, msg: "deleted account" });
  });
});

module.exports = router;
