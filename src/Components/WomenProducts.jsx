import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import TwoImage from './smallComp.jsx/TwoImages'
import { ButtonGroup, Divider, Flex, HStack, IconButton, SimpleGrid, Spacer, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import ProductsSidebar from './smallComp.jsx/ProductSidebar'
import ProductCard from './smallComp.jsx/ProductCard'
import Loading from './smallComp.jsx/Loding'


const WomenProducts = () => {


    const {data, AllProductsData } = useContext(AppContext)


  
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

    <Stack style={{marginTop: "80px"}} > 
              
    <TwoImage 
img3={data.giftVoucher.forAll} 
/>


<Stack justify='center' style={{ margin:"auto", marginTop:"20px"}}  >


   


   <VStack spacing={5}>

   <Text color="gray.500" fontWeight="bold" > HOME / WOMEN /   PRODUCTS </Text>

   <Text align="center" fontSize="20" fontWeight="bold" >Women Clothing(8803)</Text>
  

        
   <HStack width="full" padding="0 50px">
      <Text color="gray.500" fontWeight="bold" > FILTER </Text> <Spacer /> 
      <Text color="gray.500" fontWeight="bold" > CLEAR ALL</Text>
   </HStack>

   </VStack>

   
<HStack spacing={50} width={{base:"100%", lg:"1200px"}} justify="stretch"  >

 {/* SIDEBAR */}
      {/* PRODUCTS */}
  

  <SimpleGrid padding={5} spacing={5} columns={{base:2,md:3,lg:4}} >

  {AllProductsData.womenData.map((el)=> (
      <ProductCard  {...el} />
  ) )} 

  </SimpleGrid>

</HStack>




</Stack>

<ProductCard />


</Stack>


   
  )
}

export default WomenProducts
