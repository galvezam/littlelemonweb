import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Select, Box, Heading, VStack, Text } from '@chakra-ui/react';

const BookingForm = ({ availableTimes, dispatch }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    return (
        <Box bg="gray.50" p={4} minH="100vh">
            <Box bg="white" maxW="lg" mx="auto" p={8} boxShadow="lg" rounded="lg">
                <VStack spacing={4}>
                    
                    <form style={{ display: 'grid', gap: '20px', width: '100%' }}>
                        <FormControl id="res-date">
                            <FormLabel>Choose date</FormLabel>
                            <Input
                                type="date"
                                value={date}
                                onChange={handleDateChange}
                                focusBorderColor="teal.400"
                                size="lg"
                            />
                        </FormControl>
                        <FormControl id="res-time">
                            <FormLabel>Choose time</FormLabel>
                            <Select
                                value={time}
                                onChange={handleTimeChange}
                                focusBorderColor="teal.400"
                                size="lg"
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
                    </form>
                </VStack>
            </Box>
        </Box>
    );
};

export default BookingForm;
