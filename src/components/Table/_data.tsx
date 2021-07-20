import {Badge} from '@chakra-ui/react';
import * as React from 'react';
import {User} from './User';

export const data = [
  {
    role: 'Owner',
    status: 'false',
    uploads: '851',
    user: {
      avatar:
        'https://cdn.discordapp.com/avatars/226911291636318208/a_ca69e5de1c12d968ca3b888746ceae86.gif',
      username: 'Pringles',
      email: 'pringlepot123@gmail.com',
      uid: '1',
    },
  },
  {
    role: 'Owner',
    status: 'true',
    uploads: '126',
    user: {
      avatar:
        'https://cdn.discordapp.com/avatars/417330353917657100/a_09774470b970a3290ccf1d5043d33cd1.gif',
      username: 'Flame',
      email: 'f7nl4y@gmail.com',
      uid: '2',
    },
  },
];

const badgeEnum: Record<string, string> = {
  true: 'green',
  false: 'red',
};

export const columns = [
  {
    Header: 'Users',
    accessor: 'user',
    Cell: function userCell(data: any) {
      return <User data={data} />;
    },
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Premium',
    accessor: 'status',
    Cell: function StatusCell(data: any) {
      return (
        <Badge fontSize="xs" colorScheme={badgeEnum[data]}>
          {data}
        </Badge>
      );
    },
  },
  {
    Header: 'Uploads',
    accessor: 'uploads',
  },
];
