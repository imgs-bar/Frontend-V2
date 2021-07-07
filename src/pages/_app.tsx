import '../styles/globals.css';
import {ChakraProvider, Skeleton} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import theme from '../styles/theme';
import React, {useState} from 'react';
import {User} from '../../typings';
import {UserProvider, useUser} from '../components/user';
import {useEffect} from 'react';
import {getAuthStatus} from '../api/api';

function MyApp({Component, pageProps}: AppProps) {
  const [user, setUser] = useState<User>(undefined);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const status = await getAuthStatus();
        setUser(status);
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
        {user !== undefined ? (
          <UserProvider value={{user, setUser}}>
            <Component {...pageProps} />
          </UserProvider>
        ) : (
          <Skeleton height="max-content" />
        )}
      </ChakraProvider>
    </>
  );
}
export default MyApp;
