import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "",
            comment: "",
        },
        onSubmit: (values) => {
            submit("/api/form", values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("First name is required")
                .min(2, "First name must be at least two characters"),
            email: Yup.string()
                .required("Email is required")
                .email("Invalid email address"),
            type: Yup.string()
                .required("Type is required.")
                .oneOf(["hireMe", "openSource", "other"], "Invalid type"),
            comment: Yup.string()
                .required("Comment is required.")
                .min(10, "Comment must be at least ten characters"),
        }),
    });

    useEffect(() => {
        if (!response) return;

        if (response.type === "success") {
            onOpen("success", `Thanks ${formik.values.firstName}! ${response.message}`);
            formik.resetForm();
        } else if (response.type === "error") {
            onOpen("error", response.message);
        }
    }, [response]);

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack
                w={{ base: "100%", md: "80%", lg: "1024px" }}
                px={{ base: 4, md: 8, lg: 32 }}
                py={{ base: 8, md: 16 }}
                alignItems="flex-start"
            >
                <Heading as="h1" id="contactme-section" fontSize={{ base: "2xl", md: "4xl" }}>
                    Contact me
                </Heading>
                <Box p={{ base: 4, md: 6 }} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    size={{ base: "sm", md: "md" }}
                                    {...formik.getFieldProps("firstName")}
                                />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    size={{ base: "sm", md: "md" }}
                                    {...formik.getFieldProps("email")}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
                                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                <Select 
                                    id="type" 
                                    name="type" 
                                    color="black" 
                                    width="100%"
                                    size={{ base: "sm", md: "md" }}
                                    borderRadius="md"
                                    borderColor="gray.300"
                                    _hover={{ borderColor: "gray.400" }}
                                    _focus={{ 
                                        borderColor: "purple.500",
                                        boxShadow: "0 0 0 1px #805AD5"
                                    }}
                                    {...formik.getFieldProps("type")}
                                >
                                    <option value="">Select an option</option>
                                    <option value="hireMe">Freelance project proposal</option>
                                    <option value="openSource">Open source consultancy session</option>
                                    <option value="other">Other</option>
                                </Select>
                                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                                <FormLabel htmlFor="comment">Your message</FormLabel>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={{ base: "200px", md: "250px" }}
                                    size={{ base: "sm", md: "md" }}
                                    {...formik.getFieldProps("comment")}
                                />
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                            </FormControl>

                            <Button
                                type="submit"
                                colorScheme="purple"
                                width="full"
                                size={{ base: "sm", md: "md" }}
                                isLoading={isLoading}
                            >
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default LandingSection;