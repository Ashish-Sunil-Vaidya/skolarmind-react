import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  IconButton,
  HStack,
  VStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <Box bg="teal.50" py={{ base: "10", md: "16" }} px={{ base: "5", md: "10" }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        alignItems={{ base: "center", md: "flex-start" }}
        spacing={{ base: 8, md: 16 }}
        maxW="7xl"
        mx="auto"
        px={4}
      >
        {/* Company Information */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Flex align="center">
            <Image src={logo} alt="Logo" width={{ base: "150px", md: "300px" }} />
          </Flex>
          <Text fontSize={{ base: "xs", md: "sm" }} textAlign={{ base: "center", md: "left" }}>
            Time Square Empire, Office NO 262, 263, Bhuj, Gujarat 370001, IN
          </Text>
          <HStack spacing={4}>
            <IconButton
              as={Link}
              href="#"
              icon={<FaFacebookF />}
              colorScheme="teal"
              variant="outline"
              isRound
              aria-label="Facebook"
              size={{ base: "sm", md: "md" }}
            />
            <IconButton
              as={Link}
              href="#"
              icon={<FaInstagram />}
              colorScheme="teal"
              variant="outline"
              isRound
              aria-label="Instagram"
              size={{ base: "sm", md: "md" }}
            />
            <IconButton
              as={Link}
              href="#"
              icon={<FaLinkedinIn />}
              colorScheme="teal"
              variant="outline"
              isRound
              aria-label="LinkedIn"
              size={{ base: "sm", md: "md" }}
            />
          </HStack>
        </VStack>

        {/* Useful Links */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
            Useful Links
          </Text>
          <Link href="#" fontSize={{ base: "sm", md: "sm" }}>
            Home
          </Link>
          <Link href="#" fontSize={{ base: "sm", md: "sm" }}>
            About Us
          </Link>
          <Link href="#" fontSize={{ base: "sm", md: "sm" }}>
            Photos
          </Link>
          <Link href="#" fontSize={{ base: "sm", md: "sm" }}>
            Videos
          </Link>
          <Link href="#" fontSize={{ base: "sm", md: "sm" }}>
            Contact Us
          </Link>
        </VStack>

        {/* Quick Links */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
            Quick Links
          </Text>
          <Link href="#" fontSize={{ base: "sm", md: "sm" }}>
            Admin Login
          </Link>
          <Link href="#" fontSize={{ base: "sm", md: "sm" }}>
            Terms & Conditions
          </Link>
          <Link href="#" fontSize={{ base: "sm", md: "sm" }}>
            Privacy Policy
          </Link>
        </VStack>

        {/* Contact Information */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
            Contact Information
          </Text>
          <HStack justify={{ base: "center", md: "flex-start" }}>
            <Icon as={FaPhone} color="teal.500" />
            <Text fontSize={{ base: "sm", md: "sm" }}>9876543210</Text>
          </HStack>
          <HStack justify={{ base: "center", md: "flex-start" }}>
            <Icon as={MdEmail} color="teal.500" />
            <Text fontSize={{ base: "sm", md: "sm" }}>eschool@gmail.com</Text>
          </HStack>
          <HStack justify={{ base: "center", md: "flex-start" }}>
            <Icon as={FaMapMarkerAlt} color="teal.500" />
            <Text fontSize={{ base: "xs", md: "sm" }} textAlign={{ base: "center", md: "left" }}>
              Time Square Empire, Office NO 262, 263, Bhuj, Gujarat 370001, IN
            </Text>
          </HStack>
        </VStack>
      </Stack>

      {/* Copyright Section */}
      <Box borderTopWidth="1px" mt="8" pt="4" textAlign="center">
        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
          Copyright © 2025{" "}
          <Text as="span" fontWeight="bold">
            Skolarmind
          </Text>
          . All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
