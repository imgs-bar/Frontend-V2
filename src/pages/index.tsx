import {CloseIcon, HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import {Formik} from 'formik';
import {useRouter} from 'next/dist/client/router';
import NextLink from 'next/link';
import React, {useEffect, useState} from 'react';
import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCheck,
} from 'react-icons/ai';
import {FaDiscord} from 'react-icons/fa';
import {Stats} from '../../typings';
import {BASE_URL, getStats, login, register} from '../api/api';
import {useUser} from '../components/user';

const Home = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400');
  const colorBox = useColorModeValue('gray.100', 'gray.700');
  const {colorMode, toggleColorMode} = useColorMode();
  const [display, changeDisplay] = useState('none');
  const toast = useToast();
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();
  const firstField = React.useRef();
  const [show, setShow] = React.useState(false);
  const [statsLoaded, setStatsLoaded] = React.useState(false);
  const [stats, setStats] = React.useState<Stats>(null);

  const handleClick = () => setShow(!show);
  const router = useRouter();

  const {user, setUser} = useUser();

  const loginLocal = async (
    username: string,
    password: string,
    rememberMe: boolean
  ) => {
    try {
      const user = await login(username, password, rememberMe);
      setUser(user);

      router.push('/dashboard');
    } catch (err) {
      if (err.response.data.message === 'Unauthorized') {
        toast({
          description: 'Invalid username / password',
          status: 'error',
        });
      } else {
        toast({
          description: err.response.data.message,
          status: 'error',
        });
      }
    }
  };

  const registerLocal = async (
    email: string,
    username: string,
    password: string,
    invite: string
  ) => {
    try {
      await register(email, username, password, invite);

      toast({
        description: 'Successfully registered an account',
        status: 'success',
      });
    } catch (err) {
      if (err.response.data.message === 'Unauthorized') {
        toast({
          description: 'Invalid username / password',
          status: 'error',
        });
      } else {
        toast({
          description: err.response.data.message,
          status: 'error',
        });
      }
    }
  };

  useEffect(() => {
    const fetchStats = () => {
      getStats()
        .then(stats => {
          setStats(stats);
          setStatsLoaded(true);
        })
        .catch(err => {
          setStatsLoaded(false);
          setStats(null);
        });
    };
    fetchStats();
    setInterval(fetchStats, 10000);
  }, []);

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, []);

  return (
    <>
      <head>
        <title>imgs.bar beta</title>
      </head>
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
              onClick={onOpenLogin}
            >
              Login
            </Button>

            <Button
              as="a"
              colorScheme="telegram"
              variant="solid"
              aria-label="Register"
              my={5}
              ml={2}
              w="100%"
              onClick={onOpenRegister}
            >
              Register
            </Button>
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
              <NextLink href="" passHref>
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

              <NextLink href="" passHref>
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
      <Box
        textAlign="center"
        mt={{
          base: '250',
          sm: '300',
          md: '350',
        }}
        minWidth={250}
      >
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
          <Button colorScheme="telegram" variant="solid" onClick={onOpenLogin}>
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
        isOpen={isOpenLogin}
        placement="right"
        initialFocusRef={firstField}
        onClose={onCloseLogin}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Login</DrawerHeader>

          <DrawerBody>
            <Formik
              initialValues={{username: '', password: '', rememberMe: true}}
              onSubmit={async result =>
                loginLocal(result.username, result.password, result.rememberMe)
              }
            >
              {({handleSubmit, isSubmitting, handleChange}) => (
                <form onSubmit={handleSubmit} onChange={handleChange}>
                  <FormControl id="username" isRequired mt={5}>
                    <FormLabel>Email/Username:</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<AiOutlineUser />} />
                      <Input
                        name="username"
                        required
                        min={3}
                        variant="filled"
                        placeholder="email@example.com"
                        autoComplete="username"
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
                        type={show ? 'text' : 'password'}
                        variant="filled"
                        min={5}
                        autoComplete="password"
                        placeholder="**********"
                        required
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack
                    direction={{base: 'column', sm: 'row'}}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox defaultChecked name="rememberMe">
                      Remember me
                    </Checkbox>
                    <Link color={'blue.300'}>Forgot password?</Link>
                  </Stack>
                  <Center>
                    <Button
                      mb={5}
                      mt={450}
                      colorScheme="gray"
                      type="submit"
                      variant="outline"
                      w={500}
                      isDisabled={isSubmitting}
                      isLoading={isSubmitting}
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
                      _hover={{background: '#7289DA'}}
                      isDisabled={isSubmitting}
                      // isLoading={isSubmitting}
                      leftIcon={<FaDiscord />}
                      mb={5}
                      onClick={() =>
                        (location.href = `${BASE_URL}/discord/login`)
                      }
                    >
                      Login with Discord
                    </Button>
                  </Center>
                </form>
              )}
            </Formik>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px"></DrawerFooter>

          {/* <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>

      <Drawer
        isOpen={isOpenRegister}
        placement="right"
        initialFocusRef={firstField}
        onClose={onCloseRegister}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Register</DrawerHeader>

          <DrawerBody>
            <Formik
              initialValues={{
                email: '',
                username: '',
                password: '',
                invite: '',
              }}
              onSubmit={result =>
                registerLocal(
                  result.email,
                  result.username,
                  result.password,
                  result.invite
                )
              }
            >
              {({handleSubmit, isSubmitting, handleChange}) => (
                <form onSubmit={handleSubmit} onChange={handleChange}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email:</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<AiOutlineMail />} />
                      <Input
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        variant="filled"
                        placeholder="email@example.com"
                        mb={5}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="username" isRequired>
                    <FormLabel>Username:</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<AiOutlineUser />} />
                      <Input
                        name="username"
                        autoComplete="username"
                        required
                        variant="filled"
                        placeholder="Username"
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
                        autoComplete="new-password"
                        placeholder="**********"
                        variant="filled"
                        required
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="invite" mb={5} isRequired>
                    <FormLabel>Invite</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<AiOutlineCheck />} />
                      <Input
                        name="invite"
                        placeholder="Invite Code"
                        variant="filled"
                        autoComplete="off"
                        required
                      />
                    </InputGroup>
                  </FormControl>
                  <Button
                    mb={5}
                    mt={400}
                    colorScheme="gray"
                    type="submit"
                    variant="outline"
                    w={280}
                    isDisabled={isSubmitting}
                    isLoading={isSubmitting}
                  >
                    ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏ ‎‎‏‏‎
                    ‎‏‏‎ ‎‏‏‎ Register ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
                    ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎
                  </Button>
                </form>
              )}
            </Formik>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px"></DrawerFooter>

          {/* <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>

      <Stack
        ml={{
          base: '5rem',
          sm: '0rem',
          md: '22.5rem',
        }}
        mt={{
          base: '30rem',
          sm: '30rem',
          md: '33.5rem',
        }}
        direction={['column', 'row']}
        spacing={{
          base: '9',
          sm: '3rem',
          md: '15rem',
        }}
      >
        <Box
          shadow="dark-lg"
          bg={colorBox}
          borderRadius="5px"
          w={{
            base: '75%',
            sm: '40rem',
            md: '15rem',
          }}
          h={{
            base: '10rem',
            sm: '10rem',
            md: '12rem',
          }}
        >
          <Center>
            <Heading mt={5} fontSize={{base: '20', md: '25'}}>
              Domains
            </Heading>
          </Center>
          <Divider mt={5} />
          <Center>
            <Text mt={5} fontSize={{base: '15', md: '20'}}>
              <Skeleton isLoaded={statsLoaded}>
                {stats ? stats.domains : 'Loading...'}
              </Skeleton>
            </Text>
          </Center>
        </Box>
        <Box
          shadow="dark-lg"
          bg={colorBox}
          borderRadius="5px"
          w={{
            base: '75%',
            sm: '40rem',
            md: '15rem',
          }}
          h={{
            base: '10rem',
            sm: '10rem',
            md: '12rem',
          }}
        >
          <Center>
            <Heading mt={5} fontSize={{base: '20', md: '25'}}>
              Users
            </Heading>
          </Center>
          <Divider mt={5} />
          <Center>
            <Text mt={5} fontSize={{base: '15', md: '20'}}>
              <Skeleton isLoaded={statsLoaded}>
                {stats ? stats.users : 'Loading...'}
              </Skeleton>
            </Text>
          </Center>
        </Box>
        <Box
          shadow="dark-lg"
          bg={colorBox}
          borderRadius="5px"
          w={{
            base: '75%',
            sm: '40rem',
            md: '15rem',
          }}
          h={{
            base: '10rem',
            sm: '10rem',
            md: '12rem',
          }}
        >
          <Center>
            <Heading mt={5} fontSize={{base: '20', md: '25'}}>
              Files
            </Heading>
          </Center>
          <Divider mt={5} />
          <Center>
            <Text mt={5} fontSize={{base: '15', md: '20'}}>
              <Skeleton isLoaded={statsLoaded}>
                {stats ? stats.files : 'Loading...'}
              </Skeleton>
            </Text>
          </Center>
        </Box>
      </Stack>
      <br></br>
      <br></br>
    </>
  );
};

export default Home;
