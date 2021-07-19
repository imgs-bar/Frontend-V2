import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import {BsSearch} from 'react-icons/bs';

export const TableActions = () => {
  return (
    <Stack
      spacing="4"
      direction={{base: 'column', md: 'row'}}
      justify="space-between"
    >
      <HStack>
        <FormControl minW={{md: '320px'}} id="search">
          <InputGroup size="sm">
            <FormLabel srOnly>Filter by username or email</FormLabel>
            <InputLeftElement pointerEvents="none" color="gray.400">
              <BsSearch />
            </InputLeftElement>
            <Input
              rounded="base"
              type="search"
              placeholder="Filter by username or email"
            />
          </InputGroup>
        </FormControl>
        <Select w={{base: '300px', md: 'unset'}} rounded="base" size="sm">
          <option>All</option>
          <option>Premium</option>
          <option>Blacklisted</option>
          <option>Moderator</option>
          <option>Admin</option>
        </Select>
      </HStack>
    </Stack>
  );
};
