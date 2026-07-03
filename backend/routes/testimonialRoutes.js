const express = require("express");

const {
  createTestimonial,
  getTestimonials,
} = require("../controllers/testimonialsController");

const router = express.Router();

router.post("/", createTestimonial);

router.get("/", getTestimonials);

module.exports = router;