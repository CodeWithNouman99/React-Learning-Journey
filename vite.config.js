import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 🔥 THIS WAS MISSING OR WRONG
  ],
})
>>>>>>> 9dfb8518ea913279ca648ef4779c4a81e733bfb3
