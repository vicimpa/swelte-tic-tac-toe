import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import path from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  base: './',
  plugins: [
    svelte(),
    path()
  ],
});
