import React from 'react';
import FoodCard from "./FoodCard";
import FullScreenSection from "./FullScreenSection";
import { Heading, HStack, VStack, Box, Button} from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";

const specials = [
  {
    name: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '$12.99',
    getImageSrc: () => require("../images/icons_assets/greek_salad.jpg"),
  },
  {
    name: 'Chicken Alfredo',
    description: 'Grilled chicken, creamy Alfredo sauce.',
    price: '$14.99',
    getImageSrc: () => require("../images/icons_assets/greek_salad.jpg"),
  },
  {
    name: 'Lemon Cake',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '$10.99',
    getImageSrc: () => require("../images/icons_assets/lemon_dessert.jpg")
  }
];

const styles = {
    section: {
      padding: '50px',
      textAlign: 'center'
    },
    h2: {
      fontSize: '2em',
      marginBottom: '20px'
    },
    ul: {
      listStyle: 'none',
      padding: '0'
    },
    li: {
      marginBottom: '40px'
    },
    h3: {
      fontSize: '1.5em',
      marginBottom: '10px'
    },
    p: {
      marginBottom: '10px',
      fontSize: '1.1em',
      lineHeight: '1.5'
    }
  };

const Specials = () => {
    return (
      <FullScreenSection
      backgroundColor="#FFFFFF"
      isDarkBackground
      p={10}
      alignItems="flex-start"
      spacing={"100px"}
      color="black"
      style={styles}
    >
      <VStack spacing={40} marginTop={30} mb={20}align="center">
          <Heading as="h1" id="specials-section">
            Specials
          </Heading>
      
      <HStack spacing={100} wrap="wrap" justify="center">
        {specials.map((special) => (
          <FoodCard
            key={special.name}
            name={special.name}
            description={special.description}
            price={special.price}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </HStack>
      <RouterLink to="/order-online">
        <Box 
          justify="center"
          _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
           >
          <Button 
                fontSize="17px"
                  padding="0.5em 2em"
                    border="transparent"
                       boxShadow="2px 2px 4px rgba(0,0,0,0.4)"
                       bg="#F4CE14"
                       
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
                       Order Online
                    </Button>
                    </Box>
            </RouterLink>
            </VStack>
      
    </FullScreenSection>
    
    );
  };
  export default Specials;
  /* 
      <section style={styles.section}>
        <h2 style={styles.h2}>Specials</h2>
        <ul style={styles.ul}>
          {specials.map((special, index) => (
            <li key={index} style={styles.li}>
              <Card 
                key={special.name}
                name={special.name}
                description={special.description}
                price={special.price}
                imageSrc={special.getImageSrc}
              />
              <h3 style={styles.h3}>{special.name}</h3>
              <p style={styles.p}>{special.description}</p>
              <p style={styles.p}>{special.price}</p>
            </li>
          ))}
        </ul>
      </section>
      */
  
  