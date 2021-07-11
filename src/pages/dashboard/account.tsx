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
} from '@chakra-ui/react';
import {Avatar, AvatarBadge, AvatarGroup} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {setting} from '../../../typings';
import {updateSettings} from '../../api/api';
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
          maxW="80%"
          bg="#212938"
          borderRadius="md"
          h="52rem"
          mt="100"
          ml="323"
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
            name="stuff"
            src="https://cdn.discordapp.com/avatars/417330353917657100/a_09774470b970a3290ccf1d5043d33cd1.gif?size=256&f=.gif"
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
            <Button isDisabled size="sm" colorScheme="gray" borderRadius="5">
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
