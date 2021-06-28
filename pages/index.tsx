import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import DarkModeSwitch from '../components/DarkModeSwitch'

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400")


  return (
    <>

      <DarkModeSwitch />
      <Box
        textAlign="center"
        m={350}
      >
        <Box>
          <Heading fontWeight="700" py="2">
            imgs.bar
          </Heading>
          <Heading fontSize="2xl" fontWeight="500" py="2">
            <Text fontWeight="500" as="span" color={color}>
              Invite-only{" "}
            </Text>
            file hosting.{" "}
          </Heading>
          <Text>
            A{" "}
            <Text as="span" fontWeight="600">
              privacy {" "}
            </Text>
            based{" "}
            <Text as="span" fontWeight="600">
              file host,{" "}
            </Text>
            with 100+ domains and an amazing community.{" "}
          </Text>

        </Box>
      </Box>

      <Stack direction="row" spacing={1}>

      </Stack>
    </>
  )
}

export default Home
