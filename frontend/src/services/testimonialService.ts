import axios from "axios";

import type {
    Testimonial,
    TestimonialRequest,
} from "../types/testimonial";

const API_URL =
  "http://localhost:5001/api/testimonial";

export const createFeedback =
  async (
    data: TestimonialRequest
  ) => {
    const response =
      await axios.post(
        API_URL,
        data
      );
    return response.data;
  };

export const getTestimonials =
  async (): Promise<{
    success: boolean;
    testimonials: Testimonial[];
  }> => {
    const response =
      await axios.get(API_URL);

    return response.data;
  };