import React, { useState, useContext} from 'react';
import { VStack, HStack, useTheme, Image, Text, View } from 'native-base';

import  userImg  from '../assets/helio.png';
import Logo from '../assets/eagle I 1.svg' ;
import PopupMenu from './PopupMenu2';
import {AuthContext} from "../context/auth";


export function Header() {

    const {utilizadorr}=useContext(AuthContext);

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
            pt='20%'
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
                    {utilizadorr.nome}
                </Text>
           </View>
            
            <PopupMenu
            />
            
        </HStack>
    </VStack>
  );
}