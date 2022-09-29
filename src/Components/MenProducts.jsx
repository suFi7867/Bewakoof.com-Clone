import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import TwoImage from './smallComp.jsx/TwoImages'
import { Button, ButtonGroup, Divider, Flex, HStack, IconButton, SimpleGrid, Spacer, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import ProductsSidebar from './smallComp.jsx/ProductSidebar'
import ProductCard from './smallComp.jsx/ProductCard'
import Loading from './smallComp.jsx/Loding'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'


const MenProducts = () => {


    const {data, AllProductsData } = useContext(AppContext)


    const [mendata, setmenData] = useState([])
  
 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);

 setTimeout(() => {
 setIsLoading(false)
 

 }, 1500);


useEffect(()=>{
  setmenData(AllProductsData.menData)  

  
},[mendata])


 


 const PriceSortlow = ()=>{

  const SortedData = AllProductsData.menData.sort(function (a, b) {
     return a.price - b.price;
   });

   setmenData([...SortedData])
}

const PriceSorthigh = ()=>{

 const SortedData = AllProductsData.menData.sort(function (a, b) {
    return b.price - a.price;
  });

 setmenData([...SortedData])
}




  

  console.log(mendata)

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

             <Text color="gray.500" fontWeight="bold" > HOME / MEN /   PRODUCTS </Text>

             <Text align="center" fontSize="20" fontWeight="bold" >Men Clothing(8803)</Text>
            
             <ButtonGroup size='sm' isAttached variant='outline'>
               <IconButton onClick={PriceSortlow} aria-label='Add to friends' icon={< ChevronDownIcon boxSize={8} />} />
               <Button fontSize={18} >SORT BY PRICE</Button>
               <IconButton onClick={PriceSorthigh} aria-label='Add to friends' icon={<ChevronUpIcon boxSize={8} />} />
             </ButtonGroup>
 
                  
             <HStack width="full" padding="0 50px">
                <Text color="gray.500" fontWeight="bold" > FILTER </Text> <Spacer /> 
                <Text color="gray.500" fontWeight="bold" > CLEAR ALL</Text>
             </HStack>

             </VStack>

             
        <HStack spacing={50} width={{base:"100%", lg:"1200px"}} justify="stretch"  >

           {/* SIDEBAR */}
           

                {/* PRODUCTS */}
            

            <SimpleGrid padding={5} spacing={5} columns={{base:2,md:3,lg:4}} >

            {mendata.map((el)=> (
                <ProductCard  {...el} />
            ) )} 

                
             
            </SimpleGrid>

        </HStack>




      </Stack>

      <ProductCard />


    </Stack>

   
  )
}

export default MenProducts
