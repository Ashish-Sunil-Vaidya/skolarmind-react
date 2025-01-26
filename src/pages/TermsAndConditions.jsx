
import {
  Box,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';
import BreadCrumbs from '../components/BreadCrumbs';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <BreadCrumbs currentTab="Terms and Conditions" />
      <Box  p={10} minH="100vh">
        <VStack spacing={8} maxW="900px" mx="auto" align="start">
          
          <Text fontSize="lg">
            Welcome to [Your Company Name]!
          </Text>

          <Text>
            These terms and conditions outline the rules and regulations for the use of [Your Company Name]'s Website, located at [Your Website URL].
          </Text>

          <Text fontWeight="bold">By accessing this website we assume you accept these terms and conditions. Do not continue to use [Your Website] if you do not agree to all of the terms and conditions stated on this page.</Text>

          <Heading as="h2" size="lg" mt={6}>
            1. License
          </Heading>
          <Text>
            Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights for all material on [Your Website]. All intellectual property rights are reserved. You may access this from [Your Website] for your own personal use subjected to restrictions set in these terms and conditions.
          </Text>

          <Text>You must not:</Text>
          <Box as="ul" pl={6} mt={2}>
            <li>Republish material from [Your Website]</li>
            <li>Sell, rent or sub-license material from [Your Website]</li>
            <li>Reproduce, duplicate or copy material from [Your Website]</li>
            <li>Redistribute content from [Your Website]</li>
          </Box>

          <Text>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. [Your Company Name] does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of [Your Company Name], its agents, and/or affiliates.</Text>

          <Heading as="h2" size="lg" mt={6}>
            2. Hyperlinking to our Content
          </Heading>
          <Text>
            The following organizations may link to our Website without prior written approval:
          </Text>
          <Box as="ul" pl={6} mt={2}>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors;</li>
            <li>System-wide Accredited Businesses.</li>
          </Box>

          <Text>
            These organizations may link to our home page, to publications, or to other Website information as long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
          </Text>

          <Heading as="h2" size="lg" mt={6}>
            3. iFrames
          </Heading>
          <Text>
            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
          </Text>

          <Heading as="h2" size="lg" mt={6}>
            4. Content Liability
          </Heading>
          <Text>
            We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or that infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.
          </Text>

          <Heading as="h2" size="lg" mt={6}>
            5. Reservation of Rights
          </Heading>
          <Text>
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time.
          </Text>

          <Heading as="h2" size="lg" mt={6}>
            6. Removal of links from our website
          </Heading>
          <Text>
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </Text>

          <Heading as="h2" size="lg" mt={6}>
            7. Disclaimer
          </Heading>
          <Text>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </Text>
          <Box as="ul" pl={6} mt={2}>
            <li>Limit or exclude our or your liability for death or personal injury;</li>
            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </Box>

          <Text>
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
          </Text>

          <Text>
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </Text>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
