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
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {getMotd} from '../../api/api';
import Nav from '../../components/mobile-nav';
import Navbar from '../../components/Navbar-Dash';
import Sidebar from '../../components/Sidebar';
import {useUser} from '../../components/user';

import {Card} from '../../components/Cards/CardBack';
import {FieldGroup} from '../../components/Fields/FieldGroup';
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

      <Stack as="section" spacing="6">
        <Card
          h={{
            base: '43.5rem',
            sm: '44rem',
            md: '50rem', // 55 for full
          }}
          maxW={{
            base: '90%',
            sm: '93%',
            md: '84.5%',
          }}
          mt={{
            base: '50',
            sm: '43.5',
            md: '105',
          }}
          ml={{
            base: '5',
            sm: '5',
            md: '280',
          }}
        >
          <Stack spacing="6">
            <Heading
              mt={3}
              display="block"
              fontSize="lg"
              lineHeight="normal"
              fontWeight="semibold"
            >
              Welcome, {user.username}
            </Heading>
            <Divider mt={5} />
            <Box as="section" p="10">
              <Box maxW="5xl" mx="auto" px={{base: '6', md: '8'}}>
                <SimpleGrid columns={{base: 1, md: 3}} spacing="6">
                  <Stat>
                    <StatLabel>MOTD</StatLabel>
                    <StatNumber fontSize="20">{motd}</StatNumber>
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
          </Stack>
        </Card>
      </Stack>
    </>
  ) : null;
};
export default Dashboard;
