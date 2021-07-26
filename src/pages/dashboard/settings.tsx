import {DownloadIcon, ChevronDownIcon} from '@chakra-ui/icons';
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
  FormControl,
  FormLabel,
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
  Link,
  useColorModeValue,
  InputLeftAddon,
  InputRightAddon,
  Image,
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {booleanSetting, User} from '../../../typings';
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

import {Card} from '../../components/Cards/CardBack';

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
  const {user} = useUser();

  const updateSetting = async (key: booleanSetting, value: boolean) => {
    try {
      await updateSettings(key, value);
      user.settings[key] = value;
      toast({description: `${key} updated`, status: 'success'});
    } catch (err) {
      toast({
        description: err.response.data.message,
        status: 'error',
      });
    }
  };

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
      <Card
        h={{
          base: '50rem',
          sm: '52rem',
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
          md: '105',
        }}
        ml={{
          base: '5',
          sm: '5',
          md: '280',
        }}
      >
        <Stack spacing="10">
          <Box align="center">
            <Heading fontSize={25} fontWeight="bold" py="2">
              Settings
            </Heading>
            <Text fontSize={15} color="gray.400">
              Change your domain preferences
            </Text>
            <Divider mt={10} />
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
            <Menu>
              <MenuButton mt={30} as={Button} rightIcon={<ChevronDownIcon />}>
                Embed Profile
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onOpenManage}>Manage Profiles</MenuItem>
                <MenuDivider />
                <MenuItem onClick={onOpenCreate}>New Profile</MenuItem>
              </MenuList>
            </Menu>
            <Divider mt={10} />
            <Heading mt={30} fontSize={25}>
              Vanity
            </Heading>
            <Text mt={2} fontSize={15} color="gray.400">
              Change your extra vanity preferences
            </Text>

            <Center>
              <VStack mt={8} ml={-75} spacing={6}>
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
                    value={user.settings.urlLength}
                    onChange={e => updateURLLength(parseInt(e.target.value))}
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
                  checked={user.settings.emojiUrl}
                />
                <Switch
                  size="md"
                  id="show-Extension"
                  onChange={event =>
                    updateSetting('showExtension', event.target.checked)
                  }
                  checked={user.settings.showExtension}
                />
              </VStack>
            </Center>
            <Divider mt={10} />
            <Heading mt={4} fontSize={25} fontWeight="bold" py="2">
              Config
            </Heading>
            <Text fontSize={15} color="gray.400">
              Download your configs
            </Text>
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
          </Box>
        </Stack>
      </Card>

      {/* modals and shit below */}

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
              <Center>
                <Stack spacing="5">
                  <Button
                    onClick={() =>
                      (location.href = `${baseUrl}/config/files?key=${user.key}`)
                    }
                    mt={5}
                    variant="outline"
                    w={150}
                  >
                    ShareX
                  </Button>
                  <Button mt={5} variant="outline" w={150}>
                    iOS Shortcut
                  </Button>
                </Stack>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>

      <Flex>
        <Modal
          motionPreset="slideInBottom"
          onClose={onCloseCreate}
          isOpen={isOpenCreate}
          isCentered
          scrollBehavior="inside"
          size="3xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Embed Profile</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>
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
                // value={
                //   have fun pringles
                // }
              />
              <br />
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Site Name"
                h={35}
                maxW={350}
                // value={
                //   have fun pringles
                // }
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
                // value={
                //   have fun pringles
                // }
              />
              <br />
              <Input
                mt={3}
                size="sm"
                variant="outline"
                placeholder="Embed Author Text"
                h={35}
                maxW={350}
                // value={
                //   have fun pringles
                // }
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
                // value={
                //   have fun pringles
                // }
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
                // value={
                //   have fun pringles
                // }
              />
              <br></br>
              <Button
                mt={5}
                colorScheme="gray"
                px={4}
                py={2}
                borderRadius="4px"
                aria-label="Download a config"
              >
                Create Profile
              </Button>

              <Flex>
                <Box
                  bg={useColorModeValue('white', '#2F3136')}
                  shadow="base"
                  borderLeftWidth="4px"
                  borderRadius="4px"
                  borderColor={useColorModeValue('gray.300', 'gray.500')}
                  borderLeftColor={user.settings.embeds.list[0].color}
                  mt={{
                    base: '10',
                    sm: '10',
                    md: '-480',
                  }}
                  ml={{
                    base: '0',
                    sm: '0',
                    md: '400',
                  }}
                >
                  <Stack ml={5} mt={5} spacing="3">
                    <Link
                      color="gray.400"
                      href={user.settings.embeds.list[0].header.url}
                    >
                      {user.settings.embeds.list[0].header.text}
                    </Link>
                    <Link
                      fontWeight="600"
                      mt={-380}
                      href={user.settings.embeds.list[0].author.url}
                    >
                      {user.settings.embeds.list[0].author.text}
                    </Link>
                    <Link
                      color="blue.500"
                      mt={-380}
                      href={user.settings.embeds.list[0].title}
                    >
                      {user.settings.embeds.list[0].title}
                    </Link>
                    <Link
                      mt={-380}
                      href={user.settings.embeds.list[0].description}
                    >
                      {user.settings.embeds.list[0].description}
                    </Link>
                    <div>
                      <Image
                        mt={70}
                        height={{
                          base: '15rem',
                          sm: '15rem',
                          md: '15rem',
                        }}
                        src="https://cdn.imgs.bar/imgs-beta/29de67ce-2077-4efa-8a2b-9411f6568481.png"
                      />
                    </div>
                  </Stack>
                </Box>
              </Flex>
            </ModalBody>
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
