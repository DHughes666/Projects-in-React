import React from 'react';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { 
  Landing, Error, Dashboard, Register
 } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='landing' element={<Landing />}/>
        <Route path='register' element={<Register />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
