export interface TestimonialRequest {
    name: string;
    location?: string;
    rating: number;
    feedback: string;
    service: string;
  }
  
  export interface Testimonial {
    _id: string;
    name: string;
    location?: string;
    rating: number;
    feedback: string;
    createdAt?: string;
    service: string;
  }