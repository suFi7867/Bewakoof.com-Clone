import { 
    VStack,StackDivider ,
    Box, 
    Grid, GridItem,HStack ,
    Input, InputGroup, InputLeftElement, Image, 

     Center, Text, Flex, Wrap, }

      from '@chakra-ui/react'

import { SearchIcon, CalendarIcon } from "@chakra-ui/icons"

import React from 'react'

import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'


const ss = () => {


    
  const activeStyle = {
    color:"black",
    backgroundColor:"#fdd835"
  };

  const defaultStyle = {
    color:"black",
    backgroundColor:"#fdd835"
  };
  


  
  return (
   
    <div className={styles.mainNav}  >
     <Wrap justify='center' >

       <div style={{width: "100%", backgroundColor:"#eeeeee"}} >
        
        <div className={styles.upHead} >
           
           <div>
            <div>Offers </div>
            <div>Fanbook </div>
            <div>Download App</div>
            <div>TriBe Membership</div>
           </div>

           <div>
            <div>Contact Us  </div>
            <div>Track Order </div>
          
           </div>
           
        </div>

       </div>

        <Grid className={styles.NavbarCss}  templateColumns='repeat(3, 20% 30% 40%)' gap={2} >
            
            <GridItem>
          
            <Link to="/">
                <Image width="80%"
                 src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                />
            </Link>
               

            </GridItem>

            <GridItem>

             <HStack  spacing='24px' >

                <Center  h='50px' >
                  <Link to="/men" > 
                  <Text 
                  fontWeight="extrabold" fontSize={"14px"} > MEN</Text> 
                  </Link>
                </Center>

                
                <Center padding="0px 20px" 

              //  style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
                    style={activeStyle}
                 h='50px' >
                  <Link   to="/women" >
                     <Text
                     fontWeight="extrabold" fontSize={"14px"} > WOMEN</Text> 
                     </Link>
                </Center>

                
                <Center  h='50px' >
                  <Link to="/mobile" > 
                  <Text 
                  fontWeight="extrabold" fontSize={"14px"} > MOBILE COVER</Text> </Link>
                </Center>
                      
              </HStack >

            </GridItem>

            <GridItem  style={{marginLeft: "180px"}} >

              <HStack  spacing='24px' >

              <InputGroup>
                 <InputLeftElement
                   pointerEvents='none'
                   children={<SearchIcon color='gray.300' />}
                   />
                 <Input w={300} placeholder='Search By Product' />
               </InputGroup>

               <Center h='50px' >
                  <Text fontWeight="extrabold" fontSize={"14px"} > |</Text> 
                </Center>

                  
                <Center h='50px' >
                  <Link  to="/login"  >
                     <Text
                      fontWeight="extrabold" fontSize={"14px"} > Login</Text> </Link>
                </Center>

                <Center h='50px' >
                    
                  <Link to="/cart"   > <CalendarIcon fontWeight="extrabold" fontSize={"20px"} > </CalendarIcon> </Link>

                </Center>

                
       

             </HStack>

            </GridItem>
              
        </Grid >

      
       
        
        </Wrap>
        <hr />

       

        <HStack justify="center" spacing='24px' >

                <Center  h='50px' >
                  <Link to="/" > 
                  <Text 
                  fontWeight="extrabold" fontSize={"20px"} > MEN</Text> 
                  </Link>
                </Center>

                
                <Center padding="0px 20px" 

              //  style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
                
                 h='50px' >
                  <Link   to="/landingPage/women" >
                     <Text
                     fontWeight="extrabold" fontSize={"20px"} > WOMEN</Text> 
                     </Link>
                </Center>

                
                <Center  h='50px' >
                  <Link to="/landingPage/accessories" > 
                  <Text
                  fontWeight="extrabold" fontSize={"20px"} > ACCESSORIES</Text> </Link>
                </Center>
                      
              </HStack >

             



    

    </div>

  )
}

export default ss
