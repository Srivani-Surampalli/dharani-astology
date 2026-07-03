const {
    getTodayPanchang,
  } = require(
    "../services/panchangService"
  );
  
  exports.getPanchang =
    async (req, res) => {
      try {
        const data =
          await getTodayPanchang();
  
        res.json({
          success: true,
          data,
        });
      } catch (error) {
        console.error(error);
  
        res.status(500).json({
          success: false,
          message:
            "Unable to fetch Panchang",
        });
      }
    };