const express = require("express");
const router = express.Router();

// controllers
const {index,stored} = require("../controllers/indexController");
const indexValidator = require("../middlewares/indexValidator");


router.get("/", index)
router.post("/",indexValidator ,stored)

module.exports = router