import { Box, Heading, Flex } from '@chakra-ui/react';#
import React, {useEffect} from 'react';
import {TableActions} from '../../components/Table/TableActions';
import {TableContent} from '../../components/Table/TableContent';
import {TablePagination} from '../../components/Table/TablePagination';
import {Card} from '../../components/Cards/CardAccount';
import Nav from '../../components/mobile-nav';
import Navbar from '../../components/Navbar-Dash';
import Sidebar from '../../components/Sidebar';

import {useUser} from '../../components/user';
import {useRouter} from 'next/router';
const Admin = () => {
  const {user} = useUser();
  const router = useRouter();

    useEffect(() => {
    if (!user.roles.admin) {
      router.push('/');
    }
  }, []);

  return user ? (
    <>
      <Flex>
        <Sidebar display={['none', null, 'flex']} w={64} />
        <Navbar />
        <Nav />
      </Flex>

      <Card
        h={{
          base: '43.5rem',
          sm: '44rem',
          md: '50rem', // 55 for full
        }}
        maxW={{
          base: '90%',
          sm: '93%',
          md: '84.5%',
        }}
        mt={{
          base: '50',
          sm: '43.5',
          md: '20',
        }}
        ml={{
          base: '5',
          sm: '5',
          md: '280',
        }}
      >
        <Box as="section" py="12">
          <Box
            maxW={{base: 'xl', md: '7xl'}}
            mx="auto"
            ml={10}
            mt={-43}
            px={{base: '3', md: '0'}}
          >
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
      </Card>
    </>
    ) : null;
};
export default Admin;
