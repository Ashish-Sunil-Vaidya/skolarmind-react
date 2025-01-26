import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Box } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const BreadCrumbs = ({ currentTab = "About Us" }) => {
    return (
        <Box bg='gray.50' py={5} px={10}><Heading  py={5} px={10} verticalAlign="center" >
            {currentTab}
        </Heading>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink fontWeight='bolder' color='teal.600'  href='#'>{currentTab}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb></Box>
    )
}

export default BreadCrumbs;