/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        success: "#F59E0B",
        error: "#EF4444",
        background: "#f9fafb",
        surface: "#ffffff",
        text: "#111827"
      },
      boxShadow: {
        subtle: "0 4px 10px rgba(17, 24, 39, 0.06)",
        card: "0 8px 24px rgba(17, 24, 39, 0.08)"
      },
      borderRadius: {
        xl: "0.9rem"
      }
    }
  },
  plugins: []
};
