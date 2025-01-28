'use client'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    Image,
    useDisclosure,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,

} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import Header from './Header'
import { useEffect } from 'react'

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()


    const DesktopNav = () => {
        const linkColor = useColorModeValue('gray.600', 'gray.200')
        const linkHoverColor = useColorModeValue('gray.800', 'white')
        const popoverContentBgColor = useColorModeValue('white', 'gray.800')
        const navigate = useNavigate()

        return (
            <Stack direction={'row'} spacing={4} align="center">
                {NAV_ITEMS.map((navItem) => (
                    <Box key={navItem.label}>
                        <Popover trigger={'hover'} placement={'bottom-start'}>
                            <PopoverTrigger>
                                <Button
                                    variant='link'
                                    p={2}
                                    onClick={() => navigate(navItem.href ?? '#')}
                                    fontSize={'sm'}
                                    fontWeight={500}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}>
                                    {navItem.label}
                                </Button>
                            </PopoverTrigger>

                            {/* {navItem.children && (
                                <PopoverContent
                                    border={0}
                                    boxShadow={'xl'}
                                    bg={popoverContentBgColor}
                                    p={4}
                                    rounded={'xl'}
                                    minW={'sm'}>
                                    <Stack>
                                        {navItem.children.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}
                                    </Stack>
                                </PopoverContent>
                            )} */}
                        </Popover>
                    </Box>
                ))}
                <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={400}
                    variant={'link'}
                    onClick={() => navigate('/signup')}
                >
                    Registration
                </Button>
                <Button

                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'teal.400'}
                    _hover={{
                        bg: 'teal.300',
                    }}
                    onClick={() => navigate('/login')}
                >
                    login
                </Button>
            </Stack>
        )
    }

    const DesktopSubNav = ({ label, href, subLabel }) => {
        const navigate = useNavigate()

        return (
            <Box
                onClick={() => navigate(href)}
                role={'group'}
                display={'block'}
                p={2}
                rounded={'md'}
                _hover={{ bg: useColorModeValue('teal.50', 'gray.900') }}>
                <Stack direction={'row'} align={'center'}>
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{ color: 'teal.400' }}
                            fontWeight={500}
                            m={0}>
                            {label}
                        </Text>
                        <Text m={0} fontSize={'10px'}>{subLabel}</Text>
                    </Box>
                    <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}>
                        <Icon color={'teal.400'} w={5} h={5} as={ChevronRightIcon} />
                    </Flex>
                </Stack>
            </Box>
        )
    }


    DesktopSubNav.propTypes = {
        label: PropTypes.string,
        href: PropTypes.string,
        subLabel: PropTypes.string,
    }

    useEffect(() => {

    },)

    return (
        <Box zIndex={100} w="full" top={0}>
            <Header />
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 3 }}
                px={{ base: 6 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}

            >
                <Image src={logo} alt="Logo" height="50px" />

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'flex-end' }}>

                    <Flex display={{ base: 'none', lg: 'flex' }} ml={10} mx={6}>
                        <DesktopNav pathname={location.pathname} />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>

                    <Flex
                        flex={{ base: 0, lg: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', lg: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>

                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>

                <MobileNav pathname={location.pathname} />

            </Collapse>
        </Box>
    )
}

const MobileNav = () => {
    const navigate = useNavigate()
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ lg: 'none' }} >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            <Flex justifyContent="center" gap={5}><Button fontSize={'sm'} fontWeight={400} variant={'link'}
                onClick={() => navigate('/signup')}
            >
                Registration
            </Button>
                <Button
                    onClick={() => navigate('/login')}
                    // display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    _hover={{
                        bg: 'teal.300',
                    }}>
                    Login
                </Button></Flex>
        </Stack>
    )
}


const MobileNavItem = ({ label, children, href }) => {
    const navigate = useNavigate()

    return (
        <Accordion allowToggle>
            <AccordionItem border="none">
                <h2>
                    <AccordionButton
                        display={'flex'}

                        onClick={() => navigate(href ?? '#')}
                        justifyContent="space-between"
                        alignItems="center"
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                            {label}
                        </Text>
                        {children && (
                            <AccordionIcon />
                        )}
                    </AccordionButton>
                </h2>
                {children && (
                    <AccordionPanel >
                        <Stack
                            mt={2}
                            pl={4}
                            borderLeft={1}
                            borderStyle={'solid'}
                            align={'start'}>
                            {children.map((child) => (
                                <Box key={child.label} py={2} onClick={() => navigate(child.href)}>
                                    {child.label}
                                </Box>
                            ))}
                        </Stack>
                    </AccordionPanel>
                )}
            </AccordionItem>
        </Accordion>
    )
}

MobileNavItem.propTypes = {
    label: PropTypes.string,
    children: PropTypes.array,
    href: PropTypes.string,
}

MobileNav.propTypes = {
    children: PropTypes.node,
}
const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About Us',
        href: '/about',
    },
    {
        label: 'Courses',
        href: '/courses',
    },
    {
        label: 'Contact Us',
        href: '/contact',
    },
    {
        label: 'Terms and Conditions',
        href: '/terms',
    },
]

Navbar.propTypes = {
    children: PropTypes.node,
}

