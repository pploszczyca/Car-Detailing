import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8000,
    },
    preview: {
        port: 9000,
    },
    plugins: [react()],
})
