import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import CommonProblems from "../pages/CommonProblems";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import BookAppointment from "../pages/BookAppointment";
import Feedback from "../pages/Feedback";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

       <Route
        path="/services"
        element={<Services />}
      />

<Route
        path="/problems"
        element={<CommonProblems />}
      />

<Route
        path="/testimonials"
        element={<Testimonials />}
      />

<Route
        path="/contact"
        element={<Contact />}
      /> 
            <Route
        path="/book-appointment"
        element={<BookAppointment />}
      />

      <Route 
      path="/feedback"
      element={<Feedback /> } />
    </Routes>
  );
}