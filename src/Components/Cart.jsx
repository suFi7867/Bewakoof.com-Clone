import { AddIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, ButtonGroup, Divider, Flex, HStack, IconButton, Image, Spacer, Spinner, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import HoverImage from 'react-hover-image/build';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import CartSingleCard from './smallComp.jsx/CartSingleCard';
import Loading from './smallComp.jsx/Loding';

const Cart = () => {



 //   https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif

    // is Loading   //
 const {cartData,price, discountPrice, Totalprice, TotalQty} = useContext(AppContext)
 
 
  
 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);
 const [isButLoading, setIsButLoading] = useState(false);
 const navigate = useNavigate();

 setTimeout(() => {
 setIsLoading(false)
  
 }, 1500);


 console.log(discountPrice)
  

 console.log(cartData)


 
 const BackToPRoductPage = () => {
    setIsButLoading(true);
    
    setTimeout(() => {
      
    
      setIsButLoading(false);
      navigate("/men-clothing")
    }, 1500);
   
  };


// console.log(price)





 if(isLoading){

  return (  
     <Loading />
    ) 

 } 
 
 
 if(cartData.length===0){

    return (  


 
            <Stack alignItems="center" p={15} direction={{base:"column", md:"row"}}  marginTop={{base:"220px", md:"180px"}} justify="center">

            <Image src='https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif' />
         
           <VStack spacing={30} >
           <Text fontSize="3xl" >Nothing In The Bag </Text>

           <Divider />
<Button  onClick={()=>BackToPRoductPage()} fontSize="x-large" padding={8}  colorScheme='yellow'> 


<BiShoppingBag fontSize="30px" /> 
{!isButLoading &&  "Continue Shopping" }
    {isButLoading && (
      <Spinner
        thickness="4px"
        speed="0.55s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    )}


</Button>



           </VStack>
            </Stack>

      
      
      ) 
  
   }  

 

  return (

  
 <VStack marginTop={{base:"220px", md:"180px"}} justify="center" >

  <Text fontSize="2xl" fontWeight="extrabold" >My Bag {TotalQty} item(S)</Text>

    <Stack direction={{base:"column", sm:"row"}} padding={10} spacing={50} >
      
      <VStack  spacing={5}   >

         <HStack spacing={5} w="full"  padding={3} bg="#fcffee" > <Image w={10} src='https://images.bewakoof.com/web/Red-truck.png' /> <Text>Yay! You get FREE delivery on this order</Text></HStack>
      {
        cartData.map((el)=> (
           <CartSingleCard el={el} />
        ) )
      }

      </VStack>


      <VStack spacing={5} >

      <HStack  spacing={5} w="full"  padding={3} bg="yellow.300" >  <Text fontWeight="bold" >Save extra ₹140 with TriBe</Text> <Spacer /> <ArrowRightIcon /> </HStack>
      
      <Box fontSize="16px" w={{base:300, sm:600}} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5" >Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200
     </Box>

     <Box fontSize="16px" w={{base:300, sm:600}} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5" >Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!
     </Box>

     <Box bg="#ecf6f5" fontWeight="bold" fontSize="16px" w={{base:300, sm:600}} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="10px 20px" >Have a Coupon / Referral / Gift Card ? 
     </Box>


     <Stack  bg="gray.200" w={{base:300, sm:600}} spacing={3} borderWidth='1px' overflow='hidden' padding="5" textAlign="center" > 
     <Text  fontWeight="bold" fontSize="20px">PRICE SUMMARY</Text> </Stack>

     <VStack fontSize="16px" padding="5"  w={{base:300, sm:600}} spacing={5} borderWidth='1px' overflow='hidden'  >

      <HStack w="full" >
        <Text fontSize={{base:"15px", md:"18px"}} >Total MRP (Incl. of taxes) </Text>
        <Spacer />
        <Text fontWeight="bold" fontSize={{base:"15px", md:"18px"}} > ₹ {Totalprice} </Text>
      </HStack>

      <HStack w="full" >
        <Text fontSize={{base:"15px", md:"18px"}} >Shipping Charges </Text>
        <Spacer />
        <Text fontWeight="bold" color="green.500" fontSize={{base:"15px", md:"18px"}} > FREE </Text>
      </HStack>

      <HStack w="full" >
        <Text fontSize={{base:"15px", md:"18px"}} >Bag Discount  </Text>
        <Spacer />
        <Text fontWeight="bold" fontSize={{base:"15px", md:"18px"}} > - ₹{discountPrice} </Text>
      </HStack>

      <HStack w="full" >
        <Text fontSize={{base:"15px", md:"18px"}} >Subtotal  </Text>
        <Spacer />
        <Text fontWeight="bold" fontSize={{base:"15px", md:"18px"}} >  ₹{price}  </Text>
      </HStack>
      
      <Badge overflow="hidden" borderRadius="2xl" fontSize={{base:"15px", md:"xl"}} padding="5px 20px" w="full" variant='subtle' color="gray.800" colorScheme='green'>
      You are saving ₹ {discountPrice} on this order
      </Badge>
      
     </VStack>

     <Stack direction={{base:"column", md:"row"}} w="full" padding="5" >

   
        <Text  w={{base:"full", md:"50%"}}  fontSize="2xl" fontWeight="bold" >Total  ₹ {price}</Text>
         
        <Divider w="10%"  orientation='vertical' />

     <Button onClick={()=>navigate("/checkout/payment")} w="full" colorScheme='teal' color="white" size='lg'>
        CheckOut
      </Button>

     </Stack>

              <Divider as="bold" />
              <Divider as="bold" />
              <Divider as="bold" />
      </VStack>
     
       
      
     

      
    </Stack>


 </VStack>

  )
}

export default Cart
