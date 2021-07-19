import {Box, Heading, Flex} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import {TableActions} from '../../components/Table/TableActions';
import {TableContent} from '../../components/Table/TableContent';
import {TablePagination} from '../../components/Table/TablePagination';

import Nav from '../../components/mobile-nav';
import Navbar from '../../components/Navbar-Dash';
import Sidebar from '../../components/Sidebar';
import {useUser} from '../../components/user';
import {useRouter} from 'next/router';

const Admin = () => {
  const {user} = useUser();
  const router = useRouter();

  //   useEffect(() => {
  //     if (!user) {
  //       // add roles later since i cba to make it work now
  //       router.push('/');
  //     }
  //   }, []);

  //   return user ? (
  return (
    <>
      <Flex>
        <Sidebar display={['none', null, 'flex']} w={64} />
        <Navbar />
        <Nav />
      </Flex>

      <Box as="section" py="95">
        <Box maxW={{base: 'xl', md: '7xl'}} mx="auto" px={{base: '6', md: '8'}}>
          <Box overflowX="auto">
            <Heading size="lg" mb="6">
              Admin Panel
            </Heading>
            <TableActions />
            <TableContent />
            <TablePagination />
          </Box>
        </Box>
      </Box>
    </>
    //   ) : null;
  );
};

export default Admin;
