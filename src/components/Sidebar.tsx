import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavItem from './SidebarItem'
import {
    FiHome,
    FiSettings,
    FiImage,
    FiMail
} from 'react-icons/fi';
import { VscTools } from 'react-icons/vsc';
import { RiVipDiamondLine } from 'react-icons/ri';


export default function Sidebar() {
    const [navSize, changeNavsize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="0"
            h="100vh"
            marginTop="0vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.6)"
            borderRadius={navSize == "small" ? "8px" : "10px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            backgroundColor="#212938"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<HamburgerIcon />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavsize("large")
                        else
                            changeNavsize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Home" active />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
                <NavItem navSize={navSize} icon={FiImage} title="Gallery" />
                <NavItem navSize={navSize} icon={VscTools} title="Tools" />
                <NavItem navSize={navSize} icon={RiVipDiamondLine} title="Premium" />
                <br />
                <Divider />
                <NavItem navSize={navSize} icon={FiMail} title="Mail" />

            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="https://images-ext-2.discordapp.net/external/1kqXcljgzshKaeJq-G40sur-TRBpnzSmlRIsAtSWW78/%3Fsize%3D256%26f%3D.gif/https/cdn.discordapp.com/avatars/417330353917657100/a_2e205a9df43893c196e73fcbe027d987.gif" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Flame</Heading>
                        <Text>Admin</Text>
                    </Flex>
                </Flex>

            </Flex>
        </Flex >
    )
}