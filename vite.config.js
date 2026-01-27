import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            include: ['src/**', 'index.html', 'vite.config.js'],
            ignored: (path) => path.includes('backend'),
        },
    },
})
