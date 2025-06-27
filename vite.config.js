import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs';
import path from 'path';
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        svgLoader()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    server: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'src/certs/localhost-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'src/certs/localhost-cert.pem')),
        },
        host: 'vietho.localhost',
        port: 5175,
    },
})
