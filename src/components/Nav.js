import { Box, HStack, Link, Icon, Image, Spacer } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom"
import logo from "../images/icons_assets/littlelemonlogo.png"

const Nav = () => {
    return ( 
        <HStack 
            padding = {20} 
            spacing = {30}
            fontFamily={"Markazi Text Medium"}
            fontWeight={"bolder"}
        >
             <RouterLink to="/">
                <Image src={logo} alt="Little Lemon Logo" width="300px" />
            </RouterLink>
            <Spacer/>
            <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
                <p>Home</p>
            </RouterLink>
            <RouterLink to="/about" style={{ color: "black", textDecoration: "none" }}>
                <p>About</p>
            </RouterLink>
            <RouterLink to="/menu" style={{ color: "black", textDecoration: "none" }}>
                <p>Menu</p>
            </RouterLink>
            <RouterLink to="/booking" style={{ color: "black", textDecoration: "none" }}>
                <p>Reservations</p>
            </RouterLink>
            <RouterLink to="/order-online" style={{ color: "black", textDecoration: "none" }}>
                <p>Order Online</p>
            </RouterLink>
            <RouterLink to="/login" style={{ color: "black", textDecoration: "none" }}>
                <p>Login</p>
            </RouterLink>  
        </HStack> 
        /* 
        <Box as="nav" padding="20px 22px" boxShadow="md">
        <HStack spacing={120}>
            <Image src={logo} alt="Little Lemon Logo" boxSize={80} width={300} height={120}/>
            <Spacer />
            <HStack 
                as="ul" 
                spacing={30} 
                justifyContent="space-evenly" 
                listStyleType="none" 
                margin = "64px"
                fontFamily={"Markazi Text Medium"}
                fontWeight={"bolder"}
                >
                <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
                    <li>Home</li>
                </RouterLink>
                <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
                    <li>About</li>
                </RouterLink>
                <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
                    <li>Menu</li>
                </RouterLink>
                <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
                    <li>Reservations</li>
                </RouterLink>
                <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
                    <li>Order Online</li>
                </RouterLink>
                <RouterLink to="/" style={{ color: "black", textDecoration: "none" }}>
                    <li>Login</li>
                </RouterLink>
            </HStack>
        </HStack>
    </Box>
    */
    )
}
export default Nav;