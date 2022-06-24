/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      fontSize: {
        'despt14': ['0.875rem', '100%/1.618'],
        'subtitle16': ['1rem', '100%/1.618'],
        'title20': ['1.25rem', '100%/1.618'],
      },

      fontFamily: {
        sans: "Merriweather Sans , sans-serif",
      },
      colors: {
        "bgd-body": "var(--body-bg-color)",
        "txt-color": "var(--text-color)",
        "bgd-card": "var(--bg-cards)",
        "bgd-techs": "var(--bg-techs)",
      },

      gridTemplateAreas: {
        sm_aside: [
          'photo name',
          'photo techs',
          'info info'
        ],
        md_aside: [
          'photo name',
          'photo info',
          'photo techs'
        ],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
