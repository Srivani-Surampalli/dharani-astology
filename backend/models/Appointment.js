const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    fullName: String,

    email: String,

    phone: String,

    service: String,

    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Appointment",
  appointmentSchema
);