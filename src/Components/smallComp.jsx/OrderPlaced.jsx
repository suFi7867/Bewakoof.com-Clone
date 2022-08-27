import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessfull = () => {

  const navigate = useNavigate();

  return (
    <>
      <VStack margin="auto" width={500} style={{marginTop:"160px"}} >
        <div>
          <img 
          
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>
       
        <Button  style={{marginTop:"20px"}}  onClick={()=>navigate("/")} fontSize="x" padding={3} w="50%" colorScheme='yellow'> CONTINUE SHOPPING </Button>
      </VStack>
    </>
  );
};

export default OrderSuccessfull;
