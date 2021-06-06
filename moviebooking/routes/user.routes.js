const auth = require("../middleware/auth");

module.exports = (app) => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();

  router.post("/login", users.login);

  router.post("/signup", users.signUp);

  router.post("/logout", auth, users.logout);

  app.use("/api", router);
};

/*
    Signup
    URL -> http://localhost:3000/api/sign-up
    body -> {
      "email" : "amit@somemail.com",
      "password" : "amit123"
}

    Login 
    URL -> http://localhost:3000/api/login
    body -> {
      "email" : "amit@somemail.com",
      "password" : "amit123"
 }

    Logout
    URL -> http://localhost:3000/api/logout
    body -> {
      "id": "60699113a9d6f338bc1496cb" //confusion here
}
  */
