import { useColorMode, IconButton, Flex, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [display, changeDisplay] = useState('none')
    return (
        <Flex>
            <Flex
                pos="fixed"
                top="1rem"
                right="1rem"
                align="center"
            >
                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                >
                    <NextLink href="/login" passHref>
                        <Button
                            as="a"
                            colorScheme="telegram"
                            variant="solid"
                            aria-label="Login"
                            my={5}
                            w="100%"
                        >
                            Login
                        </Button>
                    </NextLink>

                    <NextLink href="/register" passHref>
                        <Button
                            as="a"
                            colorScheme="telegram"
                            variant="solid"
                            aria-label="Register"
                            my={5}
                            ml={2}
                            w="100%"
                        >
                            Register
                        </Button>
                    </NextLink>
                </Flex>

                <IconButton
                    aria-label="Open Menu"
                    size="md"
                    mr={2}
                    borderRadius="md"
                    icon={<HamburgerIcon />}
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={() => changeDisplay('flex')}
                />

                <Flex>

                    <IconButton
                        aria-label="Toggle Dark"
                        ml={2}
                        size="md"
                        borderRadius="md"
                        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                        onClick={toggleColorMode}
                    />
                </Flex>



                <Flex
                    w="100vw"
                    bgColor="gray.80"
                    zIndex={20}
                    borderRadius="md"
                    h="100vh"
                    pos="fixed"
                    top="0"
                    left="0"
                    overflowY="auto"
                    flexDir="column"
                    display={display}
                >
                    <Flex justify="flex-end">
                        <IconButton
                            mt={2}
                            mr={2}
                            aria-label="Close Menu"
                            size="md"
                            borderRadius="md"
                            icon={
                                <CloseIcon />
                            }
                            onClick={() => changeDisplay('none')}
                        />
                    </Flex>

                    <Flex
                        flexDir="column"
                        align="center"
                    >

                        <NextLink href="/login" passHref>
                            <Button
                                as="a"
                                colorScheme="telegram"
                                variant="outline"
                                aria-label="Login"
                                my={5}
                                w="100%"
                            >
                                Login
                            </Button>
                        </NextLink>

                        <NextLink href="/register" passHref>
                            <Button
                                as="a"
                                colorScheme="telegram"
                                variant="solid"
                                aria-label="Register"
                                my={5}
                                ml={2}
                                w="100%"
                            >
                                Register
                            </Button>
                        </NextLink>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DarkModeSwitch