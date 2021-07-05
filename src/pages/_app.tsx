import '../styles/globals.css';
import {ChakraProvider, Flex, Box} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import theme from '../styles/theme';
import {useState} from 'react';
import {User} from '../../typings';
import {UserProvider} from '../components/user';

function MyApp({Component, pageProps}: AppProps) {
  const [user, setUser] = useState<User>(null);

  return (
    <>
      <ChakraProvider theme={theme}>
        <UserProvider value={{user, setUser}}>
          <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
