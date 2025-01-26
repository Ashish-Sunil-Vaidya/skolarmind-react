import Carousel from "../components/Carousel";
import { Box, Button, Flex, Heading, Text, Stack, Image, SimpleGrid, Grid, VStack, Center, HStack } from "@chakra-ui/react";
import logo from "../assets/logo.png"
import bg1 from '/bg1.png'
import certf from '/certificate.svg'
import { keyf } from "../../public/keyf";
import slides from "../../public/slides";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import PhotoGrid from "../components/PhotoGrid";
import ctabg from '/CTAbg.png'
import { base } from "framer-motion/client";


const Home = () => {
    const carouselData = [
        {
            caption: "First Slide",
            text: "This is the first slide",
            img: slides[0]
        },
        {
            caption: "Second Slide",
            text: "This is the second slide",
            img: slides[1]
        },
        {
            caption: "Third Slide",
            text: "This is the third slide",
            img: slides[2]
        },
        {
            caption: "Fourth Slide",
            text: "This is the fourth slide",
            img: slides[3]
        }
    ];
    return (
        <>
            <Carousel data={carouselData} w="fit" h="fit" />
            <AboutSection />
            <CourseHighlights />
            <KeyFeatures />
            <CTA />
            <Footer />
        </>
    )
}

export const AboutSection = () => {
    const images = [
        {
            caption: "First Slide",
            text: "This is the first slide",
            img: "https://picsum.photos/640/480"
        },
        {
            caption: "Second Slide",
            text: "This is the second slide",
            img: "https://picsum.photos/640/480"
        },
        {
            caption: "Third Slide",
            text: "This is the third slide",
            img: "https://picsum.photos/640/480"
        }
    ];

    const features = [
        {
            title: "Experienced Instructors",
            description: "Our instructors are industry experts with years of experience in their respective fields.",
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
        },
        {
            title: "Comprehensive Curriculum",
            description: "Our curriculum is designed to cover all aspects of the subject matter, ensuring a thorough understanding.",
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
        },
        {
            title: "Flexible Learning",
            description: "We offer flexible learning options to suit your schedule, including online and offline classes.",
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
        },
        {
            title: "Student Support",
            description: "Our dedicated support team is always available to assist you with any queries or concerns.",
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
        },
    ];




    return (
        <Box position="relative" p={{ base: "50px", md: "100px" }}  display='flex'>
            <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                <Box flex={1} mr={{ md: 10 }} mb={{ base: 10, md: 0 }}>
                    <Stack spacing={4}>
                        <Image w={{ base: "250px", md: "350px" }} src={logo} alt="About Us" />
                        <Heading as="h2" size={{ base: "lg", md: "xl" }}>
                            Cutting-Edge Education That Empowers
                        </Heading>
                        <Box fontSize={{ base: "md", md: "lg" }}>
                            <Box>We are a leading online education platform dedicated to providing accessible and high-quality learning experiences for students of all ages.
                                With a commitment to innovation and excellence, we offer a diverse range of courses taught by expert educators from around the globe. Our mission
                                is to empower learners to reach their full potential through interactive and engaging educational content, tailored to individual needs and
                                learning styles. Join us on the journey of learning with us.</Box>
                            <Button mt={5} variant="outline" colorScheme="teal" size="md" p={5}>
                                Read More &rarr;
                            </Button>
                        </Box>
                    </Stack>
                </Box>

                <PhotoGrid />
            </Flex>
        </Box>
    );
};

export const CourseHighlights = () => {
    const courses = [
        {
            title: "Web Development",
            description: "Learn the latest web development technologies and frameworks.",
            img: "https://picsum.photos/200/150",
        },
        {
            title: "Data Science",
            description: "Master data analysis, visualization, and machine learning techniques.",
            img: "https://picsum.photos/200/150",
        },
        {
            title: "Digital Marketing",
            description: "Understand digital marketing strategies and tools to grow your business.",
            img: "https://picsum.photos/200/150",
        },
        {
            title: "Graphic Design",
            description: "Create stunning graphics and visual content using industry-standard tools.",
            img: "https://picsum.photos/200/150",
        },
    ];

    return (
        <Box position="relative" p={{
            base: "30px", md: "100px"
        }}  minh="100svh" display='flex'>
            <Image position='absolute' width="200px" src={bg1} alt="BG1" opacity={.2} />
            <Image zIndex={0} position='absolute' width="100px" right={{
                base: '0', md: '200'
            }} bottom={{
                base: '0', md: '200px'
            }} src={certf} opacity={.2} alt="Certificate" />
            <Flex direction="column" align="center" justify="center" w="full">
                <Box w="fit" h="fit" position='relative' fontSize="24px" color="teal" width="fit-content">
                    Course Highlights
                </Box>
                <Heading as="h3" size="lg" mb={6} textAlign="center">
                    Explore Our Courses
                </Heading>
                <Text fontSize="lg" mb={6} textAlign="center">
                    Discover a variety of courses designed to help you achieve your learning goals.
                </Text>
                <SimpleGrid columns={[1, 1, 2, 4]} spacing={5} w="full" zIndex={1}>
                    {courses.map((course, index) => (
                        <Box key={index} borderWidth="1px" overflow="hidden" bg="white" >
                            <Image w="full" objectFit='cover' src={course.img} alt={course.title} />
                            <Box p={6}>
                                <Heading as="h4" size="md" mb={2}>
                                    {course.title}
                                </Heading>
                                <Text fontSize="sm" color="gray.600">
                                    {course.description}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
}


export const KeyFeatures = () => {

    const FeatureCard = ({ i, title, description, imageUrl }) => {
        const alignImage = i % 2 === 0 ? {
            left: '-50%',
            top: '0',
        } : {
            right: '-50%',
            top: '0',
        };
        return (
            <Box position='relative' w={{ base: "full", md: "60%" }}>
                <Image zIndex={0} position='absolute' {...alignImage} width="500px" opacity={.2} src={keyf[i]} alt="E-Learning" />
                <Flex
                    zIndex={1}
                    bg="white"
                    w="full"
                    overflow="hidden"
                    borderWidth="1px"
                    position="relative"
                    flexDir={{ base: 'column', md: i % 2 === 0 ? 'row' : 'row-reverse' }}

                >
                    <Image src={imageUrl} zIndex={0} width="100%" height="100%" position="absolute" />
                    <Box zIndex={1} bg="rgb(255,255,255,.9)" width={{ base: 'full', md: '60%' }}  height={{
                        base: '60%', md: 'full'
                    }} p="10" shadow="0 0 100px 120px rgb(255,255,255,.9)">
                        <Heading size="lg" mb="2">
                            {title}
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            {description}
                        </Text>
                        <Button mt="4" colorScheme="teal" size="md" ml={
                            i % 2 === 0 ? '0' : 'auto'
                        }>
                            Learn More
                        </Button>
                    </Box>
                </Flex>
                <Center mt={5} height='50px'>
                    <Box w="2px" height="full" bg="teal">

                    </Box>
                </Center>
            </Box>

        );
    };

    const features = [
        {
            title: "Live Classes",
            description:
                "Engage with instructors in real-time through interactive live classes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageUrl: "https://picsum.photos/200/150",
        },
        {
            title: "Offline Exam Paper Solving",
            description:
                "Practice and solve exam papers offline to enhance your preparation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageUrl: "https://picsum.photos/200/150",
        },
        {
            title: "Live Paper-Solving Sessions",
            description:
                "Join live sessions where instructors solve exam papers and provide insights. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageUrl: "https://picsum.photos/200/150",
        },
    ];

    return (
        <Box  py="10" px="5" overflow='hidden'>

            <Heading color="teal" as="h2" textAlign="center" mb="8" fontSize="4xl">
                What Sets Us Apart?
            </Heading>
            <Center height='50px' mb={5}>
                <Box w="2px" height="full" bg="teal">

                </Box>
            </Center>
            <Stack
                gap={5}
                justifyItems="center"
                alignItems="center"
            >
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        i={index}
                        title={feature.title}
                        description={feature.description}
                        imageUrl={feature.imageUrl}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export const CTA = () => {
    return (
        <Box bg="teal" py="12" px="5">
            {/* Header Section */}
            <Image position={{
                base: 'relative', md: 'absolute'
            }} mx={{
                base: 'auto', md: '0'
            }} src={ctabg} alt="Logo" w={{base:'90%',md:"400px"}} zIndex={0} />
            <VStack spacing={6}>
                <Heading
                    color="white"
                    as="h2"
                    textAlign="center"
                    mb="4"
                    fontSize="4xl"
                >
                    Ready to Get Started?
                </Heading>
                <Text
                    fontSize="lg"
                    color="white"
                    maxWidth="600px"
                    textAlign="center"
                >
                    Take your learning journey to the next level with our top-rated
                    courses and resources. Whether you're a beginner or advanced learner,
                    we've got something for everyone.
                </Text>
            </VStack>

            {/* Vertical Divider */}
            <Center height="60px" mb={10}>
                <Box w="2px" height="full" bg="teal.500"></Box>
            </Center>

            {/* Main CTA Buttons */}
            <Stack
                gap={6}
                direction={["column", "row"]}
                justify="center"
                alignItems="center"

            >
                <Button
                    colorScheme="teal"
                    size="lg"
                    rightIcon={<FaArrowRight />}
                    _hover={{ transform: "scale(1.05)", bg: "teal.700" }}
                >
                    Explore Courses
                </Button>
                <Button
                    colorScheme="teal"
                    color='white'
                    variant="outline"
                    size="lg"
                    rightIcon={<FaStar />}
                    _hover={{ transform: "scale(1.05)", bg: "teal.900" }}
                >
                    Join Us Now
                </Button>
            </Stack>

        </Box>
    );
}



export default Home;