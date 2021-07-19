import {Box, Img, Stack} from '@chakra-ui/react';
import * as React from 'react';

interface UserProps {
  data: {
    avatar: string;
    username: string;
    email: string;
    uid: number;
  };
}

export const User = (props: UserProps) => {
  const {avatar, username, email, uid} = props.data;
  return (
    <Stack direction="row" spacing="4" align="center">
      <Box flexShrink={0} h="10" w="10">
        <Img
          objectFit="cover"
          htmlWidth="160px"
          htmlHeight="160px"
          w="10"
          h="10"
          rounded="full"
          src={avatar}
          alt=""
        />
      </Box>
      <Box>
        <Box fontSize="sm" fontWeight="medium">
          {username}
        </Box>
        <Box fontSize="sm" color="gray.500">
          {email}
        </Box>
        <Box fontSize="sm" color="gray.500">
          UID: {uid}
        </Box>
      </Box>
    </Stack>
  );
};
