import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Принудительно используем порт 5173
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
      '/socket.io': {
        target: 'http://localhost:3001', // Прокси для WebSocket
        ws: true, // Включаем поддержку WebSocket
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: "/todolist/",
});