import '../styles/globals.css';
import {ChakraProvider} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import theme from '../styles/theme';
import {useState} from 'react';
import {User} from '../../typings';
import {UserProvider} from '../components/user';
import {useEffect} from 'react';
import {getAuthStatus} from '../api/api';

function MyApp({Component, pageProps}: AppProps) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const user = await getAuthStatus();
        console.log(user);
        setUser(user);
      } catch (err) {
        setUser(null);
        console.log(err);
      }
    };
    if (!user) getUserInfo();
  });

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
