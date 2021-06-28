import {
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Center,
  Heading,
  Button,
} from '@chakra-ui/react';
import {Formik} from 'formik';
import Navbar from '../components/Navbar';

const Home = () => {
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
              <Heading fontWeight="bold" fontSize="30" py="2">
                Login
              </Heading>
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
                    <Button
                      colorScheme="telegram"
                      type="submit"
                      isDisabled={isSubmitting}
                      isLoading={isSubmitting}
                    >
                      Login
                    </Button>
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

export default Home;
