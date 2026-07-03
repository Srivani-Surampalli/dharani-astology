// routes/panchangRoutes.js

const express = require("express");

const {
  getPanchang,
} = require("../controllers/panchangController");

const router = express.Router();

router.get("/today", getPanchang);

module.exports = router;