import {Box, Heading} from '@chakra-ui/react';
import * as React from 'react';
import {TableActions} from '../../components/Table/TableActions';
import {TableContent} from '../../components/Table/TableContent';
import {TablePagination} from '../../components/Table/TablePagination';

const Admin = () => {
<<<<<<< HEAD
  return (
    <Box as="section" py="12">
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
  );
=======
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // add roles later since i cba to make it work now
      router.push('/');
    }
  }, []);

  return user ? (
    //   return (
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
  ) : null;
  //   );
>>>>>>> parent of 94e1222 (dsadad)
};
export default Admin;
