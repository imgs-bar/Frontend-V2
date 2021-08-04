import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar-Dash';
import Nav from '../../components/mobile-nav';
import {Card} from '../../components/Cards/CardBack';

import React, {useEffect} from 'react';

import {
  Flex,
  VStack,
  Stack,
  Container,
  Heading,
  Box,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

import {Images} from '../../../typings';
import {getImages} from '../../api/api';

import {useUser} from '../../components/user';
import {useRouter} from 'next/router';

const Gallery = () => {
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  const colorCon = useColorModeValue('gray.100', '#212938');

  return user ? (
    <>
      <Flex>
        <Sidebar display={['none', null, 'flex']} w={64} />
        <Navbar />
        <Nav />
      </Flex>
      <Card
        h={{
          base: '50rem',
          sm: '52rem',
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
        <Stack spacing="10">
          <Box>
            <Heading fontSize={25} fontWeight="bold" py="2">
              Gallery
            </Heading>
            <Text fontSize={15} color="gray.400">
              View your files
            </Text>
            <Divider mt={5} />
          </Box>
        </Stack>
      </Card>
    </>
  ) : null;
};
export default Gallery;
