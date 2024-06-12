import {Link as RouterLink} from "react-router-dom"
import React from "react";
import {Box, VStack, Image, Button, HStack} from "@chakra-ui/react";
import RestaurantImage from "../images/icons_assets/restaurant.jpg"
import Mario_Adrian from "../images/icons_assets/Mario_and_Adrian_B.jpg"

const Chicago = () => {
    return (
        <Box
            className="call-to-action"
            backgroundColor="#FFFFFF"
            color="black"
            display="flex"
            alignItems="center"
            padding="50px"
            justifyContent="space-between"
            
            
        >
            <HStack spacing={10}>
            <VStack spacing={4} maxWidth="50%">
                <h1 style={{ color:"#F4CE14", fontSize: "30pt", margin: 0 }}>Little Lemon</h1>
                <h2 style={{fontSize: "22pt", margin: 0}}>Chicago</h2>
                <p style={{ align:"flex-start", fontSize: "18pt", margin: 0}}>
                    Located in the heart of Chicago, Little Lemon offers a variety of dishes with a modern twist.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, 
                    laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, 
                    auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula 
                    sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam 
                    vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur 
                    varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.
                </p>
            <RouterLink to="/about">
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
                        Learn More
                    </Button>
                    </Box>
                </RouterLink>
                </VStack>
                <Image 
                    src={RestaurantImage}
                    alt="Little Lemon Restaurant"
                    boxSize="400px"
                    width="500px"
                    objectFit="cover"
                    borderRadius="10px"
                    position="absolute"
                        
                        top="2000px"
                        right="10px"
                        zIndex="1"
                />
                <Image 
                    src={Mario_Adrian}
                    alt="Little Lemon Chefs"
                    boxSize="280px"
                    objectFit="cover"
                    borderRadius="10px"
                    position="absolute"
                        
                        top="2120px"
                        right="320px"
                        zIndex="2"
                />
                </HStack>
        </Box>

    /*
        <section className="chicago">
            <h2>Little Lemon Chicago</h2>
            <p>Located in the heart of Chicago, Little Lemon offers a variety of dishes with a modern twist.</p>
        </section>
        */
    );
};

export default Chicago;