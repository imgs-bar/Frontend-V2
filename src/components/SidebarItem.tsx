import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton
} from '@chakra-ui/react'

export default function NavItem({ navSize, title, icon, active }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "telegram.400"}
                    p={3}
                    borderRadius={8} // too round maybe?
                    _hover={{ textDecor: 'none', backgroundColor: 'telegram.400' }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "" : ""} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}