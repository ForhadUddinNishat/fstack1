import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster, toaster } from "./components/ui/toaster"
import { Provider } from "./components/ui/provider.jsx"
import { BrowserRouter } from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App/>
       <Toaster/>
      </Provider> 
    </BrowserRouter>
    
  </StrictMode>,
)

