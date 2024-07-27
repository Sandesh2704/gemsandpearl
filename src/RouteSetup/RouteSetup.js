import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import App from "../App"
import AboutUs from '../Pages/Aboutus';

export default function RouteSetup() {
  return (
    <>
      <Routes >
      <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path='/' element={<Navigate to='/' />}/>
        <Route path='/' element={<App />} />
        <Route path='/AboutUs' element={<AboutUs/>} />
      </Routes>
    </>
  )
}
