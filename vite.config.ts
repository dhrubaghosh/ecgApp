import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: isDev
            ? 'http://localhost:5000'
            : 'https://ecgapi-production-1941.up.railway.app',
          changeOrigin: true,
          secure: false
        }
      }
    }
  }
})
