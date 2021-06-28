import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  Center,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import {Stack} from '@chakra-ui/react';
import {Button} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import {Formik} from 'formik';

const Home = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400');
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Navbar />
      <Box textAlign="center" m={350}>
        <Box>
          <Heading fontWeight="700" py="2">
            imgs.bar
          </Heading>
          <Heading fontSize="2xl" fontWeight="500" py="2">
            <Text fontWeight="500" as="span" color={color}>
              Invite-only{' '}
            </Text>
            file hosting.{' '}
          </Heading>
          <Text color="gray.400">
            A{' '}
            <Text as="span" fontWeight="600">
              privacy{' '}
            </Text>
            based{' '}
            <Text as="span" fontWeight="600">
              file host,{' '}
            </Text>
            with 100+ domains and an amazing community.{' '}
          </Text>
          <br />
          <Center>
            <HStack direction="column">
              <Button colorScheme="telegram" variant="solid" onClick={onOpen}>
                Get started
              </Button>
              <Button
                colorScheme="telegram"
                variant="outline"
                onClick={() =>
                  (window.location.href = 'https://discord.gg/img')
                }
              >
                Discord
              </Button>
              <Button
                colorScheme="telegram"
                variant="solid"
                onClick={() => (window.location.href = '/login')}
              >
                Login
              </Button>
            </HStack>
          </Center>
        </Box>
      </Box>

      <Stack direction="row" spacing={1}></Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={result => console.log(result)}
            >
              {({handleSubmit, isSubmitting, handleChange}) => (
                <form onSubmit={handleSubmit} onChange={handleChange}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email:</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      variant="filled"
                      placeholder="email@example.com"
                      mb={5}
                    />
                  </FormControl>
                  <FormControl id="password" mb={5} isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      autoComplete="password"
                      placeholder="**********"
                      required
                    />
                  </FormControl>
                  <Center>
                    <Button
                      colorScheme="telegram"
                      type="submit"
                      isDisabled={isSubmitting}
                      isLoading={isSubmitting}
                    >
                      Login
                    </Button>
                  </Center>
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
