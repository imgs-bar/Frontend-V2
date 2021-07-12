import {ChevronDownIcon} from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {AiOutlineProfile, AiOutlineUser} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import {logOut} from '../api/api';
import {TITLE} from '../utils/stuff';
// import ThemeToggle from '../theme-toggle';
import MobileNav from './mobile-nav';
import {useUser} from './user';

export default function Header() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const {user, setUser} = useUser();
  const router = useRouter();
  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top={0}
        left={[0, 0, 0]}
        right={0}
        align="center"
        h={16}
        px={[4, 6, 8]}
        bg="#212938"
        zIndex="docked"
      >
        <Flex w="full" align="center" justify="center">
          <Flex w="full" align="center" justify="space-between">
            <Flex align="center">
              <NextLink href="/dashboard" passHref>
                <Button as="a" variant="ghost" px={0} fontWeight="bold">
                  {TITLE}
                </Button>
              </NextLink>
            </Flex>
            <Flex>
              <Menu>
                <MobileNav />
                <MenuButton
                  variant="solid"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  <Avatar
                    mt={0}
                    size="sm"
                    name={user.username}
                    src={user.discord.avatar ? user.discord.avatar : null}
                  >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => (location.href = '/dashboard/account')}
                    icon={<AiOutlineUser />}
                  >
                    Account
                  </MenuItem>
                  <MenuItem icon={<AiOutlineProfile />}>Profile</MenuItem>
                  <MenuItem
                    onClick={async () => {
                      await logOut();
                      setUser(null);
                      router.push('/');
                    }}
                    icon={<BiLogOut />}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
