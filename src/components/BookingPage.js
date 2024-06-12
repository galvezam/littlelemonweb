import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes,  dispatch, submitForm, bookingData }) => {
    return (
        <Box bg="gray.50" p={4} minH="100vh">
            <Box bg="white" maxW="lg" mx="auto" p={8} boxShadow="lg" rounded="lg">
                <VStack spacing={4}>
                    <Heading as="h1" size="xl" color="teal.500">Reserve a Table</Heading>
                    <Text fontSize="lg" color="gray.600">
                        Please fill out the form below to book a table at Little Lemon.
                    </Text>
                    <BookingForm 
                        availableTimes={availableTimes} 
                        dispatch={dispatch} 
                        submitForm={submitForm} 
                        bookingData={bookingData} 
                    />
                </VStack>
            </Box>
        </Box>
    );
};

export default BookingPage;
