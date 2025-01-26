
import { Box, Grid, Image, Icon, Center } from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";

const PhotoGrid = () => {
    return (
        <Box maxW={
            { base: "100%", md: "90%", lg: "50%" }
        } mx="auto" py={10} >
            {/* Top Section with Video Thumbnail */}
            <Box position="relative">
                <Image
                    src="https://picsum.photos/640/480"
                    alt="Video Thumbnail"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    borderRadius="md"
                />
                <Center
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Icon as={FaPlayCircle} boxSize={[12, 16]} color="white" opacity={0.8} />
                </Center>
            </Box>

            {/* Grid Section */}
            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={6}
                mt={6}
            >
                <Image
                    src="https://picsum.photos/640/480"
                    alt="Photo 1"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    borderRadius="md"
                />
                <Image
                    src="https://picsum.photos/640/480"
                    alt="Photo 2"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    borderRadius="md"
                />
                <Image
                    src="https://picsum.photos/640/480"
                    alt="Photo 3"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    borderRadius="md"
                />
            </Grid>
        </Box>
    );
};

export default PhotoGrid;
