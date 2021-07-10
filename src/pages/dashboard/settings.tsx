import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar-Dash';
import Nav from '../../components/mobile-nav';

import React from 'react';

import {
  Flex,
  VStack,
  Stack,
  Button,
  Box,
  Container,
  Heading,
  Text,
  Divider,
  Center,
  Select,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Switch,
  Tooltip,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';

import {DownloadIcon} from '@chakra-ui/icons';

const Settings = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = value => setValue(value);

  const {
    isOpen: isOpenConfigs,
    onOpen: onOpenConfigs,
    onClose: onCloseConfigs,
  } = useDisclosure();

  return (
    <>
      <Flex>
        <Sidebar display={['none', null, 'flex']} w={64} />
        <Navbar />
        <Nav />
      </Flex>
      <VStack>
        <Container
          maxW="80%"
          bg="#212938"
          borderRadius="md"
          h="52rem"
          mt="100"
          ml="323"
        >
          <Center>
            <Heading fontSize={25} mt={30} ml={15}>
              Settings
            </Heading>
          </Center>
          <Center>
            <Text mt={15} fontSize={15} color="gray.400">
              Change your domain preferences:
            </Text>
          </Center>
          <Center>
            <Text fontSize={15} color="gray.400" mt={2} ml={15}></Text>
          </Center>
          <Divider mt={10} />
          <Center></Center>
          <Center>
            <Input
              mt={8}
              variant="outline"
              placeholder="Subdomain"
              maxW={150}
            />
            <Select
              mt={8}
              colorScheme="gray"
              variant="filled"
              aria-label="Select a domain"
              maxW={250}
            >
              <option value="option1">i.imgs.bar</option>
              <option value="option2">flameis.cool</option>
            </Select>
            <Input
              mt={8}
              variant="outline"
              placeholder="Directory"
              maxW={130}
            />
          </Center>
          <Center mt={10}>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                // _hover={{bg: 'gray.500'}}
                _expanded={{bg: 'gray.700'}}
                _focus={{boxShadow: 'outline'}}
              >
                Embed Profile
              </MenuButton>
              <MenuList>
                <MenuItem>Select a Profile</MenuItem>
                <MenuDivider />
                <MenuItem>New Profile</MenuItem>
              </MenuList>
            </Menu>
          </Center>
          <Divider mt={10} />
          <Center>
            <Heading mt={30} fontSize={25}>
              Vanity
            </Heading>
          </Center>
          <Center>
            <Text mt={15} fontSize={15} color="gray.400">
              Change your extra vanity preferences
            </Text>
          </Center>
          <Center>
            <Stack mt={30} align="center"></Stack>
          </Center>
          <Center>
            <VStack ml={-75} spacing={6}>
              <Popover>
                <PopoverTrigger>
                  <Text>Long URL</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Long URL Length</PopoverHeader>
                  <PopoverBody>
                    <Flex>
                      <NumberInput
                        maxW="100px"
                        mr="2rem"
                        value={value}
                        onChange={handleChange}
                        max={50}
                        min={5}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      <Slider
                        flex="1"
                        focusThumbOnChange={false}
                        value={value}
                        onChange={handleChange}
                        min={5}
                        max={50}
                      >
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb
                          fontSize="sm"
                          boxSize="20px"
                          children={value}
                        />
                      </Slider>
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <Tooltip label="emojis are in ur url" placement="left-start">
                <Text>Emoji URL</Text>
              </Tooltip>
              <Tooltip
                label="tbh i have no idea wtf this shit is ook"
                placement="left-start"
              >
                <Text>File Extension</Text>
              </Tooltip>
            </VStack>
          </Center>
          <Center>
            <VStack mt={-120} ml={105} spacing={6}>
              <Switch size="md" />
              <Switch size="md" />
              <Switch size="md" />
            </VStack>
          </Center>
          <Divider mt={10} />
          <Center>
            <Heading mt={30} fontSize={25}>
              Config
            </Heading>
          </Center>
          <Center>
            <Text mt={15} fontSize={15} color="gray.400">
              Download your configs
            </Text>
          </Center>
          <Center>
            <Button
              mt={5}
              colorScheme="gray"
              borderRadius="lg"
              leftIcon={<DownloadIcon />}
              aria-label="Download a config"
              onClick={onOpenConfigs}
            >
              Download
            </Button>
          </Center>
        </Container>
      </VStack>
      <Flex>
        <Modal
          motionPreset="slideInBottom"
          onClose={onCloseConfigs}
          isOpen={isOpenConfigs}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Configs</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>
              <Tabs isFitted>
                <TabList>
                  <Tab>Image</Tab>
                  <Tab>Shortener</Tab>
                  <Tab>Pastes</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Button ml={100} mt={5} variant="outline" w={150}>
                      ShareX
                    </Button>

                    <Button ml={100} mt={5} variant="outline" w={150}>
                      ShareNix Raw
                    </Button>

                    <Button
                      // mt={-69}
                      ml={100}
                      mt={5}
                      variant="outline"
                      w={150}
                    >
                      ShareNix Inject
                    </Button>

                    <Button
                      // mt={-69}
                      ml={100}
                      mt={5}
                      variant="outline"
                      // maxW={150}
                      w={150}
                    >
                      KShare
                    </Button>

                    <Button
                      // mt={-69}
                      ml={100}
                      mt={5}
                      variant="outline"
                      // maxW={150}
                      w={150}
                    >
                      iOS Shortcut
                    </Button>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <br />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Settings;
