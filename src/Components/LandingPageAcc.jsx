
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Loading from './smallComp.jsx/Loding'
import PopularCat from './smallComp.jsx/PopularCat'
import SliderImages from './smallComp.jsx/SliderImages'
import StoopidCollection4D from './smallComp.jsx/StoopidCollection4D'
import TwoImage from './smallComp.jsx/TwoImages'







function LandingPageAcc (){

  const {data} = useContext(AppContext)
 // for products
 const path = "/mobile-covers-india"


 
 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);

 setTimeout(() => {
  setIsLoading(false)
  
 }, 1500);
  

 // console.log(data)

 if(isLoading){

  return (
  
    
     <Loading />
   

    ) 

 }

  return (

    <div style={{marginTop: "150px"}} >
   
   
   
   <SliderImages data={data.SliderData.acc} path={path} />
   <TwoImage img1={data.longDiv.acc} 
   img2={data.smallProduct.acc}
   path={path}
 />
   {/* SLIDER PENDING */}

   
  <PopularCat data={data.PopularCat.acc} path={path}   />
  <SliderImages data={data.SliderData.acc2} path={path} />

   
  <StoopidCollection4D data={data.DiscountProduct.acc}  path={path}  />
  {/* SLIDER PENDING */}

  
    </div>


  )
}

export default LandingPageAcc
