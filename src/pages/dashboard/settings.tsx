import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar-Dash'
import Nav from '../../components/mobile-nav'

import {
    Flex,
    Button,
    Box,
    VStack,
    Container,
    Heading,
    Text,
    Divider,
    IconButton,
    Select,
    Input,
    SimpleGrid,
    Center,
    Checkbox,
    CheckboxGroup,
    HStack,
    Stack,
    Switch,
    Tooltip,
}
    from '@chakra-ui/react';
    import { DownloadIcon } from '@chakra-ui/icons';

const ok = () => {
  return (
      <>
      <Flex>
          <Sidebar />
          <Navbar />
          <Nav />
      </Flex>
    
    {/* <Box textAlign="center" m={400} minWidth={250}>
        <Button>
            ok
        </Button>
    </Box> */}

   <VStack>
   <SimpleGrid columns={2} spacing={10}>
   <Container
   width="100rem"
   bg="#212938"
   borderRadius="md"
   h="35rem"
   mt={100}
//    m="130"
//    ml="-550"
   >
             <Heading fontSize={25} mt={30} ml={15}>Config</Heading>
      <Text fontSize={15} color="gray.400" mt={0} ml={15}>Download your configs</Text>
      <Button 
      mt={5}
      ml={15}
      colorScheme="gray"
      borderRadius="lg"
      leftIcon={<DownloadIcon />}
      aria-label="Download a config"
      >
          Download
          </Button>
          <Divider mt={10}/>
          <Heading fontSize={25} mt={30} ml={15}>Preferences</Heading>
      <Text fontSize={15} color="gray.400" mt={0} ml={15}>Select your domain and settings preferences</Text>
      <Input 
          mt={5}
          ml={15}
          variant="outline" 
          placeholder="Subdomain" 
          maxW={150}
          />
        <Input 
          mt={-10}
          ml={175}
          variant="outline" 
          placeholder="Directory" 
          maxW={130}
          />
      <Select 
      mt={-10}
      ml={178}
      colorScheme="gray"
    //   borderRadius="lg"
      variant="filled" 
      aria-label="Select a domain"
      maxW={150}
      >
          <option value="option1">i.imgs.bar</option>
          <option value="option2">flameis.cool</option>
          </Select>

        <Button
        // mt={-69}
        ml={165}
        mt={5}
        >
            Embed Profile
        </Button>
          <br></br><br></br>
          
          {/* <Stack ml={10} align="stretch"> */}
          {/* <Box ml={10}>
              <Text as="sub" color="gray.400" fontSize="20">URL Settings</Text>
              <br></br><br></br>
          <Tooltip bg="gray.600" color="gray.200" placement="left-start" label="Fake URL allows you to use any domain/text as your URL on discord.">Fake URL</Tooltip>
  <Switch ml={15} size="md" colorScheme="telegram" />
  <br />

  <Tooltip bg="gray.600" color="gray.200" placement="left-start" label="Long URL will make your filenames longer.">Long URL</Tooltip>
  <Switch ml={15} size="md" colorScheme="telegram" />
  <br />

  <Tooltip bg="gray.600" color="gray.200" placement="left-start" label="Invisible File will hide the filename at the end of the link of an image.">Invisible File</Tooltip>
  <Switch ml={15} size="md" colorScheme="telegram" />
  </Box> */}
 
{/* </Stack> */}


    </Container>

    <Container
//    w="100rem"
   bg="#212938"
   borderRadius="md"
   h="35rem"
   mt={100}
//    m="130"
//    ml="100"
   >

    </Container>
    </SimpleGrid>
   </VStack>

</>
  );
};

export default ok;
