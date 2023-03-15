const express = require("express");
const router = express.Router();

// controllers
const {index,stored, welcome} = require("../controllers/indexController");
const indexValidator = require("../middlewares/indexValidator");

// index
router.get("/", index)
router.post("/",indexValidator ,stored)

// welcome
router.get("/welcome", welcome)

module.exports = router