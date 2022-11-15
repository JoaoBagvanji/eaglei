import React, { useEffect, useState } from 'react';
import { VStack, HStack, IconButton, useTheme, Image, Text, View } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import  userImg  from '../assets/helio.png';
import Logo from '../assets/eagle I 1.svg' ;


export function Header() {

    const { colors } = useTheme();
    const { fonts } = useTheme();
    const [userName, setUserName] = useState<string>();


  return (
    <VStack flex={1} pb={6} bg="white">
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            bg="white"
            pt={12}
            pb={5}
            px={6}
            flexDirection="row"
            paddingY='20'
        >
            <Logo width="70" height="40"/>

           <View>
                <Text 
                    fontSize="md"
                    color="primary.700"
                    fontFamily={fonts.heading}
                >
                    Bem Vindo ao Eagle-I
                </Text>
                <Text
                    color="primary.600"
                    lineHeight='xs'
                    fontFamily={fonts.body}
                    fontSize='sm'
                    fontWeight='semibold'
                >
                    Helio Mahesse.
                </Text>
           </View>
            
            <Image
                source={userImg} width='30' height='30' borderRadius='40' alt='Imagem de usuário'
            />
            
        </HStack>
    </VStack>
  );
}