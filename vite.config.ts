// vite.config.js
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { toEntry } from './viteExporter.js';

// relative to ./src/
const exports = ["main.ts"]
const main = exports[0]

export default defineConfig({
    build: {
        lib: {
            entry: toEntry({exports, main}),
            formats: ['es', 'cjs'],
        },
        sourcemap: true,
        minify: false,
    },
    plugins: [
        dts(),
        tsconfigPaths()
    ],
})
