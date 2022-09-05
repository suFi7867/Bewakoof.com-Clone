
import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import DiscountProduct from './smallComp.jsx/DiscountProduct'
import Loading from './smallComp.jsx/Loding'
import PopularCat from './smallComp.jsx/PopularCat'
import SliderImages from './smallComp.jsx/SliderImages'
import StoopidCollection4D from './smallComp.jsx/StoopidCollection4D'
import TwoImage from './smallComp.jsx/TwoImages'
import styles from "./main.module.css";



function LandingPage (){

  const {data} = useContext(AppContext)

  // for products
 const path = "/men-clothing"

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

    <div id={styles.landingPageTOP} >
   
   <SliderImages data={data.SliderData.men} path={path}  />
   <TwoImage img1={data.longDiv.men} 
   img2={data.smallProduct.men} 
   img3={data.giftVoucher.forAll} path={path} 
   />
   <PopularCat data={data.PopularCat.men} path={path}  />

        {/* SLIDER PENDING */}

      


   <DiscountProduct data={data.DiscountProduct.men} path={path} />
 
   

   <SliderImages data={data.SliderData.men2} path={path}  />

   {/* SLIDER PENDING */}

  
   <StoopidCollection4D data={data.DiscountProduct.stoopid} path={path}  />
   <TwoImage img1={data.longDiv.men2} 
   img3={data.longDiv.men3} 
   path={path} 
   />
    </div>
  



  )
}

export default LandingPage
