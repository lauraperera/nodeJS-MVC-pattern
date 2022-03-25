//require express
const express = require("express")
//instance of a router
const router = express.Router()

router.get("/", controller.get)

//exports the router
module.exports = router;


