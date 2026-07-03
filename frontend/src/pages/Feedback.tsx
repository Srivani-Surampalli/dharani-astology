import { useState } from "react";
import { createFeedback } from "../services/testimonialService"

export default function Feedback() {
  const [formData, setFormData] =
    useState({
      name: "",
      location: "",
      rating: 5,
      feedback: "",
      service:"",
    });

  const [success, setSuccess] =
    useState("");

  const handleChange = (
    e: any
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    await createFeedback(
      formData
    );

    setSuccess(
      "Thank you for your feedback."
    );

    setFormData({
      name: "",
      location: "",
      rating: 5,
      feedback: "",
      service: "",
    });
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">

        <h1 className="mb-10 text-center text-4xl font-bold">
          Share Your Experience
        </h1>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mb-4 w-full rounded border p-3"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="mb-4 w-full rounded border p-3"
          />

<select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mb-4 w-full rounded border p-3"
            >
              <option value="">
                Select Service
              </option>

              <option value="Life Chart & Kundali">
                Life Chart & Kundali
              </option>

              <option value="Career Astrology">
                Career Astrology
              </option>

              <option value="Business Astrology">
                Business Astrology
              </option>

              <option value="Marriage Compatibility">
                Marriage Compatibility
              </option>

              <option value="Marriage Problems">
                Marriage Problems
              </option>

              <option value="Kids Problems">
                Kids Problems
              </option>
            </select>

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="mb-4 w-full rounded border p-3"
          >
            <option value="5">★★★★★</option>
            <option value="4">★★★★</option>
            <option value="3">★★★</option>
            <option value="2">★★</option>
            <option value="1">★</option>
          </select>

          <textarea
            rows={5}
            name="feedback"
            placeholder="Write your feedback..."
            value={formData.feedback}
            onChange={handleChange}
            required
            className="mb-4 w-full rounded border p-3"
          />

          <button
            className="rounded-full bg-green-700 px-8 py-3 text-white"
          >
            Submit Feedback
          </button>

        </form>

        {success && (
          <p className="mt-4 text-green-700">
            {success}
          </p>
        )}

      </div>
    </section>
  );
} 