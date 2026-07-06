import api from "./api";

export const getTodayPanchang = async () => {
  const response = await api.get("/panchang/today");

  return response.data;
};