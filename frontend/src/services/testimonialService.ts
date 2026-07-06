import api from "./api";

import type {
  Testimonial,
  TestimonialRequest,
} from "../types/testimonial";

export const createFeedback = async (
  data: TestimonialRequest
) => {
  const response = await api.post(
    "/testimonial",
    data
  );

  return response.data;
};

export const getTestimonials = async (): Promise<{
  success: boolean;
  testimonials: Testimonial[];
}> => {
  const response = await api.get("/testimonial");

  return response.data;
};