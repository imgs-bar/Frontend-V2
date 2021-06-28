import {Box, Heading, Text, useColorModeValue} from '@chakra-ui/react';
import {Stack} from '@chakra-ui/react';
import {Button} from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Home = () => {
  const color = useColorModeValue('telegram.500', 'telegram.400');

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
          <Button
            colorScheme="telegram"
            variant="outline"
            onClick={() => (window.location.href = 'https://discord.gg/img')}
          >
            Discord
          </Button>
        </Box>
      </Box>

      <Stack direction="row" spacing={1}></Stack>
    </>
  );
};

export default Home;
