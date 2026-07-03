require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const appointmentRoutes = require("./routes/appointmentRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes")

const panchangRoutes = require(
  "./routes/panchangRoutes"
);

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log('test')
  res.send("Backend Running Successfully");
});

app.use("/api/appointments", appointmentRoutes);

app.use("/api/testimonial", testimonialRoutes);

app.use(
  "/api/panchang",
  panchangRoutes
);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});     