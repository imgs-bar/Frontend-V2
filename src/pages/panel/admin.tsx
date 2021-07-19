import {Box, Heading} from '@chakra-ui/react';
import * as React from 'react';
import {TableActions} from '../../components/Table/TableActions';
import {TableContent} from '../../components/Table/TableContent';
import {TablePagination} from '../../components/Table/TablePagination';

const Admin = () => {
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
};
export default Admin;
