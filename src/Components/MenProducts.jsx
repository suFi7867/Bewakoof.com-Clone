import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import TwoImage from './smallComp.jsx/TwoImages'
import { Divider, Flex, HStack, SimpleGrid, Spacer, Stack, Text, Wrap } from '@chakra-ui/react'
import ProductsSidebar from './smallComp.jsx/ProductSidebar'
import ProductCard from './smallComp.jsx/ProductCard'


const MenProducts = () => {


    const {data, menData } = useContext(AppContext)

  return (

    <Stack style={{marginTop: "80px"}} > 
              
              <TwoImage 
        img3={data.giftVoucher.forAll} 
        />


      <Wrap justify='center' style={{ margin:"auto", marginTop:"20px"}}  >


             <Text color="gray.500" fontWeight="bold" > HOME / MEN /   PRODUCTS </Text>

             <Divider orientation='horizontal' />  

             <Text align="center" fontSize="20" fontWeight="bold" >Men Clothing(8803)</Text>
            
 
                  
             <Flex width="1200px" >
                <Text color="gray.500" fontWeight="bold" > FILTER </Text> <Spacer /> 
                <Text color="gray.500" fontWeight="bold" > CLEAR ALL</Text>
             </Flex>


             
        <HStack spacing={50} width="1200px"   >

           {/* SIDEBAR */}
           <ProductsSidebar flex='1'  />

                {/* PRODUCTS */}
            

            <SimpleGrid spacing={5} flex='1' columns={[1,2,2,3]}>

            {menData.map((el)=> (
                <ProductCard  {...el} />
            ) )} 

                
             
            </SimpleGrid>

        </HStack>




      </Wrap>

      <ProductCard />


    </Stack>

   
  )
}

export default MenProducts
