import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar-Dash';
import Nav from '../../components/mobile-nav';

import React, {useEffect} from 'react';

import {
  Flex,
  Box,
  VStack,
  Stack,
  Container,
  Heading,
  Text,
  Center,
  Divider,
  useMediaQuery,
} from '@chakra-ui/react';
import {DownloadIcon} from '@chakra-ui/icons';

import {useUser} from '../../components/user';
import {useRouter} from 'next/router';

const Dashboard = () => {
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  const [isMediumScreen] = useMediaQuery('(max-width: 900px)');
  const [isSmallScreen] = useMediaQuery('(max-width: 500px)');

  return user ? (
    <>
      <Flex>
        <Sidebar display={['none', null, 'flex']} w={64} />
        <Navbar />
        <Nav />
      </Flex>

      <VStack>
        <Container
          maxW={{
            base: '80%',
            sm: '40%',
            md: '80%',
          }}
          //  w="120%"
          bg="#212938"
          borderRadius="md"
          h="40rem"
          mt={{
            base: '100',
            sm: '100',
            md: '130',
          }}
          ml={{
            base: '41',
            sm: '284',
            md: '350',
          }}
        >
          <Heading
            mt={30}
            ml={15}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Welcome, {user.username}
          </Heading>

          <Divider mt={10} />
          {/* <Stack direction={["column", "row"]} spacing="24px"> */}

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
            ml={{
              base: '8',
              sm: '14',
              md: '0',
            }}
            bg="gray.700"
            p={4}
            mt={10}
            display={{md: 'flex'}}
            rounded={{sm: 'lg', md: 'md', lg: 'lg'}}
          >
            <Box flexShrink={0}>
              <Text borderRadius="lg" width={{md: 40}} />
            </Box>
            <Box textAlign="center" mt={{base: 4, md: 0}} ml={{md: 6}}>
              <Text
                textAlign="center"
                mt={1}
                ml={{
                  base: '0',
                  sm: '0',
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
              md: '-128',
            }}
            ml={{
              base: '8',
              sm: '14',
              md: '300',
            }}
            display={{md: 'flex'}}
            rounded={{sm: 'lg', md: 'md', lg: 'lg'}}
          >
            <Box flexShrink={0}>
              <Text borderRadius="lg" width={{md: 40}} />
            </Box>
            <Box mt={{base: 0, md: 0}} ml={{md: 6}}>
              <Text
                textAlign="center"
                mt={1}
                ml={{
                  base: '0',
                  sm: '0',
                  md: '-11.5rem',
                }}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
              >
                Uploads:
              </Text>
              <Center>
                <Text
                  mt={2}
                  fontSize="18"
                  color="gray.500"
                  ml={{
                    base: '0',
                    sm: '0',
                    md: '-11.5rem',
                  }}
                >
                  {user.uploads}
                </Text>
              </Center>
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
              md: '-128',
            }}
            ml={{
              base: '16',
              sm: '14',
              md: '600',
            }}
            display={{md: 'flex'}}
            rounded={{sm: 'lg', md: 'md', lg: 'lg'}}
          >
            <Box flexShrink={0}>
              <Text borderRadius="lg" width={{md: 40}} />
            </Box>
            <Box mt={{base: 0, md: 0}} ml={{md: 6}}>
              <Text
                textAlign="center"
                mt={1}
                ml={{
                  base: '0',
                  sm: '0',
                  md: '-11.5rem',
                }}
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
              >
                Invites:
              </Text>
              <Center>
                <Text
                  mt={2}
                  fontSize="18"
                  color="gray.500"
                  ml={{
                    base: '0',
                    sm: '0',
                    md: '-11.5rem',
                  }}
                >
                  {user.invites}
                </Text>
              </Center>
            </Box>
          </Box>
          {/* </Stack> */}
        </Container>
      </VStack>
    </>
  ) : null;
};
export default Dashboard;
