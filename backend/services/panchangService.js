// services/panchangService.js

const axios = require("axios");

const getAccessToken = async () => {
    try {
      const response = await axios.post(
        "https://api.prokerala.com/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.PROKERALA_CLIENT_ID,
          client_secret: process.env.PROKERALA_CLIENT_SECRET,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      return response.data.access_token;
    } catch (err) {
      console.error(err.response?.data || err.message);
      throw err;
    }
  };

const getTodayPanchang = async () => {
  const token = await getAccessToken();

  const now = new Date();

  const response = await axios.get(
    "https://api.prokerala.com/v2/astrology/panchang",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        coordinates: "12.9716,77.5946",
        datetime: new Date().toISOString(),
        ayanamsa: 1,
        lang: "en",
      },
    }
  );

  return response.data.data;
};

module.exports = {
  getTodayPanchang,
};