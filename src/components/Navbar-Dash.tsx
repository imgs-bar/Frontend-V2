import NextLink from 'next/link';
import {
  Button,
  Flex,
  useColorModeValue,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
// import ThemeToggle from '../theme-toggle';
import MobileNav from './mobile-nav';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {TITLE} from '../utils/stuff';
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineUser, AiOutlineProfile} from 'react-icons/ai';
import {useUser} from './user';
import {logOut} from '../api/api';

export default function Header() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const {setUser} = useUser();
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
                    src="https://cdn.discordapp.com/avatars/417330353917657100/a_09774470b970a3290ccf1d5043d33cd1.gif?size=256&f=.gif"
                  />
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
