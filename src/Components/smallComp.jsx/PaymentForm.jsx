import { Button, Divider, FormControl, FormHelperText, FormLabel, HStack, Image, Input, PinInput, PinInputField, Stack, Text, useToast, VStack, Wrap } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

const PaymentForm = () => {


    const {cartDataEmpty, price} = useContext(AppContext)

    const navigate = useNavigate()
    const toast = useToast()
    
    const PaymentDone = ()=>{

        prompt()
        toast({
          title: 'Payment Successfull.',
        
          description: "Redirecting To Home Page.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate("/OrderSuccessfull")
        cartDataEmpty()

    }

    

  return (
    
    <>
    
    <VStack padding={5} spacing={5}  w={{base:"full", md:"1200px"}} margin="auto"  style={{marginTop:"220px"}} marginBottom="50px">

        <Text fontWeight="bold" fontSize="xl"  >Choose your payment method</Text>

        <Stack direction={{base:"column", md:"row"}} spacing={5}  >

           <VStack   align="flex-start" padding={5}  bg="#eeeeee"
           >

            <HStack  >
                <Image w={25} src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg" />
                <Text>Debit/Credit Card</Text>
            </HStack>
            
            <Divider/>

            
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/Group-1645705428.png" />
                <Text>WALLET</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/upi-icon-1645705429.png" />
                <Text>UPI</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/nb-icon-1645705428.png" />
                <Text>NET BANKING</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={25} src="https://images.bewakoof.com/web/cod-icon-1645705427.png" />
                <Text>CASH ON DELIVERY</Text>
            </HStack>
            
            <Divider/>


            </VStack>
 




            <VStack align="flex-start" spacing={5} padding={5}  >
             
           
             <VStack>
             <HStack>
             <FormControl  >
               <FormLabel>First Name</FormLabel>
               <Input size="sm" />
             
             </FormControl>
             <FormControl  >
               <FormLabel>Last Name</FormLabel>
               <Input size="sm" />
               
             </FormControl>
             </HStack>

             <FormControl  >
               <FormLabel>Address</FormLabel>
               <Input size="sm" />
              
             </FormControl>

             <HStack>
             <FormControl  >
               <FormLabel>City</FormLabel>
               <Input size="sm" />
             
             </FormControl>
             <FormControl  >
               <FormLabel>State</FormLabel>
               <Input type="city" size="sm" />
               
             </FormControl>
             </HStack>
             </VStack>

              
             <Divider/>
               
            <VStack>

                <HStack width="full" >
                 <FormControl  >
                   <FormLabel>Card Number</FormLabel>
                   <Input  size="sm" />
                 
                 </FormControl>

                 <FormControl >
                   <FormLabel>CVV</FormLabel>
                   <HStack width="full" >

                 <PinInput size="sm">
                   <PinInputField />
                   <PinInputField />
                   <PinInputField />
                 </PinInput>
               </HStack>
                   
                 </FormControl>

                 
                 </HStack>

                 <HStack>
             <FormControl  >
               <FormLabel>Exp MOnth</FormLabel>
               <Input size="sm" />
             
             </FormControl>
             <FormControl  >
               <FormLabel>Exp Year</FormLabel>
               <Input size="sm" />
               
             </FormControl>
             </HStack>

             <Button style={{marginTop:"20px"}}  onClick={PaymentDone} fontSize="x" padding={3} w="full" colorScheme='yellow'> PAY ₹{price} </Button>


               
            </VStack>



                          
            


             
             
             </VStack>
             
    
        
        </Stack>


    </VStack>
    
    </>
    
  )
}

export default PaymentForm
