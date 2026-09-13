import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "./components/ThemeProvider"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <App />
      <Toaster />
      </ThemeProvider>
  </StrictMode>
)
