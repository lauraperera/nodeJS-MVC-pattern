//require express
const express = require("express")
//instance of a router
const router = express.Router()

const {GetAllUsers, GetUser, DeleteUser} = require("../controllers/UserController");

router.get("/all", GetAllUsers);
router.get("/byId/:id", GetUser);
router.delete("/:id", DeleteUser);

//exports the router
module.exports = router;


