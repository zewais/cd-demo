import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //create a base key and add the github pages URL here
  base: "/cd-demo",
});
