import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { ListChecks } from 'phosphor-react-native'
import { Header } from '../components/Header';
export default function Tarefa() {

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
                <Text color="green.500" fontSize="md" fontFamily={fonts.heading}>
                    Navegue 
                </Text>
                <Text color="green.500" fontSize="md" fontFamily={fonts.body}>
                    entre as Tarefas
                </Text>
                </View>
                <Icon as ={<ListChecks color={colors.green[500]}/>} />
            </HStack>
      </VStack>
    </VStack>
  );
}