import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import TwoImage from './smallComp.jsx/TwoImages'
import { Divider, Flex, HStack, SimpleGrid, Spacer, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
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


      <Wrap justify='center' style={{ margin:"auto", marginTop:"20px"}}  >


             <Text color="gray.500" fontWeight="bold" > HOME / WOMEN /   PRODUCTS </Text>

             <Divider orientation='horizontal' />  

             <VStack>


             <Text align="center" fontSize="20" fontWeight="bold" >Women Clothing(9999)</Text>
            
 
                  
             <HStack width="1200px" >
                <Text color="gray.500" fontWeight="bold" > FILTER </Text> <Spacer /> 
                <Text color="gray.500" fontWeight="bold" > CLEAR ALL</Text>
             </HStack>

             </VStack>

             
        <HStack spacing={50} width="1200px" justify="stretch"  >

           {/* SIDEBAR */}
           <ProductsSidebar   />

                {/* PRODUCTS */}
            

            <SimpleGrid spacing={5}  columns={[1,2,2,3]}>

            {AllProductsData.womenData.map((el)=> (
                <ProductCard  {...el} />
            ) )} 

                
             
            </SimpleGrid>

        </HStack>




      </Wrap>

      <ProductCard />


    </Stack>

   
  )
}

export default WomenProducts
