import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  Skeleton,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {getMotd} from '../../api/api';
import Nav from '../../components/mobile-nav';
import Navbar from '../../components/Navbar-Dash';
import Sidebar from '../../components/Sidebar';
import {useUser} from '../../components/user';

import {Stat} from '../../components/Stats/Stat';
import {StatLabel} from '../../components/Stats/StatLabel';
import {StatNumber} from '../../components/Stats/StatNumber';

import {SimpleGrid, useColorModeValue as mode} from '@chakra-ui/react';

const Dashboard = () => {
  const {user} = useUser();
  const router = useRouter();
  const [motd, setMotd] = React.useState('');

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    getMotd().then(motd => {
      setMotd(motd);
    });
  }, []);

  const [isMediumScreen] = useMediaQuery('(max-width: 900px)');
  const [isSmallScreen] = useMediaQuery('(max-width: 500px)');

  const colorBox = useColorModeValue('gray.200', 'gray.700');
  const colorCon = useColorModeValue('gray.100', '#212938');
  const [statsLoaded, setStatsLoaded] = React.useState(false);

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
          bg={colorCon}
          borderRadius="md"
          h="40rem"
          mt={{
            base: '100',
            sm: '100',
            md: '130',
          }}
          ml={{
            base: '30',
            sm: '234',
            md: '325',
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

          <Box ml={-500} as="section" p="10">
            <Box maxW="5xl" mx="auto" px={{base: '6', md: '8'}}>
              <SimpleGrid columns={{base: 1, md: 3}} spacing="6">
                <Stat>
                  <StatLabel>MOTD</StatLabel>
                  <StatNumber>{motd}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Uploads</StatLabel>
                  <StatNumber>{user.uploads}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Invites</StatLabel>
                  <StatNumber>{user.invites}</StatNumber>
                </Stat>
              </SimpleGrid>
            </Box>
          </Box>
        </Container>
      </VStack>
    </>
  ) : null;
};
export default Dashboard;
