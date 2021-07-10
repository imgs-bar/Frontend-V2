import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar-Dash';
import Nav from '../../components/mobile-nav';

import React, {useEffect} from 'react';

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
  InputGroup,
  Input,
  Switch,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Avatar,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import {useUser} from '../../components/user';
import {useRouter} from 'next/router';

const Account = () => {
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();

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
              Account
            </Heading>
          </Center>
          <Divider mt={10} />
          <Center></Center>
          <Center>
            <Avatar
              name="Flame"
              mt={5}
              bg="black"
              shadow="dark-lg"
              size="2xl"
              src="https://cdn.discordapp.com/avatars/417330353917657100/a_09774470b970a3290ccf1d5043d33cd1.gif?size=256&f=.gif"
            />
          </Center>
          <Center>
            <Text mt={5} fontSize={20}>
              {user.username} ({user.uid})
            </Text>
          </Center>
          <Center>
            <Text fontSize={15} color="gray.400">
              Your status: {user.roles}
            </Text>
          </Center>
          <Center>
            <Stack mt={10} spacing={8}>
              <InputGroup>
                <Input
                  w={400}
                  min={3}
                  max={14}
                  textAlign="center"
                  placeholder={user.username}
                />
                <br></br>
              </InputGroup>
              <InputGroup>
                <Input
                  w={400}
                  textAlign="center"
                  placeholder="Change your Password"
                />
                <br></br>
              </InputGroup>
              <InputGroup>
                <Input
                  textAlign="center"
                  isDisabled
                  w={400}
                  placeholder="UID"
                />
              </InputGroup>
            </Stack>
          </Center>
          <Center mt={10}>
            <Button
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              onClick={onOpenConfirm}
            >
              Save Changes
            </Button>
          </Center>
          <Center mt={-50}>
            <HStack mt={16} spacing="24px">
              <Button
                px={4}
                w={200}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                // mt={20}
                borderWidth="1px"
                // onClick={}
              >
                File Archive
              </Button>
              <Button
                px={4}
                // mt={20}
                py={2}
                w={200}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                onClick={onOpenConfirm}
              >
                Wipe Files
              </Button>
              <Button
                px={4}
                w={200}
                // mt={20}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                onClick={onOpenConfirm}
              >
                Delete Account
              </Button>
              <Button
                px={4}
                w={200}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                onClick={onOpenConfirm}
              >
                Relink Discord
              </Button>
              <Button
                px={4}
                w={200}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                onClick={onOpenConfirm}
              >
                2FA
              </Button>
            </HStack>
          </Center>
          <Divider mt={10} />
          <Center>
            <Stack mt={30} align="center"></Stack>
          </Center>
          <Center>
            <VStack ml={-75} spacing={6}>
              <Tooltip
                label="Toggles the visibility of your profile"
                placement="left-start"
              >
                <Text>Private Profile</Text>
              </Tooltip>

              <Tooltip
                label="tbh i have no idea wtf this shit is ook"
                placement="left-start"
              >
                <Text>stuff</Text>
              </Tooltip>
            </VStack>
          </Center>
          <Center>
            <VStack mt={-75} ml={105} spacing={6}>
              <Switch size="md" />
              <Switch size="md" />
            </VStack>
          </Center>
          <Divider mt={10} />
        </Container>
      </VStack>
      <Flex>
        <Modal
          motionPreset="slideInBottom"
          onClose={onCloseConfirm}
          isOpen={isOpenConfirm}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody>ok</ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  ) : null;
};
export default Account;
