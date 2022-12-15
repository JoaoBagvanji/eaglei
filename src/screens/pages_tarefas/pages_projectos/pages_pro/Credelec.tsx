import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme , ScrollView  } from 'native-base';
import { LightbulbFilament, FloppyDisk  } from 'phosphor-react-native'


import {  StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import Actual from '../../../../components/Actual';
import Valor from '../../../../components/Valor';
import Numero from '../../../../components/Numero';
import Posterior from '../../../../components/Posterior';
import Transacao from '../../../../components/Transacao';
import { Button } from '../../../../components/Button';

export default function Credelec() {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ actual, setActual ] = useState("");
    const [ valor, setValor ] = useState("");
    const [ numero, setNumero ] = useState("");
    const [ posterior, setPosterior ] = useState("");
    const [ transacao, setTransacao ] = useState("");
    
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
                    <Icon as ={<LightbulbFilament color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.uinputView}>
                            <Actual value={actual} setValue={setActual}/>
                        </View>
                        <View style={styles.uinputView}>
                            <Valor value={valor} setValue={setValor}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Numero value={numero} setValue={setNumero}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Posterior value={posterior} setValue={setPosterior}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Transacao value={transacao} setValue={setTransacao}/>
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