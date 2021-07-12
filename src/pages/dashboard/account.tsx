import {DownloadIcon} from '@chakra-ui/icons';
import {
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import {Avatar, AvatarBadge, AvatarGroup} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {setting} from '../../../typings';
import {BASE_URL, updateSettings} from '../../api/api';
import Nav from '../../components/mobile-nav';
import Navbar from '../../components/Navbar-Dash';
import Sidebar from '../../components/Sidebar';
import {useUser} from '../../components/user';

const Account = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = value => setValue(value);
  const toast = useToast();

  const {
    isOpen: isOpenConfigs,
    onOpen: onOpenConfigs,
    onClose: onCloseConfigs,
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

  const colorBox = useColorModeValue('gray.200', 'gray.700');
  const colorCon = useColorModeValue('gray.100', '#212938');

  return user ? (
    // return (
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
          // bg="#212938"
          bg={colorBox}
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
          <Heading fontSize={21} mt={30} ml={15}>
            Name & Avatar
          </Heading>
          <Text mt={2} ml={15} fontSize={14.4} color="gray.400">
            View your name and profile picture
          </Text>
          <Avatar
            mt={25}
            ml={15}
            bg="none"
            name={user.username}
            src={user.discord.avatar ? user.discord.avatar : null}
          />
          <Text mt={-12} fontSize="16" ml={89}>
            {user.username}
          </Text>
          <Text mt={0} ml={89} fontSize={14.4} color="gray.400">
            Joined July, 2021
          </Text>
          <Stack spacing={4} ml={15} mt={30} direction="row" align="center">
            <Button size="sm" colorScheme="gray" borderRadius="5">
              Change Username
            </Button>
            <Button
              isDisabled={!user.roles.premium.status}
              size="sm"
              colorScheme="gray"
              borderRadius="5"
            >
              Change UID
            </Button>
          </Stack>
          <Divider mt={10} />
          <Heading fontSize={21} mt={30} ml={15}>
            Login Details
          </Heading>
          <Text mt={2} ml={15} fontSize={14.4} color="gray.400">
            Change your email and password
          </Text>
          <Input
            mt={8}
            ml={15}
            maxW="17.5%"
            isDisabled
            value={user.email}
            placeholder=""
            size="sm"
          />
          <Stack spacing={4} mt={30} direction="row" align="center">
            <Button size="sm" ml={15} colorScheme="gray" borderRadius="5">
              Change Email
            </Button>
            <Button size="sm" colorScheme="gray" borderRadius="5">
              Change Password
            </Button>
            <Button
              size="sm"
              colorScheme="gray"
              borderRadius="5"
              onClick={() => {
                location.href = `${BASE_URL}/discord/link`;
              }}
            >
              Link discord
            </Button>
          </Stack>
          <Divider mt={10} />
          <Heading fontSize={21} mt={30} ml={15}>
            idk yet
          </Heading>
          <Text mt={2} ml={15} fontSize={14.4} color="gray.400">
            idk lol idk lol lol
          </Text>
          <Stack spacing={4} mt={30} direction="row" align="center">
            <Button size="sm" ml={15} colorScheme="gray" borderRadius="5">
              File Archive
            </Button>
            <Button size="sm" ml={15} colorScheme="gray" borderRadius="5">
              File Archive
            </Button>
            <Button size="sm" ml={15} colorScheme="gray" borderRadius="5">
              Relink Discord
            </Button>
            <Button size="sm" ml={15} colorScheme="gray" borderRadius="5">
              Wipe Files
            </Button>
            <Button w={100} size="sm" colorScheme="gray" borderRadius="5">
              2FA
            </Button>
          </Stack>
          <Divider mt={10} />
          <Button
            mt={50}
            ml={15}
            w={100}
            size="sm"
            colorScheme="telegram"
            borderRadius="5"
          >
            Save Changes
          </Button>
        </Container>
      </VStack>
    </>
  ) : null;
};

export default Account;
