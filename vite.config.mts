import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { compression as viteCompression } from "vite-plugin-compression2";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@style": path.resolve(__dirname, "./src/style"),
      "@icons": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 1111,
  },
  preview: {
    port: 1111,
  },
  plugins: [
    svgr(),
    react(),
    terser(),
    chunkSplitPlugin({
      strategy: "unbundle",
      customSplitting: {
        components: [/src\/components/],
        icons: [/src\/icons/],
        types: [/src\/types/],
        lib: [/src\/lib/],
      },
    }),
    viteCompression({
      algorithm: "brotliCompress",
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    minify: "terser",
    sourcemap: false,
    cssCodeSplit: true,
    emptyOutDir: true,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-konva": "ReactKonva",
        },
      },
    },
  },
});
