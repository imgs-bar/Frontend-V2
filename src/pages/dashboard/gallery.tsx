import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar-Dash';
import Nav from '../../components/mobile-nav';

import React, {useEffect} from 'react';

import {
  Flex,
  VStack,
  Container,
  Heading,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

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
      <VStack>
        <Container
          //    p={30}
          maxW="80%"
          bg={colorCon}
          borderRadius="md"
          h="46rem"
          m="130"
          ml="400"
        >
          <Heading fontSize={25} mt={30} ml={15}>
            Gallery
          </Heading>
          <Text fontSize={15} color="gray.400" mt={0} ml={15}>
            View your uploads
          </Text>
          <Divider mt={10} />
        </Container>
      </VStack>
    </>
  ) : null;
};
export default Gallery;
