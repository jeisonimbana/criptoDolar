import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/homeScreen/Home'

const RoutePrivate = () => {


  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default RoutePrivate