import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { Calendar, ClockCounterClockwise } from 'phosphor-react-native'
import { Header } from '../../../components/Header';

export default function PlanoMensal() {
    const { fonts } = useTheme();
    const { colors } = useTheme();


  return (
    <VStack flex={1} pb={6} bg="white">
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                      Planos 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                      Mensais
                </Text>
                </View>
                <Icon as ={<Calendar color={colors.green[700]}/>} />
            </HStack>
      </VStack>
    </VStack>
  );
}