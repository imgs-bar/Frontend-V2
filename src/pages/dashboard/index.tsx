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
  SimpleGrid,
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
          <Heading
            mt={30}
            ml={15}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Welcome, Flame
          </Heading>
          {/* <Text fontSize={15} color="gray.400" mt={0} ml={15}>View your uploads</Text> */}

          <Divider mt={10} />
          {/* <SimpleGrid w="100%" columns={[1, ]} spacingX={[0, 8]} spacingY={4}>  */}

          <Box
            w={{
              base: '75%',
              sm: '50%',
              md: '15%',
            }}
            h={{
              base: '15%',
              sm: '20%',
              md: '20%',
            }}
            bg="gray.700"
            p={4}
            mt={10}
            display={{md: 'flex'}}
            rounded={{sm: 'lg', md: 'md', lg: 'lg'}}
            // textAlign="center"
          >
            <Box flexShrink={0}>
              <Text borderRadius="lg" width={{md: 40}} />
            </Box>
            <Box mt={{base: 4, md: 0}} ml={{md: 6}}>
              <Text
                textAlign="center"
                mt={1}
                ml={{
                  base: 'full',
                  sm: '-7.3rem',
                  md: '-11.5rem',
                }}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
              >
                MOTD:
              </Text>
              <Text mt={2} color="gray.500"></Text>
            </Box>
          </Box>

          <Box
            w={{
              base: '75%',
              sm: '50%',
              md: '15%',
            }}
            h={{
              base: '15%',
              sm: '20%',
              md: '20%',
            }}
            bg="gray.700"
            p={4}
            mt={{
              base: '10',
              sm: '10',
              md: '-147',
            }}
            ml={{
              base: '0',
              sm: '0',
              md: '300',
            }}
            display={{md: 'flex'}}
            rounded={{sm: 'lg', md: 'md', lg: 'lg'}}
            // textAlign="center"
          >
            <Box flexShrink={0}>
              <Text borderRadius="lg" width={{md: 40}} />
            </Box>
            <Box mt={{base: 0, md: 0}} ml={{md: 6}}>
              <Text
                textAlign="center"
                mt={1}
                ml={{
                  base: 'full',
                  sm: '-7.3rem',
                  md: '-11.5rem',
                }}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
              >
                MOTD:
              </Text>
              <Text mt={2} color="gray.500"></Text>
            </Box>
          </Box>
          {/* </SimpleGrid> */}
        </Container>
      </VStack>
    </>
  );
};

export default ok;
