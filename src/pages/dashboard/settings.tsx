import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar-Dash'
import Nav from '../../components/mobile-nav'

import {
    Flex,
    Button,
    Box,
}
    from '@chakra-ui/react';

const ok = () => {
  return (
      <>
      <Flex>
          <Sidebar />
          <Navbar />
          <Nav />
      </Flex>
    
    <Box textAlign="center" m={400} minWidth={250}>
        <Button>
            ok
        </Button>
    </Box>


</>
  );
};

export default ok;
