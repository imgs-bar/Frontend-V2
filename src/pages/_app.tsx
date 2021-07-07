import '../styles/globals.css';
import {ChakraProvider, Skeleton} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import theme from '../styles/theme';
import React, {useState} from 'react';
import {User} from '../../typings';
import {UserProvider, useUser} from '../components/user';
import {useEffect} from 'react';
import {getAuthStatus} from '../api/api';
import {NextSeo} from 'next-seo';

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
      <NextSeo
        title="imgs.bar beta"
        description="Beta for imgs.bar"
        additionalMetaTags={[
          {
            property: 'theme-color',
            content: '#005b96',
          },
        ]}
        openGraph={{
          title: 'imgs.bar beta.',
          description: 'Beta site for imgs.bar, idk how u found this xD',
        }}
      />
      <ChakraProvider theme={theme}>
        {user !== undefined ? (
          <UserProvider value={{user, setUser}}>
            <Component {...pageProps} />
          </UserProvider>
        ) : (
          <Skeleton height="200px" />
        )}
      </ChakraProvider>
    </>
  );
}
export default MyApp;
