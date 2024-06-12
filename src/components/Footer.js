import React from "react";
import {Box, Flex, HStack, Image, VStack} from "@chakra-ui/react";
import Logo2 from "../images/icons_assets/littlelemonlogo2.png";
import {Link as RouterLink} from "react-router-dom";


const Footer = () => {
  return (
    <Box 
        backgroundColor="#495E57"
        color="white"
        p={10}
        //marginTop="80px"
    >
        <HStack marginTop="40px"spacing={350} justify="space-between">
            
                <Image 
                    src={Logo2}
                    alt="Little Lemon"
                    //boxSize="100px"
                     width="400px"
                    objectFit="cover"
                    marginLeft="50px"
                /> 
             <HStack spacing={40} align="start" width="100%">
                <VStack spacing={10} align="center" color="white">
                    
                    {/* <Header as="h1" > Navigation </Header> */}
                    <h1>Navigation</h1>
                    <RouterLink to="/home" style={{ color: "white", textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Home</p>
                        </Box>
                    </RouterLink>
                    <RouterLink to="/about" style={{ color: "white", textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >About</p>
                        </Box>
                    </RouterLink>
                    <RouterLink to="/menu" style={{ color: "white", textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Menu</p>
                        </Box>
                    </RouterLink>
                    <RouterLink to="/order-online" style={{ color: "white", textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Order Online</p>
                        </Box>
                    </RouterLink>
                    <RouterLink to="/login" style={{ color: "white", textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Login</p>
                        </Box>
                    </RouterLink>
                </VStack>
                <VStack spacing={10} align="center" color="white">
                    <h1> Contact Us</h1>
                    <RouterLink to="/login" style={{ color: "white",textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Email</p>
                        </Box>
                    </RouterLink>
                    <RouterLink to="/login" style={{ color: "white",textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Call Us</p>
                        </Box>
                    </RouterLink>
                    <RouterLink to="/login" style={{ color: "white",textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Join Our Newsletter</p>
                        </Box>
                    </RouterLink>
                </VStack>
                <VStack spacing={10} align="center" color="white">
                    <h1>Social Media</h1>
                    <RouterLink to="/login" style={{ color: "white",textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Instagram</p>
                        </Box>
                    </RouterLink>
                    <RouterLink to="/login" style={{ color: "white",textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Facebook</p>
                        </Box>
                    </RouterLink>
                    <RouterLink to="/login" style={{ color: "white",textDecoration: "none" }}>
                        <Box 
                            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                        >
                            <p >Pinterest</p>
                        </Box>
                    </RouterLink>
                </VStack>
            </HStack>
        </HStack>
        <Box marginTop="40px">
      
            <Flex
                marginTop="30px"
                margin="0 auto"
                px={12}
                color="white"
                justifyContent="center"
                alignItems="center"
                //bg="#18181b"
                maxWidth="1024px"
                height={16}
            >
            <p>Little Lemon ••• © 2024</p>
            </Flex>
      
      </Box>
    </Box>
  );
};
export default Footer;