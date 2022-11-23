import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { Handshake, Truck } from 'phosphor-react-native'
import { Header } from '../../components/Header';

export default function Finalizado() {

    const { fonts } = useTheme();
    const { colors } = useTheme();



  return (
    <VStack flex={1} pb={6} bg="white">
       
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.600" fontSize="md" fontFamily={fonts.heading}>
                    Lista 
                </Text>
                <Text color="primary.600" fontSize="md" fontFamily={fonts.body}>
                    dos Finalizados
                </Text>
                </View>
                <Icon as ={<Handshake color={colors.green[700]}/>} />
            </HStack>
      </VStack>
    </VStack>
  );
}