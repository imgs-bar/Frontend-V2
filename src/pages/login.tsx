import {
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Center,
  Heading,
  Button,
  InputGroup,
  InputLeftElement,
  Link,
} from '@chakra-ui/react';
import {Formik} from 'formik';
import React from 'react';
import Navbar from '../components/Navbar';
import {FaDiscord} from 'react-icons/fa';
import {RiLockPasswordLine} from 'react-icons/ri';
const Login = () => {
  const formColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Navbar />
      <Center>
        <Box textAlign="center" m={200} maxWidth="max-content">
          <Box>
            <Box
              bg={formColor}
              py="8"
              px={{base: '4', md: '10'}}
              shadow="base"
              rounded={{sm: 'lg'}}
            >
              <Heading fontWeight="bold" fontSize="30" py="2" mb={3}>
                Login
              </Heading>
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={result => console.log(result)}
              >
                {({handleSubmit, isSubmitting, handleChange}) => (
                  <form onSubmit={handleSubmit} onChange={handleChange}>
                    <FormControl id="username" isRequired>
                      <FormLabel>Email/Username:</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<RiLockPasswordLine />} />
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
                      <Input
                        name="password"
                        type="password"
                        variant="filled"
                        autoComplete="password"
                        placeholder="**********"
                        required
                      />
                    </FormControl>
                    <Link color="blue.300">Forgot Password?</Link>
                    <Center>
                      <Button
                        mt={5}
                        colorScheme="gray"
                        variant="outline"
                        type="submit"
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
                        bg="#5865F2"
                        mt={3}
                        isDisabled={isSubmitting}
                        isLoading={isSubmitting}
                        leftIcon={<FaDiscord />}
                        mb={5}
                      >
                        Login with Discord
                      </Button>
                    </Center>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Login;
