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
    AuthWrapper
} from './pages/index'

function App() {
  return (
    <AuthWrapper>
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
          <Route path='/checkout' element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthWrapper>
  )

}

export default App
