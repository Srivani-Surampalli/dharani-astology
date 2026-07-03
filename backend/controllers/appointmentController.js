const Appointment = require("../models/Appointment");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.createAppointment = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      service,
      appointmentDate,
      appointmentTime,
      message,
    } = req.body;

    // Date Validation
    const selectedDate = new Date(
      appointmentDate
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const maxDate = new Date();
    maxDate.setMonth(
      maxDate.getMonth() + 6
    );

    if (selectedDate < today) {
      return res.status(400).json({
        success: false,
        message:
          "Appointment date cannot be in the past.",
      });
    }

    if (selectedDate > maxDate) {
      return res.status(400).json({
        success: false,
        message:
          "Appointments can only be booked within 6 months.",
      });
    }

    const appointment =
      await Appointment.create({
        fullName,
        email,
        phone,
        service,
        appointmentDate,
        appointmentTime,
        message,
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Appointment Booking",
      html: `
        <h2>New Appointment Booking</h2>

        <p><strong>Name:</strong> ${fullName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Service:</strong> ${service}</p>

        <p><strong>Date:</strong> ${appointmentDate}</p>

        <p><strong>Time:</strong> ${appointmentTime}</p>

        ${
          message
            ? `<p><strong>Message:</strong> ${message}</p>`
            : ""
        }
      `,
    });

    res.status(201).json({
      success: true,
      message:
        "Appointment booked successfully.",
      appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Internal server error.",
    });
  }
};