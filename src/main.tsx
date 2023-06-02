import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Home.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/app' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
