import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      IP_URI: "https://geolocation-db.com/json/",
      FLAGE_URI: "https://countryflagsapi.com",
      B_URI: "https://real-time-location.onrender.com",
      Info: "https://ipinfo.io",
      Token: "eae157cbbeb6cd"
    }
  }
})
