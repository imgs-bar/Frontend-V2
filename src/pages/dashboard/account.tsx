import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar-Dash';
import Nav from '../../components/mobile-nav';

import React, {useEffect} from 'react';

import {
  Flex,
  Button,
  Container,
  Text,
  Divider,
  Input,
  Stack,
  InputGroup,
  Avatar,
} from '@chakra-ui/react';
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';

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

  return user ? (
    <>
      <Flex>
        <Sidebar display={['none', null, 'flex']} w={64} />
        <Navbar />
        <Nav />
      </Flex>
      <Container
        maxW="80%"
        bg="#212938"
        borderRadius="md"
        h="46rem"
        mt={100}
        m="130"
        ml="300"
      >
        <br></br>
        <Tabs>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Security</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <br></br>
              <Avatar
                name="Flame"
                ml={655}
                mt={0}
                bg="black"
                shadow="dark-lg"
                size="2xl"
                src="https://cdn.discordapp.com/avatars/417330353917657100/a_09774470b970a3290ccf1d5043d33cd1.gif?size=256&f=.gif"
              />
              <Text fontSize={20} ml={690} mt={5}>
                Flame (1)
              </Text>
              <Text fontSize={15} ml={650} color="gray.400" mt={5}>
                Your plan: Premium
              </Text>
              <Stack mt={10} spacing={8}>
                <InputGroup>
                  <Input
                    ml={520}
                    w={400}
                    textAlign="center"
                    placeholder="Username"
                  />
                  <br></br>
                </InputGroup>
                <InputGroup>
                  <Input
                    ml={520}
                    textAlign="center"
                    isDisabled
                    w={400}
                    placeholder="UID"
                  />
                </InputGroup>
              </Stack>
              <Button
                mt={10}
                ml={650}
                colorScheme="gray"
                borderRadius="lg"
                aria-label="Save"
              >
                Save Changes
              </Button>
              <br></br>
              <br></br>
              <br></br>
              <Divider mt={10} />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      {/* </Flex> */}
    </>
  ) : null;
};

export default Account;
