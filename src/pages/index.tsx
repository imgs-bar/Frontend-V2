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
import {Stat} from '../components/Stats/Stat';
import {StatLabel} from '../components/Stats/StatLabel';
import {StatNumber} from '../components/Stats/StatNumber';

import {SimpleGrid, useColorModeValue as mode} from '@chakra-ui/react';

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
              onClick={onOpenLogin}
              w="100%"
            >
              Login
            </Button>

            <Button
              onClick={onOpenRegister}
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
        </DrawerContent>
      </Drawer>

      <Box mt={400} as="section" bg={mode('gray.50', 'gray.800')} p="10">
        <Box maxW="5xl" mx="auto" px={{base: '6', md: '8'}}>
          <SimpleGrid columns={{base: 1, md: 3}} spacing="6">
            {/* {data.map(({label, value}) => ( */}
            <Stat>
              <StatLabel>Domains</StatLabel>
              <StatNumber>
                <Skeleton isLoaded={statsLoaded}>
                  {stats ? stats.domains : 'Loading...'}
                </Skeleton>
              </StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Users</StatLabel>
              <StatNumber>
                <Skeleton isLoaded={statsLoaded}>
                  {stats ? stats.users : 'Loading...'}
                </Skeleton>
              </StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Files</StatLabel>
              <StatNumber>
                <Skeleton isLoaded={statsLoaded}>
                  {stats ? stats.files : 'Loading...'}
                </Skeleton>
              </StatNumber>
            </Stat>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
