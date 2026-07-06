import api from "./api";

export interface AppointmentRequest {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  appointmentDate: string;
  appointmentTime: string;
  message: string;
}

export const createAppointment = async (
  data: AppointmentRequest
) => {
  const response = await api.post(
    "/appointments",
    data
  );

  return response.data;
};