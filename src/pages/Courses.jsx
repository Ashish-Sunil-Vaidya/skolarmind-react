import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    Button,
    Link,
    List,
    ListItem,
    Divider,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import BreadCrumbs from "../components/BreadCrumbs";

export default function Courses() {
    const courses = [
        {
            title: "10th Grade - Maharashtra Board",
            description: "Live sessions, exam-oriented preparation, offline paper solving.",
            syllabus: [
                "Mathematics: Algebra, Geometry, Trigonometry",
                "Science: Physics, Chemistry, Biology",
                "Languages: English, Marathi, Hindi",
                "Social Studies: History, Geography",
            ],
        },
        {
            title: "CBSE 10th Grade",
            description: "Interactive classes with a focus on CBSE-specific curriculum and exams.",
            syllabus: [
                "Mathematics: Polynomials, Quadratic Equations",
                "Science: Acids, Bases, and Salts, Light, Electricity",
                "Languages: English, Hindi",
                "Social Science: Economics, Political Science",
            ],
        },
    ];

    const upcomingCourses = [
        {
            title: "11th Grade Science",
            tentativeDate: "April 2025",
        },
        {
            title: "CBSE 12th Grade",
            tentativeDate: "May 2025",
        },
    ];

    return (
        <>
        <BreadCrumbs currentTab="Courses" />
        <Box py={10} px={5} maxW="7xl" mx="auto">
            {/* Courses List */}
            <Heading textAlign="center" mb={8} fontSize="3xl">
                Courses List
            </Heading>

            {courses.map((course, index) => (
                <Box key={index} p={5} bg="gray.100" borderRadius="lg" mb={6}>
                    <Heading fontSize="2xl">{course.title}</Heading>
                    <Text mt={2} color="gray.600">
                        {course.description}
                    </Text>

                    {/* Syllabus Details */}
                    <Heading fontSize="lg" mt={4}>
                        Syllabus:
                    </Heading>
                    <List spacing={2} mt={2}>
                        {course.syllabus.map((topic, i) => (
                            <ListItem key={i} fontSize="md">
                                {topic}
                            </ListItem>
                        ))}
                    </List>

                    {/* WhatsApp Integration */}
                    <Link href="https://wa.me/your-number" isExternal>
                        <Button
                            leftIcon={<FaWhatsapp />}
                            colorScheme="green"
                            mt={4}
                        >
                            Enroll or Inquire on WhatsApp
                        </Button>
                    </Link>
                </Box>
            ))}

            {/* Divider */}
            <Divider my={8} />

            {/* Upcoming Courses */}
            <Heading textAlign="center" mb={8} fontSize="3xl">
                Upcoming Courses
            </Heading>
            <VStack spacing={6}>
                {upcomingCourses.map((course, index) => (
                    <Box key={index} p={5} bg="gray.50" borderRadius="lg" w="100%">
                        <Heading fontSize="2xl">{course.title}</Heading>
                        <Text fontSize="lg" color="gray.600">
                            Tentative Start Date: {course.tentativeDate}
                        </Text>
                    </Box>
                ))}
            </VStack>
        </Box></>
    );
}
