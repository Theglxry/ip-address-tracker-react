import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const {VITE_REACT_APP_KEY} = process.env
export default defineConfig({
  plugins: [react()],
})




