
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    VStack,
    Heading,
    Text,
    useToast
} from '@chakra-ui/react';
import BreadCrumbs from '../components/BreadCrumbs';
import Footer from '../components/Footer';

const ContactUs = () => {
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: 'Message Sent.',
            description: "We will get back to you shortly.",
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <>
        <BreadCrumbs currentTab="Contact Us" />
        <Box

            p={10}
            minH="100vh"
        >
            <VStack spacing={8} maxW={{base:'100%',md:"700px"}} mx="auto" align="start">

                <Text fontSize="lg">We would love to hear from you! Please fill out the form below, and we’ll get in touch as soon as possible.</Text>

                <Box
                    as="form"
                    onSubmit={handleSubmit}
                    w="100%"
                    bg="white"
                    // p={6}
                    rounded="md"
                    // shadow="md"
                >
                    <FormControl id="name" isRequired mb={4}>
                        <FormLabel>Your Name</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your full name"
                            focusBorderColor="teal.500"
                        />
                    </FormControl>

                    <FormControl id="email" isRequired mb={4}>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            focusBorderColor="teal.500"
                        />
                    </FormControl>

                    <FormControl id="subject" mb={4}>
                        <FormLabel>Subject</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter the subject"
                            focusBorderColor="teal.500"
                        />
                    </FormControl>

                    <FormControl id="message" isRequired mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            placeholder="Type your message here"
                            size="sm"
                            focusBorderColor="teal.500"
                            rows={6}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        colorScheme="teal"
                        size="lg"
                        w={{base:"100%",md:'fit-content'}}
                    >
                        Send Message
                    </Button>
                </Box>
            </VStack>

            <Flex
                mt={12}
                justify="center"
                align="center"
                direction="column"
            >
                <Heading as="h3" size="lg" mb={4}>Our Location</Heading>
                <Box
                    w="100%"
                    maxW="900px"
                    h="400px"
                    bg="gray.200"
                    rounded="md"
                    shadow="md"
                >
                    {/* Embed a map iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.962396487246!2d144.9537363157148!3d-37.81720974202102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f54e4321%3A0x627ab2fd3126ff16!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1610679218783!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        style={{ border: 'none' }}
                        title="Our Location"
                    ></iframe>
                </Box>
            </Flex>
        </Box>
        <Footer />
        </>
    );
};

export default ContactUs;
