import { 
    Wrap,
    HStack,
    VStack,
    Text,
    Badge,
    ButtonGroup,
    IconButton,
    Button,
    Spacer,
    Stack,
    Divider,
    Image,


} from '@chakra-ui/react'
import HoverImage from 'react-hover-image/build';
import { AddIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { AiOutlineHeart } from 'react-icons/ai';

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext';

const CartSingleCard = ({el}) => {

  

const {handleChange,handleRemove,handlePrice } = useContext(AppContext)

  
 
  return (


    <Wrap w={{base:320, md:600}} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5">
          
          <HStack w="full" >
           
           
                 <VStack align="revert-layer" spacing={4} >
            
           
            <Text  fontSize={{base:"15px", md:"xl"}} color="gray.500" >{el.Title}</Text>
            
          
            
            <Stack>
            
                   <HStack alignContent="center">
                   <Text fontWeight="bold" fontSize="2xl" >₹{el.price}</Text>
                   
                   <Text as="s" marginLeft={4} fontSize="l" >₹{el.strikeprice}</Text>
                   </HStack>
       
                   <Stack direction={{base:"column", md:"row"}} spacing={35} >
                       
                         
                       <ButtonGroup size='sm' isAttached variant='outline'>
                          
                          <Button  fontWeight="bold" fontSize="xl" onClick={()=> handleChange(el, -1)  } >-</Button>
                       
                           <Button>{el.amount}</Button>
                          
                           <IconButton 
                           onClick={()=> handleChange(el, 1)  } 
                           aria-label='Add to friends' icon={<AddIcon w={3} h={3} />} />
                         </ButtonGroup>


                   </Stack>
                  
                </Stack>
            
            
                </VStack>
            
            <Spacer />

              <Stack w={150}>
              <Image style={{borderRadius: "5px"}}  src={el.Display_image}   />
    
              </Stack>
              
          </HStack>

          <Divider   />
            
         
          <HStack w="full" spacing={5} >
            <Button onClick={()=>handleRemove(el.id)} w="40%" size='md' isAttached variant='outline'>REMOVE</Button>
            <Divider orientation='vertical' />
            <Button  w="full"  size='md' isAttached variant='outline'> 

              <HStack spac ><AiOutlineHeart fontSize="25px" /> <Text>ADD TO WISHLIST</Text></HStack>
            
            </Button>
          </HStack>

          </Wrap>
  )
}

export default CartSingleCard
