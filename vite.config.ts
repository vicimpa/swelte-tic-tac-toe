import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import path from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [svelte(), path()],
});
