import axios from "axios";

const API_URL =
  "http://localhost:5001/api/panchang";

export const getTodayPanchang =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/today`
      );

    return response.data;
  };