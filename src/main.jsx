import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Homepage.jsx'
import Features from './Components/Features.jsx'
import About from './Components/About.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
const router=createBrowserRouter([{path:"/",element:<App/>,children:[{path:"/",element:<Home/>},{path:"/features",element:<Features/>},{path:"/about",element:<About/>}]}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
