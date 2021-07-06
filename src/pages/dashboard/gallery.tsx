import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar-Dash';
import Nav from '../../components/mobile-nav';

import {
  Flex,
  Button,
  Box,
  VStack,
  Container,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/react';
import {DownloadIcon} from '@chakra-ui/icons';

const ok = () => {
  return (
    <>
      <Flex>
        <Sidebar />
        <Navbar />
        <Nav />
      </Flex>

      {/* <Box textAlign="center" m={400} minWidth={250}>
        <Button>
            ok
        </Button>
    </Box> */}

      <VStack>
        <Container
          //    p={30}
          maxW="80%"
          bg="#212938"
          borderRadius="md"
          h="46rem"
          m="130"
          ml="400"
        >
          {/* <br></br> */}
          {/* <Divider /> */}
          <Heading fontSize={25} mt={30} ml={15}>
            Gallery
          </Heading>
          <Text fontSize={15} color="gray.400" mt={0} ml={15}>
            View your uploads
          </Text>
          {/* <Button
      mt={5}
      ml={15}
      colorScheme="gray"
      borderRadius="lg"
      leftIcon={<DownloadIcon />}
      aria-label="Download a config"
      >
          Download
          </Button> */}

          <Divider mt={10} />
        </Container>
      </VStack>
      {/* <Text mt={35}>You haven't uploaded any files.</Text> */}
    </>
  );
};

export default ok;
