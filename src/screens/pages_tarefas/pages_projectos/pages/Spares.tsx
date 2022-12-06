import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme , ScrollView  } from 'native-base';
import { Package  } from 'phosphor-react-native'


import {  StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';



export default function Spares() {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    
    
  return (
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Detalhes 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     De Energia
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<Package color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView showsVerticalScrollIndicator={false}>
                        <View justifyContent="center" alignItems='center' mt='50%'>
                            <Text fontFamily={fonts.heading} color={colors.primary[700]}> Estoque pessoal indisponível</Text>
                        </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </VStack>
        </SafeAreaView>
    </VStack> 
  );
}

const styles =StyleSheet.create({
    
    uinputView:{
        marginTop: "5%",
        height:56,
        width: "100%",
        justifyContent: 'center',
        alignItems:'center',
        
    },
    container:{
        flex:1,
        
    }
   
})