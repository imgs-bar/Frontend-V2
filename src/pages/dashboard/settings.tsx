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
  Box,
  useColorModeValue,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {setting} from '../../../typings';
import {
  updateSettings,
  updateURLLength,
  updateEmbed,
  createInvite,
} from '../../api/api';
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
  const {
    isOpen: isOpenManage,
    onOpen: onOpenManage,
    onClose: onCloseManage,
  } = useDisclosure();

  const saveEmbed = async (title: string) => {
    try {
      await saveEmbed(title);
      toast({description: `${title} updated`, status: 'success'});
    } catch (err) {
      // toast({
      //   description: err,
      //   status: 'error',
      // });
    }
  };

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
  const updateURLLength = async (
    key: setting,
    value: boolean,
    length: number
  ) => {
    try {
      await updateURLLength(key, value, length);
      toast({description: `${key} updated to ${length}`, status: 'success'});
    } catch (err) {
      toast({
        description: err.response.data.message,
        status: 'error',
      });
    }
  };
  // const {user} = useUser();
  const {user, setUser} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  const colorCon = useColorModeValue('gray.100', '#212938');
  const colorBox = useColorModeValue('gray.200', 'gray.700');
  const button = useColorModeValue('gray.200', '#323A48');
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
              placeholder={user.settings.domains[0].subDomain}
              h={35}
              ml={1}
              maxW={150}
            />
            <Select
              mt={8}
              size="sm"
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
            <Center>
              <InputGroup mt={31} ml={-1} size="sm">
                <InputLeftAddon h={35} children="/" />
                <Input
                  placeholder={user.settings.domains[0].fileNamePrefix}
                  w={125}
                  h={35}
                  // placeholder="File Prefix"
                />
              </InputGroup>
            </Center>
          </Center>
          <Center mt={10}>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                bg={button}
                borderRadius="4px"
                // borderWidth="1px"
                _expanded={{bg: colorBox}}
                _focus={{boxShadow: 'outline'}}
              >
                Embed Profile
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onOpenManage}>Manage Profiles</MenuItem>
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
              <Tooltip
                label="change your url length lol"
                placement="left-start"
              >
                <Text>URL Length</Text>
              </Tooltip>

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
            <VStack mt={-128} ml={105} spacing={6}>
              <NumberInput
                w={100}
                size="sm"
                ml={16}
                min={5}
                max={50}
                keepWithinRange={false}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  min={5}
                  max={50}
                  onChange={e => updateSetting('urlLength', e.target.value)}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
              bg={button}
              borderRadius="4px"
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
                value={
                  user.settings.embeds.list[0].header.url &&
                  user.settings.embeds.list[0].header.url !== '' &&
                  user.settings.embeds.list[0].header.url !== 'default'
                    ? user.settings.embeds.list[0].header.url
                    : ''
                }
              />
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Site Name"
                h={35}
                maxW={350}
                value={
                  user.settings.embeds.list[0].header.text &&
                  user.settings.embeds.list[0].header.text !== '' &&
                  user.settings.embeds.list[0].header.text !== 'default'
                    ? user.settings.embeds.list[0].header.text
                    : ''
                }
              />
              <Text mt={15} fontSize={15} color="gray.400">
                Embed Author:
              </Text>
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Embed Author URL"
                h={35}
                maxW={350}
                value={
                  user.settings.embeds.list[0].author.url &&
                  user.settings.embeds.list[0].author.url !== '' &&
                  user.settings.embeds.list[0].author.url !== 'default'
                    ? user.settings.embeds.list[0].author.url
                    : ''
                }
              />
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Embed Author Text"
                h={35}
                maxW={350}
                value={
                  user.settings.embeds.list[0].author.text &&
                  user.settings.embeds.list[0].author.text !== '' &&
                  user.settings.embeds.list[0].author.text !== 'default'
                    ? user.settings.embeds.list[0].author.text
                    : ''
                }
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
                value={
                  user.settings.embeds.list[0].title &&
                  user.settings.embeds.list[0].title !== '' &&
                  user.settings.embeds.list[0].title !== 'default'
                    ? user.settings.embeds.list[0].title
                    : ''
                }
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
                value={
                  user.settings.embeds.list[0].description &&
                  user.settings.embeds.list[0].description !== '' &&
                  user.settings.embeds.list[0].description !== 'default'
                    ? user.settings.embeds.list[0].description
                    : ''
                }
              />
              <Button
                mt={5}
                colorScheme="gray"
                borderRadius="none"
                variant="outline"
                aria-label="Download a config"
              >
                Create Profile
              </Button>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Flex>
        <Modal
          motionPreset="slideInBottom"
          onClose={onCloseManage}
          isOpen={isOpenManage}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Manage Embed Profiles</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>
              <Text mt={2} fontSize={14.4} color="gray.400">
                Change your Embed profiles preferences
              </Text>
              <Input
                mt={8}
                h="2.4rem"
                isDisabled
                value={user.settings.embeds.list[0].name}
                placeholder=""
                size="sm"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  ) : null;
};

export default Settings;
