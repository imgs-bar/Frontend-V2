import {Box, Flex, Text, VStack, useColorModeValue} from '@chakra-ui/react';
import {NavLink} from './nav-link';
import {HiHome} from 'react-icons/hi';
import {AiFillPicture} from 'react-icons/ai';
import {IoIosBrowsers} from 'react-icons/io';

import {SettingsIcon} from '@chakra-ui/icons';

const SidebarLink = ({href, children, icon}) => (
  <NavLink href={href}>
    <Flex align="center">
      <Box as={icon} mr={3} w={6} />
      <Text fontSize="sm" fontWeight="medium">
        {children}
      </Text>
    </Flex>
  </NavLink>
);

function PageLinks() {
  return (
    <VStack w="full" spacing={1}>
      <SidebarLink href="/dashboard" icon={HiHome}>
        Home
      </SidebarLink>
      <SidebarLink href="/dashboard/settings" icon={SettingsIcon}>
        Settings
      </SidebarLink>
      <SidebarLink href="/dashboard/domains" icon={IoIosBrowsers}>
        Domains
      </SidebarLink>
      <SidebarLink href="/dashboard/gallery" icon={AiFillPicture}>
        Gallery
      </SidebarLink>
    </VStack>
  );
}

function SidebarContainer(props) {
  return (
    <Box
      as="aside"
      position="fixed"
      top={0}
      w={64}
      insexx={0}
      h="full"
      {...props}
    />
  );
}

export default function Sidebar(props) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const colorBox = useColorModeValue('gray.200', '#1D2432');

  return (
    <SidebarContainer>
      <Flex w="full" align="center" h={16} p={3} as="nav">
        <Flex boxSize="full" align="center" px={3}>
          <Flex boxSize="full" align="center">
            <Box
              // as={LogoMark}
              h={8}
              w="auto"
              display={{base: 'block', lg: 'none'}}
            >
              <Text fontSize="25">
                <b>imgs.bar</b>
              </Text>
            </Box>

            <Box
              // as={LogoOnDark}
              h={8}
              w="auto"
              display={{base: 'none', lg: 'block'}}
            />
          </Flex>
        </Flex>
      </Flex>
      <VStack
        as="nav"
        aria-label="Main navigation"
        position="relative"
        h="calc(100vh - 4rem)"
        p={3}
        bg={colorBox}
        overflowY="auto"
        {...props}
      >
        <PageLinks />
      </VStack>
    </SidebarContainer>
  );
}
