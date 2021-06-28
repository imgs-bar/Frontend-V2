import {
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  chakra,
  Center,
  Heading,
  Button,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Home = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400');

  return (
    <>
      <Navbar />
      <Center>
        <Box textAlign="center" m={200} maxWidth="max-content">
          <Box>
            <Box
              bg={useColorModeValue('gray.200', 'gray.700')}
              py="8"
              px={{base: '4', md: '10'}}
              shadow="base"
              rounded={{sm: 'lg'}}
            >
              <Heading fontWeight="bold" fontSize="30" py="2">
                Login
              </Heading>
              <chakra.form onSubmit={values => console.log(values)}>
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
                <Button colorScheme="telegram" type="submit">
                  Login
                </Button>
              </chakra.form>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Home;
