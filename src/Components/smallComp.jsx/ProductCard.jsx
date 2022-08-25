import { Badge, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import HoverImage from "react-hover-image";

//  <HoverImage src={yourFile} hoverSrc={yourFileHover} />

const ProductCard = ({
    id,
Display_image,
hover_Image,
Title,
price,
strikeprice,
moreImage,
}) => {


    console.log(Display_image, hover_Image)
 
    // import HoverImage from "react-hover-image";

//  <HoverImage src={yourFile} hoverSrc={yourFileHover} />

  return (
    <div  >
      
      <HoverImage src={Display_image} hoverSrc={hover_Image} />
      
      <VStack align="revert-layer">
        <Text  >Bewakoof</Text>
        <Text>{Title}</Text>
        <Flex>
        <Text fontWeight="bold" fontSize="2xl" >₹{price}</Text>
       
        <Text as="s" marginLeft={4} >₹{strikeprice}</Text>
        </Flex>

        <Badge variant="subtle" colorScheme="teal"> ₹{price - 50} for tribe members   </Badge>
       </VStack>
      
     
    </div>
  )
}

export default ProductCard
