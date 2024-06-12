import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";

const FoodCard = ({ name, description, price, imageSrc}) => {
    return (
    <RouterLink to="/menu" style={{ textDecoration: 'none' }}>
        <Box
            borderWidth="1px"
            borderRadius="10px"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
            cursor="pointer"
            width="250px"
            margin="10px"
            height="400px"
            bg="#EDEFEE"
            display="flex"
            flexDirection="column"
            color="black"
        >
        
        <Image 
            src={imageSrc} 
            alt={name} 
            objectFit="cover"
            borderTopRadius="10px"
            width="100%"
            height="200px"
            />
        <Box p ={4} flex="1" display="flex" flexDirection="column" justifyContent="space-between">
        <VStack align="start" spacing={3}>
            <Heading size="md">{name}</Heading>
            <Text noOfLines={3}>{description}</Text>
            <HStack justify="space-between" width="100%" mt={4}>
                <Text fontWeight="bold" color="#49SE57">{price}</Text>
                <Text fontWeight="bold" color="#F4CE14">Order Now</Text>
            </HStack>
        </VStack>
        </Box>
        
        </Box>
    </RouterLink>
    )
}
export default FoodCard;