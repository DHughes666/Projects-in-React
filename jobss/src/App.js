import React from 'react';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { 
  Landing, Error, Register
 } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='landing' element={<Landing />}/>
        <Route path='register' element={<Register />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
  );
}

export default App;
