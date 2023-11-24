import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
    Home,
    Products,
    SingleProduct,
    About,
    Cart,
    Error,
    Checkout,
    PrivateRoute,
} from './pages/index'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )

}

export default App
