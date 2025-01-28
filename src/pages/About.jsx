import BreadCrumbs from "../components/BreadCrumbs";
import { Box, Grid, GridItem, Heading, Text, Avatar, Icon,Flex,VStack,Image } from "@chakra-ui/react";
import { AboutSection } from "./Home";
import { FaGithub, FaCalendarAlt, FaSmile } from "react-icons/fa";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <BreadCrumbs />
            <AboutSection />
            <ServicesSection />
            <StatsSection />
            <TestimonialsSection />
            <DirectorSection />
            <Footer />
        </>
    )
}


export function ServicesSection() {
    return (
        <Box bg="gray.100" py={10} px={{
            base: 4, md: 20
        }}>
            <Heading textAlign="center" mb={6} fontSize="3xl">
                Our Services
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                <GridItem>
                    <Box bg="white" p={6} rounded="lg" shadow="md">
                        <Heading fontSize="xl" mb={4}>
                            10th and CBSE Batches
                        </Heading>
                        <Text fontSize="md">
                            Special batches designed to cater to students of 10th grade and CBSE board,
                            focusing on structured learning, key concepts, and regular assessments.
                        </Text>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg="white" p={6} rounded="lg" shadow="md">
                        <Heading fontSize="xl" mb={4}>
                            Offline Exam Paper Solving
                        </Heading>
                        <Text fontSize="md">
                            Intensive offline exam paper-solving sessions that help students get hands-on
                            practice with previous papers and improve their time management and accuracy.
                        </Text>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg="white" p={6} rounded="lg" shadow="md">
                        <Heading fontSize="xl" mb={4}>
                            Live Classes
                        </Heading>
                        <Text fontSize="md">
                            Live, interactive classes with experienced teachers providing personalized
                            attention, allowing students to learn in a dynamic and engaging environment.
                        </Text>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}

export function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Rohit Sharma',
            role: '10th Grade Student',
            message: 'The offline exam paper-solving sessions really helped me improve my time management and problem-solving skills!',
            avatar: '/path/to/student1.jpg' // replace with actual path to the image
        },
        {
            name: 'Anjali Desai',
            role: 'CBSE Batch Teacher',
            message: 'It’s always a joy teaching students in live classes. The interactive sessions make learning fun and effective!',
            avatar: '/path/to/teacher1.jpg' // replace with actual path to the image
        },
        {
            name: 'Priya Singh',
            role: 'CBSE Batch Student',
            message: 'The live classes were so helpful, and the teachers provided personal attention to ensure we understood every concept.',
            avatar: '/path/to/student2.jpg' // replace with actual path to the image
        }
    ];

    return (
        <Box py={10} px={5}>
            <Heading textAlign="center" mb={6} fontSize="3xl">
                Happy Students & Teachers
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                {testimonials.map((testimonial, index) => (
                    <GridItem key={index}>
                        <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
                            <Avatar size="xl" src={testimonial.avatar} mb={4} />
                            <Heading fontSize="lg" mb={2}>{testimonial.name}</Heading>
                            <Text fontSize="sm" color="gray.500" mb={4}>{testimonial.role}</Text>
                            <Text fontSize="md" fontStyle="italic">{testimonial.message}</Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
}


export function ProjectsSection() {
    const testimonials = [
        {
            name: 'Rohit Sharma',
            role: '10th Grade Student',
            message: 'The offline exam paper-solving sessions really helped me improve my time management and problem-solving skills!',
            avatar: '/path/to/student1.jpg' // replace with actual path to the image
        },
        {
            name: 'Anjali Desai',
            role: 'CBSE Batch Teacher',
            message: 'It’s always a joy teaching students in live classes. The interactive sessions make learning fun and effective!',
            avatar: '/path/to/teacher1.jpg' // replace with actual path to the image
        },
        {
            name: 'Priya Singh',
            role: 'CBSE Batch Student',
            message: 'The live classes were so helpful, and the teachers provided personal attention to ensure we understood every concept.',
            avatar: '/path/to/student2.jpg' // replace with actual path to the image
        }
    ];

    return (
        <Box as='section'>

            {/* Testimonials Section */}
            <Box className="testimonials" py={10} px={5}>
                <Heading fontSize="3xl" textAlign="center" mb={6}>Happy Students & Teachers</Heading>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {testimonials.map((testimonial, index) => (
                        <GridItem key={index}>
                            <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
                                <Avatar size="xl" src={testimonial.avatar} mb={4} />
                                <Heading fontSize="lg" mb={2}>{testimonial.name}</Heading>
                                <Box fontSize="sm" color="gray.500" mb={4}>{testimonial.role}</Box>
                                <Box fontStyle="italic">{testimonial.message}</Box>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export function StatsSection() {

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once when it comes into view
        threshold: 0.1,    // Percentage of visibility required to trigger (10%)
    });
    const stats = [
        {
            icon: FaSmile,
            value: 200,
            label: 'Happy Students'
        },
        {
            icon: FaCalendarAlt,
            value: 5,
            label: 'Years of Experience'
        },
        {
            icon: FaSmile,
            value: 50,
            label: 'Happy Clients'
        }
    ];

    return (
        <Box
            py={10}
            px={5}
            ref={ref}
        >
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                gap={6}
                borderRadius="lg"
                py={8}
                px={4}
                alignItems="center"
            >
                {stats.map((stat, index) => (
                    <GridItem key={index} textAlign="center" color="teal">
                        <Icon as={stat.icon} w={10} h={10} mb={4} />
                        {inView && <Heading fontSize="2xl"><CountUp duration={10} end={stat.value} />+</Heading>}
                        <Text fontSize="lg">{stat.label}</Text>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
}

export function DirectorSection() {
    return (
        <Box py={10} px={5} bg="gray.50">
            <Heading textAlign="center" mb={8} fontSize="3xl">
                Our Director
            </Heading>

            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="center"
                bg="white"
                borderRadius="lg"
                shadow="lg"
                p={6}
                maxW="4xl"
                mx="auto"
            >
                {/* Director's Image */}
                <Image
                    borderRadius="full"
                    boxSize={{ base: "150px", md: "200px" }}
                    src="/path-to-director-image.jpg" // Replace with actual path
                    alt="Director's Photo"
                    objectFit="cover"
                    mr={{ md: 6 }}
                    mb={{ base: 4, md: 0 }}
                />

                {/* Director's Details */}
                <VStack align="start" spacing={4}>
                    <Heading fontSize="2xl">John Doe</Heading>
                    <Text fontSize="md" color="gray.600">
                        Director of XYZ Academy
                    </Text>
                    <Text fontSize="lg" color="gray.700">
                        "At XYZ Academy, we believe in the power of education to transform
                        lives. Our mission is to provide students with the tools they need
                        to excel in their academic journey and beyond."
                    </Text>
                </VStack>
            </Flex>
        </Box>
    );
}

export default About;