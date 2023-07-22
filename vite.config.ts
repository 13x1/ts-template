// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'ts-template',
            fileName: 'main',
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
