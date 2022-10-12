import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { ArrowLeft, Truck ,ArrowRight } from 'phosphor-react-native'
import { Header } from '../../components/Header';

export default function Transfers() {

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
                        Navegue 
                    </Text>
                    <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                        entre as Transferências
                    </Text>
                </View>
                <View>
                    <Icon as ={<ArrowLeft color={colors.green[700]} size={16}/>} />
                    <Icon as ={<Truck color={colors.primary[600]}/>}/>
                    <Icon as ={<ArrowRight color={colors.green[700]} size={16}/>} />
                </View>
                
            </HStack>
      </VStack>
    </VStack>
  );
}