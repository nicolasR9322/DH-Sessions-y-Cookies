const express = require("express");
const router = express.Router();

// controllers
const {index,stored, welcome,login, destroy} = require("../controllers/indexController");
const indexValidator = require("../middlewares/indexValidator");

// index
router.get("/", index)
router.post("/",indexValidator ,stored)

// welcome
router.get("/welcome", welcome)

// login
router.get("/login",login);

// cookie
router.post("/destroy", destroy)
module.exports = router