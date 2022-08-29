import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessfull = () => {



  const navigate = useNavigate();
  

  return (
    <div>
      <VStack margin="auto"  style={{marginTop:"100px", marginBottom:"80px",}} >
        <div>
          <img 
          
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>
       
        <Button width="50%"  style={{marginTop:"20px"}}  onClick={()=>navigate("/")} fontSize="x" padding={3} w="50%" colorScheme='yellow'> CONTINUE SHOPPING </Button>
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
