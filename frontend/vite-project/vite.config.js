import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enables access from LAN (0.0.0.0)
    port: 5173, // Default Vite port
    strictPort: true, // Ensures the port does not change
  },
});
