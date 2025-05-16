import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose Vite to be accessible externally
    port: 5173, // Optionally set the port (5173 is default)
    strictPort: true, // Fail if the port is already in use
  },
})
