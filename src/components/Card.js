import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    return (
        <Box
        bg="white"
        color="black"
        borderRadius="15px"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
            transform: "scale(1.05)",
            boxShadow: "xl",
            cursor: "pointer"
        }}
        overflow="hidden"
        width="100%"
        position="relative"
        zIndex="1"
        >
        <Image
            src={imageSrc}
            alt={title}
            roundedTop="15px"
            width="100%"
            height="200px"
            objectFit="cover"
            transition="transform 0.5s ease"
            _hover={{
            transform: "scale(1.1)"
            }}
        />
        
        <VStack 
            spacing={3} 
            align="start" 
            p={4}
            position="relative"
        >
            <Heading size="md" noOfLines={1}>{title}</Heading>
            <Text 
            fontWeight="light" 
            noOfLines={3}
            color="gray.600"
            >
            {description}
            </Text>
            <HStack spacing={2} mt={2}>
            <Text 
                fontWeight="semibold" 
                color="blue.500"
                transition="color 0.2s ease"
                _hover={{
                color: "blue.600"
                }}
            >
                See More
                <FontAwesomeIcon 
                icon={faArrowRight} 
                style={{ 
                    paddingLeft: "5px",
                    transition: "transform 0.2s ease"
                }}
                className="arrow-icon"
                />
            </Text>
            </HStack>
        </VStack>
        </Box>
    );
};

export default Card;


