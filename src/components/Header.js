import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import { Box, HStack } from "@chakra-ui/react"
// import scrollDirection from "./useScrollDirection";


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


  return (
    
    <Box
      position="fixed"

      top={isVisible ? 0 : -150}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="top"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#FFFFFF"
      zIndex={1000} 
    >
     
        <Nav />
      
    </Box>
                  
  );
};
export default Header;
