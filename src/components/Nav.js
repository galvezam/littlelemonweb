import { Box, HStack, Image, Spacer } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom"
import logo from "../images/icons_assets/littlelemonlogo.png"

const Nav = () => {
    return ( 
        <HStack 
            padding = {20} 
            spacing = {30}
            // fontFamily={"Markazi Text Medium"}
            fontWeight={"bolder"}
            
        >
             <RouterLink to="/">
                <Image src={logo} alt="Little Lemon Logo" width="300px" height="100px" />
            </RouterLink>
            <Spacer />
            
            <RouterLink to="/" style={{ color: "black", textDecoration: "none" }} 
                
            >
                <Box 
                    _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                >
                    <p >Home</p>
                </Box>
                
            </RouterLink>
            <RouterLink to="/about" style={{ color: "black", textDecoration: "none" }}>
                <Box 
                    _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                >
                <p>About</p>
                </Box>
            </RouterLink>
            <RouterLink to="/menu" style={{ color: "black", textDecoration: "none" }}>
                <Box 
                    _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                >
                <p>Menu</p>
                </Box>
            </RouterLink>
            <RouterLink to="/booking" style={{ color: "black", textDecoration: "none" }}>
                <Box 
                    _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                >
                <p>Reservations</p>
                </Box>
            </RouterLink>
            <RouterLink to="/order-online" style={{ color: "black", textDecoration: "none" }}>
                <Box 
                    _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                >
                <p>Order Online</p>
                </Box>
            </RouterLink>
            <RouterLink to="/login" style={{ color: "black", textDecoration: "none" }}>
                <Box 
                    _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
                >
                <p>Login</p>
                </Box>
            </RouterLink>  
        </HStack> 
    )
}
export default Nav;