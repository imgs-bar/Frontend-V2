import {Text, TextProps, Center} from '@chakra-ui/react';
import * as React from 'react';

export const Footer = (props: TextProps) => (
  <Center>
    <Text mt={10} fontSize="lg" {...props}>
      &copy; {new Date().getFullYear()} | imgs.bar
    </Text>
  </Center>
);
