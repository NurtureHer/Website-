import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      'uncomprehensive-particia-overstraightly.ngrok-free.dev'
    ]
  },
  base: "/", 
})