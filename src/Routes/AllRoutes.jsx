import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Components/LandingPage'
import LandingPageAcc from '../Components/LandingPageAcc'
import LandingPageWomen from '../Components/LandingPageWomen'




const AllRoutes = () => {


  return (
    <div>

        <Routes>

            <Route path='/' element={<LandingPage />} />
            <Route path='/landingPage/women' element={<LandingPageWomen />} />
            <Route path='/landingPage/accessories' element={<LandingPageAcc />} />
            <Route path='/men-clothing' element={
            <div>
              <h1>MEN PAGE</h1>
              <h1>MEN PAGE</h1>
              <h1>MEN PAGE</h1>
              <h1>MEN PAGE</h1>
              <h1>MEN PAGE</h1>
            </div>} />

            <Route path='/women-clothing' element={<h1>WOMEN PAGE</h1>} />

            <Route path='/mobile-covers-india' element={<h1>MOBILE PAGE</h1>} />



            
            <Route path='/products/:id' element={<h1>SINGLE PRODUCT PAGE</h1>} />


            <Route path='/login' element={<h1>LOGIN PAGE</h1>} />

            <Route path='/register' element={<h1>REGISTER PAGE</h1>} />

            {/* NAVBAR IS DIFFERENT */}
            <Route path='/cart' element={<h1> CART</h1>} />

            <Route path='/checkout/payment' element={<h1> PAYMENT</h1>} />

        </Routes>
      
    </div>
  )
}

export default AllRoutes
