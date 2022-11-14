import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { Lightning } from 'phosphor-react-native'


export default function Gerador() {
    const { fonts } = useTheme();
    const { colors } = useTheme();


  return (
    <VStack flex={1} pb={6} bg="white">
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Detalhes 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Do Gerador
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<Lightning color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
      <VStack flex={4}  px={6} bg='black'>
        
      </VStack>
    </VStack>
  );
}