module.exports = {
    colors: {
        primary: "#2f8f57",
        dark: "#26354d",
        light: "#eef3ef",
      },
    theme: {
        extend: {
            keyframes: {
              marquee: {
                "0%": {
                  transform: "translateX(100%)",
                },
                "100%": {
                  transform: "translateX(-100%)",
                },
              },
            },
            animation: {
              marquee: "marquee 35s linear infinite",
            },
          },   
    },
  };