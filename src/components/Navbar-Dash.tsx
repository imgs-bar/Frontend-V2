import NextLink from 'next/link';
import { Button, Flex, useColorModeValue, IconButton } from '@chakra-ui/react';
// import ThemeToggle from '../theme-toggle';
import MobileNav from './mobile-nav';
import ThemeToggle from './theme-toggle';
import { TITLE } from '../../utils/stuff';

export default function Header() {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <>
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={[0, 0, 0]}
      right={0}
      align="center"
      h={16}
      px={[4, 6, 8]}
      bg="#212938"
      zIndex="docked"
    >
      <Flex w="full" align="center" justify="center">
        <Flex w="full" align="center" justify="space-between">
          <Flex align="center">
            <NextLink href="/dashboard" passHref>
              <Button as="a" variant="ghost" px={0} fontWeight="bold">
                {TITLE}
              </Button>
            </NextLink>
          </Flex>
          <Flex>
            <ThemeToggle mr={`-${3}`} />
            <MobileNav />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
</>
  );
}