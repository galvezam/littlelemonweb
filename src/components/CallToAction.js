import {Link as RouterLink} from "react-router-dom"
import React from "react";
import {Box, VStack, Image, Button} from "@chakra-ui/react";
import Food from "../images/icons_assets/restaurantfood.jpg";

const CallToAction = () => {
    return (
        <Box
            className="call-to-action"
            backgroundColor="#495E57"
            color="white"
            display="flex"
            alignItems="center"
            marginTop="140px"
            padding="60px"
            justifyContent="space-between"
            
            
        >
            <VStack spacing={4} maxWidth="50%">
                <h1 style={{ color:"#F4CE14", fontSize: "30pt", margin: 0 }}>Welcome to Little Lemon</h1>
                <h2 style={{justifyContent: "left", fontSize: "22pt", margin: 0}}>Chicago</h2>
                <p style={{ fontSize: "18pt", margin: 20 }}>
                    Your favorite place to dine! We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <RouterLink to="/booking">
                    <Box 
                        _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                    >
                    <Button 
                         fontSize="17px"
                         padding="0.5em 2em"
                         border="transparent"
                         boxShadow="2px 2px 4px rgba(0,0,0,0.4)"
                         bg = "#F4CE14"
                         color="white"
                         borderRadius="4px"
                         _hover={{
                            background: "linear-gradient(90deg, rgba(255, 206, 20, 1) 0%, rgba(255, 234, 0, 1) 100%)"
                            /*background: "linear-gradient(90deg, rgba(30,144,255,1) 0%, rgba(0,212,255,1) 100%)"*/
                         }}
                         _active={{
                            transform: "translate(0em, 0.2em)"
                         }}
                         mt="auto"
                         
                         >
                        Make a Reservation
                    </Button>
                    </Box>
                </RouterLink>
            </VStack>
            <Image
                src={Food}
                alt="Little Lemon Food"
                boxSize="400px"
                objectFit="cover"
                borderRadius="10px"
            />
        </Box>
    );
};

export default CallToAction;