import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon  } from 'native-base';
import { Handshake , FloppyDisk  } from 'phosphor-react-native'


import {  StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../../components/Button';
import ACorrectiva from '../../../../components/ACorrectiva';

export default function Submit() {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ actual, setActual ] = useState("");
    const [ abastecimento, setAbastecimento ] = useState("");

    
  return (
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Reporte 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Do Trabalho
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<Handshake color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.uinputView}>
                            <ACorrectiva value={actual} setValue={setActual}/>
                        </View>

                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Ocorreram problemas de Saúde e Segurança ?</Text>
                        </View>
                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                                <Select.Item label="Yes" value="yes" />
                                <Select.Item label="No" value="no" />
                                </Select>
                            </Box>
                        </View>
                        
                        <View style={styles.uinputView}>
                            <Button
                            title='Guardar'
                            leftIcon={<Icon as={<FloppyDisk color={colors.green[700]}/>} ml={4}/>}
                            />
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