import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar-Dash'
import Nav from '../../components/mobile-nav'

import {
    Flex,
    Button,
    Box,
    Container,
    Text,
    Divider,
    Input,
    Switch,
    Stack,
    InputGroup,
    Tooltip,
    Avatar,
}
    from '@chakra-ui/react';
    import { DownloadIcon } from '@chakra-ui/icons';
    import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const ok = () => {
  return (
      <>
      <Flex>
          <Sidebar />
          <Navbar />
          <Nav />
      </Flex>


      {/* <Flex pos="fixed" mt={250} ml={350} isFitted > */}
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
    {/* <Heading fontSize={25} mt={30} ml={15}>Profile</Heading> */}
      {/* <Text fontSize={15} color="gray.400" mt={0} ml={15}>Manage your profile settings</Text> */}
    <br></br>
    <Avatar name="Flame" ml={655} mt={0} bg="black" shadow="dark-lg" bg="none" size="2xl" src="https://cdn.discordapp.com/avatars/417330353917657100/a_09774470b970a3290ccf1d5043d33cd1.gif?size=256&f=.gif" />
    <Text fontSize={20} ml={690} mt={5}>Flame (1)</Text>
    <Text fontSize={15} ml={650} color="gray.400" mt={5}>Your plan: Premium</Text>
    <Stack mt={10} spacing={8}>
     <InputGroup>
      <Input ml={520} w={400} textAlign="center" placeholder="Username" />
      <br></br>
      {/* <Input ml={15} isDisabled w={400} placeholder="UID" /> */}
      </InputGroup>
      <InputGroup>
      <Input ml={520} textAlign="center" isDisabled w={400} placeholder="UID" />
    </InputGroup>
  </Stack>

      <Button 
      mt={10}
      ml={650}
      colorScheme="gray"
      borderRadius="lg"
    //   leftIcon={<DownloadIcon />}
      aria-label="Save"
      >
          Save Changes
          </Button>
          <br></br><br></br><br></br>
          {/* <Tooltip label="If enabled other users can view your profile." placement="top-start">
          <Text ml={10} fontSize={[15, 18, 20]}>Private Profile</Text>
         </Tooltip>
         <Tooltip label="If enabled other users can view your profile." placement="top-start">
          <Text ml={245} fontSize={[15, 18, 20]}>Priv</Text>
         </Tooltip>
         <br></br>
          <Stack ml={20} align="center" spacing={150} direction="row">
            <Switch size="lg" />
            <Switch size="lg" />
          </Stack> */}

          <Divider mt={10}/>
          {/* <Heading fontSize={25} mt={30} ml={15}>Preferences</Heading>
      <Text fontSize={15} color="gray.400" mt={0} ml={15}>Select your domain and settings preferences</Text> */}
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
  );
};

export default ok;
