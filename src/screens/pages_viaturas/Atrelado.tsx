import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { Truck } from 'phosphor-react-native'
import { Header } from '../../components/Header';
import { StackActions, useNavigation } from '@react-navigation/native';

export default function Atrelado() {

    const { fonts } = useTheme();
    const { colors } = useTheme();

    const navigation = useNavigation();

 
  return (
   
          <VStack flex={1} pb={6} bg="white">
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                    Navegue 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                    entre os Atrelados
                </Text>
                </View>
                <Icon as ={<Truck color={colors.green[700]}/>} />
            </HStack>
      </VStack>
    </VStack>
  
  );
  

    
}