import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/docs/',
  server: {
    fs: {
      strict: false, // Allows serving files outside the root
    },
  },
})
