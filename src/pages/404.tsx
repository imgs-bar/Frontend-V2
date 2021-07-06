import {Box, Heading, Text} from '@chakra-ui/react';
import {Button} from '@chakra-ui/react';

const ok = () => {
  return (
    <Box textAlign="center" m={400} minWidth={250}>
      <Heading>404</Heading>

      <Text fontWeight="500" as="span" color="gray.500">
        The requested URL could not be found.
      </Text>
      <br></br>
      <br />
      <Button
        colorScheme="telegram"
        variant="outline"
        onClick={() => (window.location.href = '/')}
      >
        Home
      </Button>
    </Box>
  );
};

export default ok;
