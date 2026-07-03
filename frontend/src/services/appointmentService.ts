import axios from "axios";

export interface AppointmentRequest {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  appointmentDate: string;
  appointmentTime: string;
  message: string;
}

const API_URL =
  "http://localhost:5001/api/appointments";

export const createAppointment = async (
  data
) => {
  const response = await axios.post(
    API_URL,
    data
  );

  return response.data;
};