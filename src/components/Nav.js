import { Box, HStack, Link, Icon, Image, Spacer } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom"
import logo from "../images/icons_assets/littlelemonlogo.png"

const Nav = () => {
    return (   
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
    )
}
export default Nav;