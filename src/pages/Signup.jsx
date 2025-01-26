import BreadCrumbs from "../components/BreadCrumbs";
import { Box, Button, Checkbox, FormControl, FormLabel, Grid, Heading, HStack, Input, Select, Text, VStack, Flex } from "@chakra-ui/react";
;
import { useState } from "react";

const Signup = () => {
    const [isParent, setIsParent] = useState(true);
    const [isGuardian, setIsGuardian] = useState(false);

    return (
        <>
            <BreadCrumbs currentTab="Registration" />
            <Box maxW="7xl" mx="auto" p={10}>
                <Box textAlign="center" mb={6}>
                    <Text fontSize="sm" color="teal.500">
                        Student Registration Form
                    </Text>
                    <Heading as="h1" size="lg">
                        Student Registration Form
                    </Heading>
                    <Text fontSize="sm" color="gray.600" mt={2}>
                        Please complete the form below to enroll in our programs at school. Provide accurate and detailed information to help us process your registration efficiently.
                    </Text>
                </Box>

                <VStack spacing={6}  p={10} border='2px' rounded='md' borderColor='gray.200'>
                    {/* Personal Details */}
                    <Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap={4} width="full">
                        <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder="First Name" />
                        </FormControl>
                        <FormControl id="lastName" isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder="Last Name" />
                        </FormControl>
                        <FormControl id="mobile" isRequired>
                            <FormLabel>Mobile</FormLabel>
                            <Input placeholder="Mobile" type="tel" />
                        </FormControl>
                        <FormControl id="gender" isRequired  >
                            <FormLabel>Gender</FormLabel>
                            <HStack spacing={5 } border='1px' rounded='md' borderColor='gray.200' p={2}>
                                <Checkbox value="Male">Male</Checkbox>
                                <Checkbox value="Female">Female</Checkbox>
                            </HStack>
                        </FormControl>
                        <FormControl id="image">
                            <FormLabel>Image</FormLabel>
                            <Input type="file" />
                        </FormControl>
                        <FormControl id="dob" isRequired>
                            <FormLabel>Date of Birth</FormLabel>
                            <Input type="date" />
                        </FormControl>
                    </Grid>

                    {/* School Details */}
                    <Grid templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }} gap={4} width="full">
                        <FormControl id="class" isRequired>
                            <FormLabel>Class</FormLabel>
                            <Select placeholder="Select Class">
                                <option value="Class 1">Class 1</option>
                                <option value="Class 2">Class 2</option>
                                {/* Add more options as per requirements */}
                            </Select>
                        </FormControl>
                        <FormControl id="category" isRequired>
                            <FormLabel>Category</FormLabel>
                            <Select placeholder="Select Category">
                                <option value="General">General</option>
                                <option value="SC/ST">SC/ST</option>
                                {/* Add more options as per requirements */}
                            </Select>
                        </FormControl>
                        <FormControl id="grNumber" isRequired>
                            <FormLabel>GR Number</FormLabel>
                            <Input placeholder="GR Number" />
                        </FormControl>
                        <FormControl id="admissionDate" isRequired>
                            <FormLabel>Admission Date</FormLabel>
                            <Input type="date" />
                        </FormControl>
                        <FormControl id="currentAddress" isRequired>
                            <FormLabel>Current Address</FormLabel>
                            <Input placeholder="Current Address" />
                        </FormControl>
                        <FormControl id="permanentAddress" isRequired>
                            <FormLabel>Permanent Address</FormLabel>
                            <Input placeholder="Permanent Address" />
                        </FormControl>
                    </Grid>

                    <Flex gap={5} w='full'>{/* Parent/Guardian Details */}
                        <Checkbox isChecked={isParent} onChange={() => setIsParent(!isParent)}>
                            Parent Details
                        </Checkbox>
                        <Checkbox isChecked={!isGuardian} onChange={() => setIsGuardian(!isGuardian)}>
                            Guardian Details
                        </Checkbox></Flex>

                    {/* Parent Information */}
                    {isParent && (
                        <><Grid templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }} gap={4} width="full">
                            <FormControl id="fatherEmail" isRequired>
                                <FormLabel>Father Email</FormLabel>
                                <Input placeholder="Father Email" />
                            </FormControl>
                            <FormControl id="fatherMobile" isRequired>
                                <FormLabel>Father Mobile</FormLabel>
                                <Input placeholder="Father Mobile" />
                            </FormControl>
                            <FormControl id="fatherFirstName" isRequired>
                                <FormLabel>Father First Name</FormLabel>
                                <Input placeholder="Father First Name" />
                            </FormControl>
                            <FormControl id="fatherLastName" isRequired>
                                <FormLabel>Father Last Name</FormLabel>
                                <Input placeholder="Father Last Name" />
                            </FormControl>
                            <FormControl id="fatherDob" isRequired>
                                <FormLabel>Father Date of Birth</FormLabel>
                                <Input type="date" />
                            </FormControl>
                            <FormControl id="fatherOccupation" isRequired>
                                <FormLabel>Father Occupation</FormLabel>
                                <Input placeholder="Father Occupation" />
                            </FormControl>
                            <FormControl id="fatherImage">
                                <FormLabel>Father Image</FormLabel>
                                <Input type="file" />
                            </FormControl>
                        </Grid>
                            <Grid templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }} gap={4} width="full">
                                <FormControl id="motherEmail" isRequired>
                                    <FormLabel>Mother Email</FormLabel>
                                    <Input placeholder="Mother Email" />
                                </FormControl>
                                <FormControl id="motherMobile" isRequired>
                                    <FormLabel>Mother Mobile</FormLabel>
                                    <Input placeholder="Mother Mobile" />
                                </FormControl>
                                <FormControl id="motherFirstName" isRequired>
                                    <FormLabel>Mother First Name</FormLabel>
                                    <Input placeholder="Mother First Name" />
                                </FormControl>
                                <FormControl id="motherLastName" isRequired>
                                    <FormLabel>Mother Last Name</FormLabel>
                                    <Input placeholder="Mother Last Name" />
                                </FormControl>
                                <FormControl id="motherDob" isRequired>
                                    <FormLabel>Mother Date of Birth</FormLabel>
                                    <Input type="date" />
                                </FormControl>
                                <FormControl id="motherOccupation" isRequired>
                                    <FormLabel>Mother Occupation</FormLabel>
                                    <Input placeholder="Mother Occupation" />
                                </FormControl>
                                <FormControl id="motherImage">
                                    <FormLabel>Mother Image</FormLabel>
                                    <Input type="file" />
                                </FormControl>
                            </Grid></>
                    )}

                    {/* Guardian Information */}
                    {!isGuardian && (
                        <><Grid templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }} gap={4} width="full">
                            <FormControl id="guardianEmail" isRequired>
                                <FormLabel>Guardian Email</FormLabel>
                                <Input placeholder="Guardian Email" />
                            </FormControl>
                            <FormControl id="guardianMobile" isRequired>
                                <FormLabel>Guardian Mobile</FormLabel>
                                <Input placeholder="Guardian Mobile" />
                            </FormControl>
                            <FormControl id="guardianFirstName" isRequired>
                                <FormLabel>Guardian First Name</FormLabel>
                                <Input placeholder="Guardian First Name" />
                            </FormControl>
                            <FormControl id="guardianLastName" isRequired>
                                <FormLabel>Guardian Last Name</FormLabel>
                                <Input placeholder="Guardian Last Name" />
                            </FormControl>
                            <FormControl id="guardianDob" isRequired>
                                <FormLabel>Guardian Date of Birth</FormLabel>
                                <Input type="date" />
                            </FormControl>
                            <FormControl id="guardiangender"  isRequired>
                            <FormLabel>Gender</FormLabel>
                            <HStack spacing={5} border='1px' rounded='md' borderColor='gray.200' p={2}>
                                <Checkbox value="Male">Male</Checkbox>
                                <Checkbox value="Female">Female</Checkbox>
                            </HStack>
                        </FormControl>
                            <FormControl id="guardianOccupation" isRequired>
                                <FormLabel>Guardian Occupation</FormLabel>
                                <Input placeholder="Guardian Occupation" />
                            </FormControl>
                            <FormControl id="guardianImage">
                                <FormLabel>Guardian Image</FormLabel>
                                <Input type="file" />
                            </FormControl>
                        </Grid>
                            <Grid templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }} gap={4} width="full">
                                <FormControl id="guardianAddress" isRequired>
                                    <FormLabel>Guardian Address</FormLabel>
                                    <Input placeholder="Guardian Address" />
                                </FormControl>
                                <FormControl id="guardianRelation" isRequired>
                                    <FormLabel>Guardian Relation</FormLabel>
                                    <Input placeholder="Guardian Relation" />
                                </FormControl>
                            </Grid></>
                    )}




                    {/* Submit Button */}
                    <Button colorScheme="blue" size="lg" width="full">
                        Submit
                    </Button>
                </VStack>
            </Box>
        </>
    )
}

export default Signup;