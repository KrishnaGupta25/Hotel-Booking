import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* BrowserRouter lagana zaroori hai taaki pura app routing system ke under kaam kare — bina page reload ke route change ho sake. */
import { BrowserRouter } from 'react-router-dom'

//"Is line me hum ClerkProvider naam ka component import kar rahe hain jo @clerk/clerk-react library ka part hai, jise hum apne React app me authentication ke liye use karenge."
import { ClerkProvider } from '@clerk/clerk-react'


// Import your Publishable Key we have copied this codefrom the main website 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>,
)
