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
  useToast,
  InputGroup,
  InputLeftElement,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
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
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import NextLink from 'next/link';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

const Home = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400');
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState('none');
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

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
                mt={4}
                mr={8}
                aria-label="Close Menu"
                size="md"
                variant="solid"
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
      <Box textAlign="center" m={350} minWidth={250}>
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
          <br></br>
          <br></br>
          <Button
            colorScheme="telegram"
            leftIcon={<FaDiscord />}
            variant="outline"
            onClick={() => (window.location.href = 'https://discord.gg/img')}
          >
            Discord
          </Button>
          {/* </HStack> */}
          {/* </Center> */}
        </Box>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Login
          </DrawerHeader>

          <DrawerBody>
          <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={result => console.log(result)}
            >
              {({ handleSubmit, isSubmitting, handleChange }) => (
                <form onSubmit={handleSubmit} onChange={handleChange}>
                  <FormControl id="username" isRequired>
                    <FormLabel>Email/Username:</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<AiOutlineUser />} />
                      <Input
                        name="username"
                        required
                        variant="filled"
                        placeholder="email@example.com"
                        mb={5}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="password" mb={5} isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<AiOutlineLock />} />
                      <Input
                        name="password"
                        type="password"
                        variant="filled"
                        autoComplete="password"
                        placeholder="**********"
                        required
                      />
                    </InputGroup>
                  </FormControl>
                  <Link color="blue.300">Forgot Password?</Link>
                  <Center>
                    <Button
                      mb={10}
                      mt={545}
                      colorScheme="gray"
                      type="submit"
                      variant="outline"
                      w={500}
                      isDisabled={isSubmitting}
                      isLoading={isSubmitting}
                      onClick={() =>
                        toast({
                          title: "This is a preview",
                          description: "nothing good will work ok retard",
                          status: "info",
                          duration: 7000,
                          isClosable: false,
                          variant: "left-accent",
                          position: "top",
                        })
                      }
                    >
                      ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏
                      ‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎Login‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
                      ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎
                    </Button>
                  </Center>
                  <Center>
                    <Button
                      w={500}
                      bg="#5865F2"
                      _hover={{ background: '#7289DA' }}
                      isDisabled={isSubmitting}
                      // isLoading={isSubmitting}
                      leftIcon={<FaDiscord />}
                      mb={5}
                    >
                      Login with Discord
                    </Button>
                  </Center>
                </form>
              )}
            </Formik>
          </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              </DrawerFooter>

          {/* <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>

      <Center>
        <Heading m={12}>
          Statistics
          {/* <Divider /> */}
        </Heading>
      </Center>
      <Center>
        <Box textAlign="center" maxWidth="max-content">
          <Box
            bg="gray.700"
            py="10"
            mr={50}
            px={{ base: '4', md: '10' }}
            shadow="dark-lg"
            w={[80, 180, 250]}
            rounded={{ sm: 'lg', md: 'md', lg: 'lg' }}
          >

            <Heading fontSize={{ base: '20', md: '30' }}  m={3}>Domains</Heading>
            <Divider />
            <Text mt={5} fontSize={{ base: '15', md: '20' }} >
              1000
            </Text>
          </Box>
        </Box>

        <Box textAlign="center" maxWidth="max-content">
          <Box
            bg="gray.700"
            py="10"
            ml={50}
            w={[80, 180, 250]}
            px={{ base: '4', md: '10' }}
            shadow="dark-lg"
            rounded={{ sm: 'lg' }}
          >
            {/* <Heading>
              Statistics
            </Heading> */}

            <Heading m={3} fontSize={{ base: '20', md: '30' }}>Users</Heading>
            <Divider />
            <Text mt={5} fontSize={{ base: '15', md: '20' }}>
              1000
            </Text>
          </Box>
        </Box>

        <Box textAlign="center" maxWidth="max-content">
          <Box
            bg="gray.700"
            py="10"
            ml={101}
            w={[80, 180, 250]}
            px={{ base: '4', md: '10' }}
            shadow="dark-lg"
            // mt={5}
            // m={50}
            rounded={{ sm: 'lg' }}
          >
            {/* <Heading>
              Statistics
            </Heading> */}

            <Heading m={3} fontSize={{ base: '20', md: '30' }}>Files</Heading>
            <Divider />
            <Text mt={5} fontSize={{ base: '15', md: '20' }}>
              1000
            </Text>
          </Box>
        </Box>
      </Center>

      <br></br>
    </>
  );
};

export default Home;
function changeDisplay(arg0: string): void {
  throw new Error('Function not implemented.');
}
