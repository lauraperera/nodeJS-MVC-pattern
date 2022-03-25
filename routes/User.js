//require express
const express = require("express")
//instance of a router
const router = express.Router()
//import the controller
const controller = require("../controllers/UserController");

router.get("/", controller.get)

//exports the router
module.exports = router;


