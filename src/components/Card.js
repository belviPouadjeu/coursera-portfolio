import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    return (
        <VStack
        spacing={4}
        align="start"
        backgroundColor="white"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.03)" }}
        >
        <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="200px" />
        <Box p={4}>
            <Heading as="h3" size="md" mb={2}>
            {title}
            </Heading>
            <Text mb={4}>{description}</Text>
            <HStack spacing={2} color="teal.500" fontWeight="semibold">
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} />
            </HStack>
        </Box>
        </VStack>
    );
};

export default Card;
