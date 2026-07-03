import { useState } from "react";
import {
  createAppointment,
} from "../services/appointmentService";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  appointmentDate: "",
  appointmentTime: "",
  message: "",
};

export default function BookAppointment() {
  const [formData, setFormData] =
    useState(initialState);

  const [loading, setLoading] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const validateAppointmentDate = (
    appointmentDate: string
  ) => {
    const selectedDate = new Date(
      appointmentDate
    );
  
    const today = new Date();
  
    today.setHours(0, 0, 0, 0);
  
    return selectedDate >= today;
  };
  

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
  
    setSuccessMessage("");
    setErrorMessage("");
  
    if (
      !validateAppointmentDate(
        formData.appointmentDate
      )
    ) {
      setErrorMessage(
        "Please select a future date."
      );
  
      return;
    }
  
    try {
      setLoading(true);
  
      const response =
        await createAppointment(formData);
  
      if (response.success) {
        setSuccessMessage(
          "Appointment booked successfully."
        );
  
        setFormData(initialState);
      }
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const today = new Date();

const maxDate = new Date();

maxDate.setMonth(
  maxDate.getMonth() + 6
);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className="mb-4 text-5xl font-bold text-slate-800"
            style={{
              fontFamily:
                "Playfair Display, serif",
            }}
          >
            Book An Appointment
          </h1>

          <p className="text-lg text-slate-600">
            Schedule your personalized
            astrology consultation with
            Dharani Astrology.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
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

<input
  type="date"
  name="appointmentDate"
  value={formData.appointmentDate}
  onChange={handleChange}
  min={
    today.toISOString().split("T")[0]
  }
  max={
    maxDate
      .toISOString()
      .split("T")[0]
  }
  required
  className="
    w-full
    rounded-lg
    border
    border-slate-300
    px-4
    py-3
  "
/>

            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
            />

          </div>

          <textarea
            rows={5}
            name="message"
            placeholder="Additional Notes (Optional)"
            value={formData.message}
            onChange={handleChange}
            className="mt-6 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-green-700"
          />

          {/* Success */}
          {successMessage && (
            <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-700">
              {successMessage}
            </div>
          )}

          {/* Error */}
          {errorMessage && (
            <div className="mt-6 rounded-lg bg-red-50 p-4 text-red-700">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              mt-8
              w-full
              cursor-pointer
              rounded-full
              bg-green-700
              py-4
              font-semibold
              text-white
              transition
              hover:bg-green-800
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading
              ? "Submitting..."
              : "Confirm Appointment"}
          </button>
        </form>

      </div>
    </section>
  );
}