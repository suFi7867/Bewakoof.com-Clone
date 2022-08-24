import { Grid, Image, Img, VStack } from '@chakra-ui/react'
import React from 'react'

import { useNavigate } from 'react-router-dom'

//import { useNavigate } from 'react-router-dom'
//
// const Navigation = useNavigate()
// style={{cursor:"pointer"}} onClick={()=>Navigation(path)}


const TwoImage = ({img1, img2, img3, path}) => {

   const Navigation = useNavigate()

  return (
     <>
     <br />   
     <VStack  spacing={5} >

          <Image w="full" src={img1}  style={{cursor:"pointer"}} onClick={()=>Navigation(path)} />
          <Grid justifyContent="center">
          
             <Image src={img2} style={{cursor:"pointer"}} onClick={()=>Navigation(path)}  />
          </Grid >
          <Image w="full" src={img3} style={{cursor:"pointer"}} onClick={()=>Navigation(path)}  />
     </VStack>
     </>
  )
}

export default TwoImage
