

import { Divider, Flex, HStack, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const ProductSidebar = () => {


  return (
    <VStack w={200} style={{position:"relative", top:"-140px"}} >
      
  
   

      <Flex w="full" >
         <Text > Category </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      
       <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Sizes </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Brand </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      
       <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Color </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Design </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      
       <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Fit </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Sleeve </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      
       <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Neck </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Type </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      
       <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Ratings </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>
      <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Discount </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>

      
       <Divider orientation='horizontal' />

      <Flex w="full" >
         <Text > Sort By </Text> 
         <Spacer /> 
         <ChevronDownIcon w={6} h={6}  />
      </Flex>
     
      <Divider orientation='horizontal' />
      
    </VStack>
  )
}

export default ProductSidebar
