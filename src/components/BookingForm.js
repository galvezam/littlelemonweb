import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Input, Select, Box, VStack, Button } from '@chakra-ui/react';
// import { Heading, Table, Th, Tr, Td, TableContainer, Thead, Tbody } from '@chakra-ui/react';

import "./styles.css";

const BookingForm = ({ availableTimes, dispatch, submitForm, bookingData }) => {
    const [date, setDate] = useState(bookingData.date || '');
    const [time, setTime] = useState(bookingData.time || '');
    const [name, setName] = useState(bookingData.name || '');
    const [email, setEmail] = useState(bookingData.email || '');
    const [guests, setGuests] = useState(bookingData.guests || 1);
    const [occasion, setOccasion] = useState(bookingData.occasion || '');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (date && time && name.length >= 3 && /\S+@\S+\.\S+/.test(email) && guests > 0) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [date, time, name, email, guests]);

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
    };

    const handleTimeChange = (e) => {setTime(e.target.value)};
    const handleNameChange = (e) => {setName(e.target.value)};
    const handleEmailChange = (e) => {setEmail(e.target.value)};
    const handleGuestChange = (e) => {setGuests(e.target.value)};
    const handleOccasionChange = (e) => {setOccasion(e.target.value)};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            const formData = { date, time, name, email, guests, occasion };
            submitForm(formData);
        }
    };

    return (
        <Box bg="gray.50" p={4} minH="100vh">
            <Box bg="white" maxW="lg" mx="auto" p={8} boxShadow="lg" rounded="lg">
                <VStack spacing={4}>
                    
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', width: '100%' }}>
                        <FormControl id="res-date" isRequired>
                            <FormLabel>Choose date</FormLabel>
                            <Input
                                type="date"
                                value={date}
                                onChange={handleDateChange}
                                focusBorderColor="teal.400"
                                size="lg"
                                required
                                aria-label="Choose date"
                            />
                        </FormControl>
                        <FormControl id="res-time" isRequired>
                            <FormLabel>Choose time</FormLabel>
                            <Select
                                value={time}
                                onChange={handleTimeChange}
                                focusBorderColor="teal.400"
                                size="lg"
                                required
                                aria-label="Choose time"
                            >
                                {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
                                    availableTimes.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No available times</option>
                                )}
                            </Select>
                        </FormControl>
                        <FormControl id="name" isRequired>
                            <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                    minlength="3"
                                    aria-label="Name"
                                />
                        </FormControl>
                        <FormControl  id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    focusBorderColor="teal.400"
                                    size="lg"
                                    required
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    aria-label="Email"
                                />
                        </FormControl>
                        <FormControl id="guests" isRequired>
                            <FormLabel>Guests</FormLabel>
                                <Input
                                    type="number"
                                    value={guests}
                                    onChange={handleGuestChange}
                                    required
                                    min="1"
                                    aria-label="Number of Guests"
                                />
                        </FormControl>
                        <FormControl  id="occasion" isRequired>
                            <FormLabel>Occasion</FormLabel>
                                <Input
                                    type="text"
                                    id="occasion"
                                    value={occasion}
                                    onChange={handleOccasionChange}
                                    aria-label="Occasion"
                                />
                        </FormControl>
                        
                            <Button 
                                type="submit" 
                                colorScheme="teal" 
                                isDisabled={!isFormValid}
                                aria-label="On Click"
                            >
                            Submit
                            </Button>
                        
                    </form>
                    
                </VStack>
            </Box>
        </Box>
    );
};

export default BookingForm;
