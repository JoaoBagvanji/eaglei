import React, { useState } from 'react';
import { VStack, HStack, Icon, useTheme, Text, View } from 'native-base';

import { House } from 'phosphor-react-native'
import { Load } from '../components/Load';
import { Header } from '../components/Header';


export function Home() {

  const { fonts } = useTheme();
  const { colors } = useTheme();
  const [loading, setLoading ] = useState(true);

  // if(loading)
  //   return <Load />
  
  return (
    <VStack flex={1} pb={6} bg="white">
      <HStack>
        <Header />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
          <View>
          <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
            Navegue 
          </Text>
          <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
            entre os Menus
          </Text>
          </View>
          <Icon as ={<House color={colors.green[700]}/>} />
        </HStack>
      </VStack>

      <HStack>

      </HStack>

    </VStack>
  );
}