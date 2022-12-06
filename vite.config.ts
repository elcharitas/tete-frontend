/// <reference types="vitest" />
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import MANIFEST from "./src/api/config/manifest";

export default defineConfig({
    plugins: [svgr(), react(), VitePWA(MANIFEST)],
    test: {
        api: true,
        silent: true,
        environment: "happy-dom",
        include: ["tests/**/*.{spec,test}.{ts,tsx}"],
        setupFiles: ["tests/setup.ts"],
    },
});
