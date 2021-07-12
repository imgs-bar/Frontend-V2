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
  Text,
  useDisclosure,
  useToast,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import Nav from '../../components/mobile-nav';
import Navbar from '../../components/Navbar-Dash';
import Sidebar from '../../components/Sidebar';
import {useUser} from '../../components/user';

const Domains = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = value => setValue(value);
  const toast = useToast();

  const {
    isOpen: isOpenDonate,
    onOpen: onOpenDonate,
    onClose: onCloseDonate,
  } = useDisclosure();
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  const colorCon = useColorModeValue('gray.100', '#212938');

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
          bg={colorCon}
          borderRadius="md"
          h="50rem"
          mt={{
            base: '100',
            sm: '100',
            md: '130',
          }}
          ml={{
            base: '41',
            sm: '284',
            md: '350',
          }}
        >
          <Center>
            <Heading fontSize={25} mt={30} ml={15}>
              Domains
            </Heading>
          </Center>
          <Center>
            <Text mt={15} fontSize={15} color="gray.400">
              Donate and view domains here
            </Text>
          </Center>
          <Center>
            <Text fontSize={15} color="gray.400" mt={2} ml={15}></Text>
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
                Donate a Domain
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onOpenDonate}>Donate a Domain</MenuItem>
                <MenuDivider />
                <MenuItem>Manage your Domains</MenuItem>
              </MenuList>
            </Menu>
          </Center>
          <Divider mt={10} />
          {/* </VStack> */}
        </Container>

        <Flex>
          <Modal
            motionPreset="slideInBottom"
            onClose={onCloseDonate}
            isOpen={isOpenDonate}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Donate a Domain</ModalHeader>
              <Divider />
              <ModalCloseButton />
              <ModalBody>
                <Text mt={15} fontSize={15}>
                  Set your domains nameservers to:
                </Text>
                <br />
                <b>glen.ns.cloudflare.com : lara.ns.cloudflare.com</b>
                <Text mt={30} fontSize={15} color="gray.400">
                  Domain:
                </Text>
                <Input
                  mt={3}
                  size="sm"
                  variant="outline"
                  placeholder="Domain"
                  h={35}
                  maxW={350}
                />
                <Button
                  mt={5}
                  colorScheme="gray"
                  // borderRadius="none"
                  variant="outline"
                  aria-label="Submit"
                >
                  Done
                </Button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </VStack>
    </>
  ) : null;
};

export default Domains;
