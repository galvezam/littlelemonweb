import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faOpencart
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../images/icons_assets/littlelemonlogo.png"
import { Box, HStack, Link, Icon, Image } from "@chakra-ui/react";
import Nav from "./Nav";


const socials = [
  {
    icon: faEnvelope,
    url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKpGkRRGwgJCPjdsCTGWbjchXSvPPlTskhSCTftKcTZGZjnqKCJzZSmJsWbqcPLjFmxdq",
  },
  {
    icon: faOpencart,
    url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKpGkRRGwgJCPjdsCTGWbjchXSvPPlTskhSCTftKcTZGZjnqKCJzZSmJsWbqcPLjFmxdq",  
  }
 
];


const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

/*
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
        block: "start",
      });
      

    }
  };
  */

  return (
    <Box color="white" backgroundColor={"white"} maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          
        <nav>
            <HStack spacing={100}>
                
                <Nav color="black"/>
            </HStack>
            
        </nav>
          
        </HStack>
      </Box>
    
  );
};
export default Header;
