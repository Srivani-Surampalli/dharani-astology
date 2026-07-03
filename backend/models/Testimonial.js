// models/Testimonial.js

const mongoose = require("mongoose");

const testimonialSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      location: String,

      rating: {
        type: Number,
        required: true,
      },

      feedback: {
        type: String,
        required: true,
      },

      service: {
        type: String,
        required: true,
      },

      approved: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Testimonial",
    testimonialSchema
  );