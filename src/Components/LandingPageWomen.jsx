
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import DiscountProduct from './smallComp.jsx/DiscountProduct'
import PopularCat from './smallComp.jsx/PopularCat'
import SliderImages from './smallComp.jsx/SliderImages'
import StoopidCollection4D from './smallComp.jsx/StoopidCollection4D'
import TwoImage from './smallComp.jsx/TwoImages'






function LandingPageWomen (){

  const {data} = useContext(AppContext)


    // for products
 const path = "/products/women-tshirts"


 console.log(data)
  return (

    <div style={{marginTop: "150px"}} >
   
   
   <SliderImages data={data.SliderData.women}  path={path}   />
   <TwoImage img1={data.longDiv.women} img2={data.smallProduct.women} img3={data.giftVoucher.forAll}  path={path}   />

   <PopularCat data={data.PopularCat.women}   path={path}  />

   <DiscountProduct data={data.DiscountProduct.women} path={path} />

  {/* SLIDER PENDING */}

  <div>
    <h1 style={{fontSize:"100px", backgroundColor:"red"}} >CLEARANCE ZONE</h1>
    <h1 style={{fontSize:"100px", backgroundColor:"red"}} >SLIDER PENDING</h1>
   </div>


   <SliderImages data={data.SliderData.women2}  path={path}  />


   <StoopidCollection4D data={data.DiscountProduct.stoopidWomen}  path={path}  />

        {/* SLIDER PENDING */}

        <div>
    <h1 style={{fontSize:"100px", backgroundColor:"red"}} >CLEARANCE ZONE</h1>
    <h1 style={{fontSize:"100px", backgroundColor:"red"}} >SLIDER PENDING</h1>
   </div>



   <TwoImage img1={data.longDiv.men2} 
   img3={data.longDiv.men3} 
   path={path} 
   />
    </div>


  )
}

export default LandingPageWomen
