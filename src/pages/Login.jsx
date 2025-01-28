import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Image,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Link,
    Text,
    InputGroup,
    InputRightElement,
    HStack,
    IconButton,

} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import loginnbg from '/login.jpg';
import logo from '../assets/logo.png';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <Box w='100svw' h='100svh' bgImage={loginnbg} bgSize='cover'>
            {/* Modal Overlay */}
            <Modal isOpen={true} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login to Your Account</ModalHeader>
                    <ModalBody>
                        {/* Login Form inside Modal */}
                        <Box p={5}>
                            {/* Logo Section */}
                            <Image src={logo} alt="Logo" mx="auto" w="200px" mb={4} />

                            {/* Login Form */}
                            <VStack spacing={4} as="form">
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" placeholder="Enter your email" />
                                </FormControl>

                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                        />
                                        <InputRightElement>
                                            <IconButton
                                                variant="ghost"
                                                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                                onClick={togglePasswordVisibility}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <Link alignSelf="flex-end" fontSize="sm" color="blue.600">
                                    Forgot password?
                                </Link>

                                <Button colorScheme="blue" width="100%">
                                    Login
                                </Button>
                            </VStack>

                            {/* Divider and Demo Credentials */}
                            <Box textAlign="center" mt={8} mb={4}>
                                <Text fontSize="sm" color="gray.500">Demo Credentials</Text>
                            </Box>

                            {/* Demo Buttons */}
                            <HStack justify="center" spacing={4}>
                                <Button colorScheme="teal" size="sm">
                                    Super Admin
                                </Button>
                                <Button colorScheme="red" size="sm">
                                    Teacher
                                </Button>
                                <Button colorScheme="blue" size="sm">
                                    Staff
                                </Button>
                            </HStack>
                        </Box>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Login;
