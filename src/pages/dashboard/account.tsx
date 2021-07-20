import {
  HStack,
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Switch,
  Text,
  Stack,
  StackDivider,
  Flex,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import {Card} from '../../components/Cards/CardBack';
import {FieldGroup} from '../../components/Fields/FieldGroup';
import Nav from '../../components/mobile-nav';
import Navbar from '../../components/Navbar-Dash';
import Sidebar from '../../components/Sidebar';

import {BASE_URL, updateSettings} from '../../api/api';

import {useUser} from '../../components/user';
import {useRouter} from 'next/router';

const Account = () => {
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  const colorButton = useColorModeValue('gray.200', '#323A48');
  return user ? (
    <>
      <Flex>
        <Sidebar display={['none', null, 'flex']} w={64} />
        <Navbar />
        <Nav />
      </Flex>

      <Stack as="section" spacing="6">
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
          <Stack divider={<StackDivider />} spacing="6">
            <FieldGroup
              title="Name &amp; Avatar"
              description="Change your username and view your avatar"
            >
              <HStack spacing="4">
                <Avatar
                  bg="none"
                  src={user.discord.avatar ? user.discord.avatar : null}
                  name={user.username}
                />
                <Box>
                  <Text>{user.username}</Text>
                  <Text color="gray.500" fontSize="sm">
                    Joined ‎
                    {new Date(user.registerDate).toLocaleString('en-us', {
                      month: 'long',
                    })}
                    ,‎‏‏‎ ‎
                    {new Date(user.registerDate).toLocaleString('en-us', {
                      year: 'numeric',
                    })}
                  </Text>
                </Box>
              </HStack>
              <HStack mt="5">
                <Button size="sm" bg={colorButton}>
                  Change Username
                </Button>
                <Button
                  bg={colorButton}
                  isDisabled={!user.roles.premium.status}
                  size="sm"
                >
                  Change UID
                </Button>
              </HStack>
            </FieldGroup>

            <FieldGroup
              title="Login Details"
              description="Change your email and password"
            >
              <Input maxW="17.5%" isDisabled value={user.email} size="sm" />
              <HStack mt="5">
                <Button bg={colorButton} size="sm">
                  Change email
                </Button>
                <Button bg={colorButton} size="sm">
                  Change password
                </Button>
                <Button
                  bg={colorButton}
                  size="sm"
                  onClick={() => {
                    location.href = `${BASE_URL}/discord/link`;
                  }}
                >
                  Link Discord
                </Button>
              </HStack>
            </FieldGroup>

            <FieldGroup
              title="Preferences"
              description="Manage your preferences"
            >
              <Stack spacing="3">
                <FormControl display="flex" alignItems="center">
                  <FormLabel
                    htmlFor="email-marketing"
                    flex="1"
                    fontSize="sm"
                    mb="0"
                  >
                    Private Profile
                  </FormLabel>
                  <Switch id="email-marketing" />
                </FormControl>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-news" flex="1" fontSize="sm" mb="0">
                    Something for later
                  </FormLabel>
                  <Switch id="email-news" />
                </FormControl>
              </Stack>
              {/* <Button mt="5" size="sm">
                Save Changes
              </Button> */}
            </FieldGroup>
          </Stack>
        </Card>
      </Stack>
    </>
  ) : null;
};
export default Account;
