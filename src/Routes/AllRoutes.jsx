import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Components/LandingPage'
import LandingPageAcc from '../Components/LandingPageAcc'
import LandingPageWomen from '../Components/LandingPageWomen'
import Login from '../Components/login'
import PrivateRoute from './PrivateRoute'




const AllRoutes = () => {


  return (
    <div>

        <Routes>

            <Route path='/' element={<LandingPage />} />
            <Route path='/landingPage/women' element={<LandingPageWomen />} />
            <Route path='/landingPage/accessories' element={<LandingPageAcc />} />

            <Route path='/men-clothing' 
            element={ <PrivateRoute> <h1>MEN PAGE</h1> </PrivateRoute> } />

            <Route path='/women-clothing' 
            element={ <PrivateRoute> <h1>MEN PAGE</h1> </PrivateRoute> } />

            <Route path='/mobile-covers-india' 
            element={ <PrivateRoute> <h1>MEN PAGE</h1> </PrivateRoute> } />

            <Route path='/products/:id' element={<h1>SINGLE PRODUCT PAGE</h1>} />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<h1>REGISTER PAGE</h1>} />

            {/* NAVBAR IS DIFFERENT */}
            <Route path='/cart' 
            element={ <PrivateRoute> <h1>CART PAGE</h1> </PrivateRoute> } />

            <Route path='/wishlist' 
            element={ <PrivateRoute> <h1>CART PAGE</h1> </PrivateRoute> } />

            <Route path='/checkout/payment' element={<h1> PAYMENT</h1>} />

        </Routes>
      
    </div>
  )
}

export default AllRoutes
