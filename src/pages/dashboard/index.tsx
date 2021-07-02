import Sidebar from './../../components/Sidebar'
import Navbar from './../../components/Navbar-Dash'
import Nav from './../../components/mobile-nav'

import {
    Flex,
    Heading,
    useColorModeValue,
    useColorMode,
    Center,
    Link,
    Text,
    IconButton,
    Divider,
    Button,
    Box,
}
    from '@chakra-ui/react';
import React from 'react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

const Dashboard = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue('telegram.500', 'telegram.400');
    const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  })
  
    return (
        <>
            <Flex>
                <Sidebar />
                <Nav />
                <Navbar />
            </Flex>

            {/* <Box pos="fixed" top="5rem" left="20rem" align="center"> */}
            <Box ml={72} mt={85} >
                <Heading fontSize={{ base: '20', md: '35', sm: '15' }} >Welcome, Flame!</Heading>
            </Box>


                {/* <Flex pos="fixed" top="12rem" left="17rem" align="center"> */}
                    <Box
                        flexShrink={0}
                        bg="gray.700"
                        py="20"
                        ml={80}
                        mt={63.6}
                        // w={300}
                        w={[80, 180, 300]}
                        borderRadius="xl"
                        textAlign="center"
                        shadow="dark-lg"
                    >
                        <Text
                            fontSize={25}
                            color="#808191"
                            mt={-12}
                        >
                            MOTD:</Text>
                            <Divider mt="4" />
                        <Text
                            mt={5}
                            fontSize={22}
                        >
                            stuff</Text>
                            </Box>

                {/* <Flex pos="fixed" top="12rem" left="40rem" align="center"> */}
                    <Box
                    flexShrink={0}
                        bg="gray.700"
                        py="20"
                        ml={690}
                        mt={-218}
                        w={[80, 180, 300]}
                        shadow="dark-lg"
                        borderRadius="xl"
                        textAlign="center"
                    >
                        <Text
                            fontSize={25}
                            mt={-12}
                            color="#808191"
                        >
                            Storage Used:</Text>
                            <Divider mt="4" />
                        <Text
                            mt={5}
                            fontSize={22}
                        >
                            100MB</Text>
                    </Box>
                {/* </Flex> */}


                {/* <Flex pos="fixed" top="12rem" left="63rem" align="center"> */}
                    <Box
                    flexShrink={0}
                        bg="gray.700"
                        py="20"
                        ml={1060}
                        mt={-218}
                        w={[80, 180, 300]}
                        borderRadius="xl"
                        textAlign="center"
                        shadow="dark-lg"
                    >
                        <Text
                            fontSize={25}
                            mt={-12}
                            color="#808191"
                        >
                            Uploads:</Text>
                            <Divider mt="4" />
                        <Text
                            mt={5}
                            fontSize={22}
                        >
                            100</Text>
                    </Box>
                {/* </Flex> */}


                {/* <Flex pos="fixed" top="12rem" left="86rem" align="center"> */}
                    <Box
                    flexShrink={0}
                        bg="gray.700"
                        py="20"
                        ml={1435}
                        mt={-218}
                        w={[80, 180, 300]}
                        borderRadius="xl"
                        textAlign="center"
                        shadow="dark-lg"
                    >
                        <Text
                            fontSize={25}
                            mt={-12}
                            color="#808191"
                        >
                            Invites:</Text>
                            <Divider mt="4" />
                        <Button mt={3} borderRadius="full" variant="outline">Manage Invites</Button>
                    </Box>
                {/* </Flex> */}
            {/* </Box> */}

            <Box pos="fixed" top="35rem" left="20rem" align="center">
                <Heading>Gallery</Heading>
            </Box>

        </>
    );
}
export default Dashboard