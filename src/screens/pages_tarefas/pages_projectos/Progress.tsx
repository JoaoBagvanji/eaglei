import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { HourglassMedium } from 'phosphor-react-native'
import { Header } from '../../../components/Header';

export default function Progress() {

    const { fonts } = useTheme();
    const { colors } = useTheme();



  return (
    <VStack flex={1} pb={6} bg="white">
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                    Projectos 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     em progresso 
                </Text>
                </View>
                <Icon as ={<HourglassMedium color={colors.green[700]}/>} />
            </HStack>
      </VStack>
    </VStack>
  );
}