import {DownloadIcon} from '@chakra-ui/icons';
import {
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
  InputGroup,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {setting} from '../../../typings';
import {updateSettings} from '../../api/api';
import Nav from '../../components/mobile-nav';
import Navbar from '../../components/Navbar-Dash';
import Sidebar from '../../components/Sidebar';
import {useUser} from '../../components/user';
// import styles from '../../styles/Settings.module.css';

const Settings = () => {
  const baseUrl = 'https://betaapi.imgs.bar/v2';
  const [value, setValue] = React.useState(0);
  const handleChange = value => setValue(value);
  const toast = useToast();

  const {
    isOpen: isOpenConfigs,
    onOpen: onOpenConfigs,
    onClose: onCloseConfigs,
  } = useDisclosure();
  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();

  const updateSetting = async (key: setting, value: boolean) => {
    try {
      await updateSettings(key, value);
      toast({description: `${key} updated`, status: 'success'});
    } catch (err) {
      toast({
        description: err.response.data.message,
        status: 'error',
      });
    }
  };
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  const colorCon = useColorModeValue('gray.100', '#212938');
  const colorBox = useColorModeValue('gray.200', 'gray.700');
  const colorSelect = useColorModeValue('gray.200', 'gray.700');

  return user ? (
    <>
      <Flex>
        <Sidebar display={['none', null, 'flex']} w={64} />
        <Navbar />
        <Nav />
      </Flex>
      <VStack>
        <Container
          maxW={{
            base: '77%',
            sm: '40%',
            md: '77%',
          }}
          //  w="120%"
          // bg="#212938"
          bg={colorCon}
          borderRadius="md"
          h="50rem"
          mt={{
            base: '100',
            sm: '100',
            md: '130',
          }}
          ml={{
            base: '30',
            sm: '234',
            md: '350',
          }}
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
              size="sm"
              variant="outline"
              placeholder="Subdomain"
              h={35}
              ml={1}
              maxW={150}
            />
            <Select
              mt={8}
              size="sm"
              // colorScheme="gray"
              variant="filled"
              bg={colorSelect}
              aria-label="Select a domain"
              h={35}
              maxW={250}
            >
              {user.settings.domains.map(d => (
                <option key={d.name} value={d.name}>
                  {d.name}
                </option>
              ))}
            </Select>
            <Input
              mt={8}
              size="sm"
              variant="outline"
              h={35}
              placeholder="Prefix"
              maxW={130}
            />
          </Center>
          <Center mt={10}>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                // borderRadius="md"
                borderWidth="1px"
                // _hover={{bg: 'gray.500'}}
                _expanded={{bg: colorBox}}
                _focus={{boxShadow: 'outline'}}
              >
                Embed Profile
              </MenuButton>
              <MenuList>
                <MenuItem>Manage Profiles</MenuItem>
                <MenuDivider />
                <MenuItem onClick={onOpenCreate}>New Profile</MenuItem>
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
                label="Removes the File Extension at the end of your file."
                placement="left-start"
              >
                <Text>File Extension</Text>
              </Tooltip>
            </VStack>
          </Center>
          <Center>
            <VStack mt={-120} ml={105} spacing={6}>
              <Switch
                size="md"
                id="long-url"
                onChange={event =>
                  updateSetting('longUrl', event.target.checked)
                }
                defaultChecked={user.settings.longUrl}
              />
              <Switch
                size="md"
                id="emoji-url"
                onChange={event =>
                  updateSetting('emojiUrl', event.target.checked)
                }
                defaultChecked={user.settings.emojiUrl}
              />
              <Switch
                size="md"
                id="show-Extension"
                onChange={event =>
                  updateSetting('showExtension', event.target.checked)
                }
                defaultChecked={user.settings.showExtension}
              />
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
              borderRadius="none"
              variant="outline"
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
                    <Button
                      onClick={() =>
                        (location.href = `${baseUrl}/config/files?key=${user.key}`)
                      }
                      ml={100}
                      mt={5}
                      variant="outline"
                      w={150}
                    >
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

      <Flex>
        <Modal
          motionPreset="slideInBottom"
          onClose={onCloseCreate}
          isOpen={isOpenCreate}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Embed Profile</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>
              {/* <div className={styles.previewCon}>
                <div className={styles.embedSettings}> */}
              <Text mt={15} fontSize={15} color="gray.400">
                Embed Site Name:
              </Text>
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Site Name URL"
                h={35}
                maxW={350}
              />
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Site Name"
                h={35}
                maxW={350}
              />
              <Text mt={15} fontSize={15} color="gray.400">
                Embed Author:
              </Text>
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Embed Author"
                h={35}
                maxW={350}
              />
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Embed Author URL"
                h={35}
                maxW={350}
              />
              <Text mt={15} fontSize={15} color="gray.400">
                Embed Title:
              </Text>
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Embed Title"
                h={35}
                maxW={350}
              />
              <Text mt={15} fontSize={15} color="gray.400">
                Embed Description:
              </Text>
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Embed Description"
                h={35}
                maxW={350}
              />
              <Button
                mt={5}
                colorScheme="gray"
                borderRadius="none"
                variant="outline"
                aria-label="Download a config"
              >
                Save Profile
              </Button>

              <div
              // className={styles.embedPreview}
              />
              {/* </div>
                </div> */}
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  ) : null;
};

export default Settings;
