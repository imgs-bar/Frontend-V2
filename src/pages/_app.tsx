import '../styles/globals.css';
import {ChakraProvider, Flex, Box} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import theme from '../styles/theme';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex minH="100vh" w="full" flexDir="column">
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
