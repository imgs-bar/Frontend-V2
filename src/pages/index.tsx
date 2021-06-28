import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Center,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Link,
  Flex,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { FaDiscord } from "react-icons/fa"
import { Button } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import { Formik } from 'formik';
import { useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Home = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState('none');

  return (
    <>
      <Flex>
        <Flex pos="fixed" top="1rem" left="1rem" align="center">
          <Heading fontWeight="bold" fontSize="20" py="2">
            <Link href="/">imgs.bar</Link>
          </Heading>
        </Flex>

        <Flex pos="fixed" top="1rem" right="1rem" align="center">
          <Flex display={['none', 'none', 'flex', 'flex']}>
            <Button
              as="a"
              colorScheme="telegram"
              variant="solid"
              aria-label="Login"
              my={5}
              w="100%"
              onClick={onOpen}
            >
              Login
            </Button>

            <NextLink href="/register" passHref>
              <Button
                as="a"
                colorScheme="telegram"
                variant="solid"
                aria-label="Register"
                my={5}
                ml={2}
                w="100%"
              >
                Register
              </Button>
            </NextLink>
          </Flex>

          <IconButton
            aria-label="Open Menu"
            size="md"
            mr={2}
            borderRadius="md"
            icon={<HamburgerIcon />}
            display={['flex', 'flex', 'none', 'none']}
            onClick={() => changeDisplay('flex')}
          />

          <Flex>
            <IconButton
              aria-label="Toggle Dark"
              ml={2}
              size="md"
              borderRadius="md"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Flex>

          <Flex
            w="100vw"
            bgColor="gray.80"
            zIndex={20}
            borderRadius="md"
            h="100vh"
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
            display={display}
          >
            <Flex justify="flex-end">
              <IconButton
                mt={2}
                mr={2}
                aria-label="Close Menu"
                size="md"
                borderRadius="md"
                icon={<CloseIcon />}
                onClick={() => changeDisplay('none')}
              />
            </Flex>

            <Flex flexDir="column" align="center">
              <NextLink href="/login" passHref>
                <Button
                  as="a"
                  colorScheme="telegram"
                  variant="outline"
                  aria-label="Login"
                  my={5}
                  w="100%"
                >
                  Login
                </Button>
              </NextLink>

              <NextLink href="/register" passHref>
                <Button
                  as="a"
                  colorScheme="telegram"
                  variant="solid"
                  aria-label="Register"
                  my={5}
                  ml={2}
                  w="100%"
                >
                  Register
                </Button>
              </NextLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
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
          {/* <Center> */}
          {/* <HStack direction="column"> */}
          {/* <Button colorScheme="telegram" variant="solid" onClick={onOpen}>
                Get started
              </Button> */}
          <Button colorScheme="telegram" variant="solid" onClick={onOpen}>
            ‏‏‎‏‏‎‏‏‎ ‎ ‎Login‏‏‎ ‎‏‏‎ ‎
          </Button>
          <br></br><br></br>
          <Button
            colorScheme="telegram"
            leftIcon={<FaDiscord />}
            variant="outline"
            onClick={() =>
              (window.location.href = 'https://discord.gg/img')
            }
          >
            Discord
          </Button>
          {/* </HStack> */}
          {/* </Center> */}
        </Box>
      </Box>

      <Stack direction="row" spacing={1}></Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={result => console.log(result)}
            >
              {({ handleSubmit, isSubmitting, handleChange }) => (
                <form onSubmit={handleSubmit} onChange={handleChange}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email/Username:</FormLabel>
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
function changeDisplay(arg0: string): void {
  throw new Error('Function not implemented.');
}
