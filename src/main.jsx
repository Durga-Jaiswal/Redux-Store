import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import Navbar from "./components/Navbar.jsx"
import { Provider } from 'react-redux'
import store from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
