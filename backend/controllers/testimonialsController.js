// controllers/testimonialController.js

const Testimonial =
  require('../models/Testimonial');

exports.createTestimonial =
  async (req, res) => {
    try {
      const testimonial =
        await Testimonial.create(
          req.body
        );

      res.status(201).json({
        success: true,
        testimonial,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

exports.getTestimonials =
  async (req, res) => {
    try {
      const testimonials =
        await Testimonial.find({
          approved: false,
        }).sort({
          createdAt: -1,
        });

      res.json({
        success: true,
        testimonials,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };