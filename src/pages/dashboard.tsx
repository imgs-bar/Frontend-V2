import Sidebar from '../components/Sidebar'
import {
    Flex,
    Heading,
    useColorModeValue,
    Center,
    Link,
    Text,
    Divider,
    Button,
    Box,
}
    from '@chakra-ui/react';
import React from 'react';

const Dashboard = () => {
    const color = useColorModeValue('telegram.500', 'telegram.400');
    return (
        <>
            <Flex>
                <Sidebar />
            </Flex>

            <Box pos="fixed" top="5rem" left="20rem" align="center">
                <Heading>Welcome, Flame!</Heading>
                <Divider />
            </Box>


            <Box bg="gray.200" pos="fixed" top="12rem" left="17rem" align="center">
                <Flex pos="fixed" top="12rem" left="17rem" align="center">
                    <Box
                        bg="gray.700"
                        py="20"
                        ml={50}
                        w={300}
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
                        <Text
                            mt={5}
                            fontSize={22}
                        >
                            stuff</Text>
                    </Box>
                </Flex>

                <Flex pos="fixed" top="12rem" left="40rem" align="center">
                    <Box
                        bg="gray.700"
                        py="20"
                        ml={50}
                        w={300}
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
                        <Text
                            mt={5}
                            fontSize={22}
                        >
                            100MB</Text>
                    </Box>
                </Flex>


                <Flex pos="fixed" top="12rem" left="63rem" align="center">
                    <Box
                        bg="gray.700"
                        py="20"
                        ml={50}
                        w={300}
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
                        <Text
                            mt={5}
                            fontSize={22}
                        >
                            100</Text>
                    </Box>
                </Flex>


                <Flex pos="fixed" top="12rem" left="86rem" align="center">
                    <Box
                        bg="gray.700"
                        py="20"
                        ml={50}
                        w={300}
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
                        <Button mt={3.5} borderRadius="full" variant="outline">Manage Invites</Button>
                    </Box>
                </Flex>
            </Box>

            <Box pos="fixed" top="35rem" left="20rem" align="center">
                <Heading>Gallery</Heading>
                <Divider />
            </Box>

        </>
    );
}
export default Dashboard