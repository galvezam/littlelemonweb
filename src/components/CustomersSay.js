import React from 'react';
import { Box, HStack, Text, VStack, Heading, Avatar } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const CustomersSay = () => {
    const testimonials = [
        { id: 1, name: "Bob Jones", rating: 5, review: "Excellent!", avatarSrc: "https://i.pravatar.cc/150?img=11" },
        { id: 2, name: "Miller Grove", rating: 4, review: "Very good!", avatarSrc: "https://i.pravatar.cc/150?img=12" },
        { id: 3, name: "Richard Holmes", rating: 5, review: "Loved it!", avatarSrc: "https://i.pravatar.cc/150?img=13" },
    ];

    return (
        <Box bg="#495E57" p={60} textAlign="center">
            <Heading as="h1" size="xl" mb={60} color="#F4CE14">Customer Ratings</Heading>
            <HStack spacing={60} wrap="wrap" justify="center" >
                {testimonials.map((testimonial) => (
                    <Box
                        key={testimonial.id}
                        borderWidth="1px"
                        borderRadius="10px"
                        overflow="hidden"
                        boxShadow="md"
                        p={10}
                        backgroundColor="white"
                        width="240px"
                        textAlign="left"
                    >
                        <VStack spacing={4}>
                            <Avatar name={testimonial.name} src={testimonial.avatarSrc} borderRadius="10px"size="xl" />
                            <Heading size="md">{testimonial.name}</Heading>
                            <HStack spacing={1}>
                                {Array(5)
                                    .fill("")
                                    .map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            color={i < testimonial.rating ? "yellow" : "grey"}
                                        />
                                    ))}
                            </HStack>
                            <Text>{testimonial.review}</Text>
                        </VStack>
                    </Box>
                ))}
            </HStack>
        </Box>
    );
};

export default CustomersSay;
