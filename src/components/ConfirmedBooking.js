// ConfirmedBooking.js
import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
    return (
        <Box bg="gray.50" p={4} minH="100vh" display="flex" justifyContent="center" alignItems="center">
            <Box bg="white" p={8} boxShadow="lg" rounded="lg" textAlign="center">
                <Heading as="h2" size="xl" mb={4} color="teal.500">Booking Confirmed!</Heading>
                <Text fontSize="lg" color="gray.600" mb={8}>
                    Thank you for your reservation. We look forward to serving you!
                </Text>
                <Button as={Link} to="/" colorScheme="teal">Go Back to Home</Button>
            </Box>
        </Box>
    );
};

export default ConfirmedBooking;
