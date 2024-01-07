import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import { compression as viteCompression } from "vite-plugin-compression2";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@style": path.resolve(__dirname, "./src/styles"),
      "@icons": path.resolve(__dirname, "./src/assets"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  server: {
    port: 2222,
  },
  preview: {
    port: 2222,
  },
  plugins: [
    svgr(),
    react(),
    terser(),
    splitVendorChunkPlugin(),
    viteCompression({
      algorithm: "brotliCompress",
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    chunkSizeWarningLimit: 550,
    minify: "terser",
    sourcemap: false,
    cssCodeSplit: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("clsx")) {
            return "@clsx";
          }
          if (id.includes("resize-observer-polyfill")) {
            return "@resize-observer-polyfill";
          }
          if (id.includes("styled-components")) {
            return "@styled-components";
          }
          if (id.includes("tailwindcss")) {
            return "@tailwindcss";
          }
          if (id.includes("postcss")) {
            return "@postcss";
          }
          if (id.includes("preline")) {
            return "@preline";
          }
          if (id.includes("tailwind-merge")) {
            return "@tailwind-merge";
          }
          if (id.includes("zustand")) {
            return "@zustand";
          }
          if (id.includes("react-hook-form")) {
            return "@react-hook-form";
          }
          if (id.includes("axios")) {
            return "@axios";
          }
          if (id.includes("swr")) {
            return "@swr";
          }
          if (
            id.includes("react-router-dom") ||
            id.includes("@remix-run") ||
            id.includes("react-router")
          ) {
            return "@react-router";
          }
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
