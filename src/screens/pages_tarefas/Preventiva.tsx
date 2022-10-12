import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { ClockCounterClockwise } from 'phosphor-react-native'
import { Header } from '../../components/Header';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';


export default function Preventiva() {

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
                     Tarefas 
                </Text>
                <Text color="green.500" fontSize="md" fontFamily={fonts.body}>
                     Preventivas
                </Text>
                </View>
                <Icon as ={<ClockCounterClockwise color={colors.green[500]}/>} />
            </HStack>
      </VStack>
    </VStack>
  );
}