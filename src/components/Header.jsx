import { Box, Flex, Text, Link, Spacer, IconButton, Center, Divider, Icon } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelopeOpen, FaPhone } from "react-icons/fa";


const Header = () => {
    return (
        <Box >
            {/* Navigation Bar */}
            <Flex p={3} bg="white" color="teal.600" align="center" gap={3}>

                <Flex direction={
                    { base: "column", md: "row" }
                } color="gray.900" align={{
                    base: "flex-start", md: "center"

                }} gap={{
                    base: 3, md: 12
                }} >
                    <Box display='flex' fontSize="sm" fontWeight="bold">
                        <IconButton variant="link" icon={
                            <FaEnvelopeOpen />
                        } /> contact@skolarmind.com
                    </Box>

                    <Box display='flex' fontSize="sm" fontWeight="bold">
                        <IconButton variant="link" icon={
                            <FaPhone />
                        } /> +1234567890
                    </Box>
                </Flex>

                <Spacer />

                {/* Social Media Links */}
                <Flex><Center >
                    <Box h="100%" width='2px' bgColor='teal'>

                    </Box>
                </Center>
                    <Flex flex={1} px={3} gap={1} flexWrap='wrap'>
                        <IconButton
                            as={Link}

                            href="#"
                            icon={<FaFacebook />}
                            variant="link"
                            color="blue.500"
                            aria-label="Facebook"

                        />
                        <IconButton
                            as={Link}
                            href="#"
                            icon={<FaInstagram />}
                            variant="link"
                            color="pink.500"
                            aria-label="Instagram"

                        />
                        <IconButton
                            as={Link}
                            href="#"
                            icon={<FaLinkedin />}
                            variant="link"
                            color="blue.700"
                            aria-label="LinkedIn"

                        />
                    </Flex></Flex>
            </Flex>
        </Box>
    );
};

export default Header;