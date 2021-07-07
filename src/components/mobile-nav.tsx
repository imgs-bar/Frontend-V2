import React from 'react';
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import {HamburgerIcon} from '@chakra-ui/icons';

export default function MobileNav() {
  const {isOpen, onToggle, onClose} = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        aria-label="Navigation Menu"
        variant="ghost"
        display={['flex', null, 'none']}
        icon={<HamburgerIcon />}
        onClick={onToggle}
        ref={btnRef}
      />
      <Drawer
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="left"
      >
        <DrawerOverlay zIndex="overlay" />
        <DrawerContent zIndex="drawer">
          <DrawerBody p={0} bg="#1D2432">
            <Sidebar w="100%" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
