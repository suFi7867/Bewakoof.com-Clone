

import React, { useState } from 'react'
import { Box, Image, SimpleGrid, Stack, Wrap } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//dynamic

// 



//import { useNavigate } from 'react-router-dom'
//
// const Navigation = useNavigate()
// style={{cursor:"pointer"}} onClick={()=>Navigation(path)}


function SliderImages ({data, path}) {

 // console.log(data)
 const Navigation = useNavigate()
    const [slide, setSlider] = useState(0)

    const [pre, setPre] = useState(data.length-1)
    const [next, setNext] = useState(slide+1)

    if(next === data.length || next >= data.length ){
        setSlider(0)
        setPre(data.length-1)
        setNext(slide+1)
    }
  

    useEffect(()=>{
       
      const intervalId = setInterval(() => {

        if (slide <= data.length) {

          setPre(slide)
          setSlider(next)
          setNext(next + 1) 
          

        } else {
          setSlider(0);
              }
        }, 2000);

        return () => clearInterval(intervalId);
        
    },[slide])
  
 // console.log(pre,slide,next)
  

  return (
 <>
 
    <Wrap justify="center">

    <SimpleGrid w="fit-content"  spacing={6} columns={[3]}  >

    <Image src={data[pre]} style={{cursor:"pointer"}} onClick={()=>Navigation(path)} /> 
         <Image src={data[slide]} style={{cursor:"pointer"}} onClick={()=>Navigation(path)} /> 
    <Image src={data[next]} style={{cursor:"pointer"}} onClick={()=>Navigation(path)} /> 


    </SimpleGrid>

   </Wrap>
        
 </>


  )
}

export default SliderImages
