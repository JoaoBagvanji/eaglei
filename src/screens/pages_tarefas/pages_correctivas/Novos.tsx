import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { FilePlus } from 'phosphor-react-native'
import { Header } from '../../../components/Header';

export default function Novos() {

    const { fonts } = useTheme();
    const { colors } = useTheme();



  return (
    <VStack flex={1} pb={6} bg="white">
        <HStack>
            <Header />
        </HStack>
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                    Tarefas 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                    Novas 
                </Text>
                </View>
                <Icon as ={<FilePlus color={colors.green[700]}/>} />
            </HStack>
      </VStack>
    </VStack>
  );
}