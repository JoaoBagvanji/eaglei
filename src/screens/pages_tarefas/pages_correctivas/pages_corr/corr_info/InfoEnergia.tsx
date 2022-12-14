import { Box, CheckIcon,  ScrollView, Select, useTheme, View, VStack, Text } from 'native-base';
import {  StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import React, { useState } from 'react';
import Horas from '../../../../../components/Horas';
import HorasAtuais from '../../../../../components/HorasAtuais';
import HorasFuncionamento from '../../../../../components/HorasFuncionamento';
import HorasReabastecimento from '../../../../../components/HorasReabastecimento';
import Preco from '../../../../../components/Preco';
import Reabastecimento from '../../../../../components/Reabastecimento';
import { TextInput } from 'react-native-paper';


export default function corr_info() {

    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ reason, setReason ] = useState("");
    const [ abastecimento, setAbastecimento ] = useState("");
    const [ repair, setRepair ] = useState("");
    const [ value, setValue ] = useState("");
    const [ reabastecimento, setReabastecimento ] = useState("");
    const [ funcionamento, setFuncionamento ] = useState("");
    const [ actuais, setActuais ] = useState("");
    const [ reabasteceLitros, setReabasteceLitros ] = useState("");
    const [ preco, setPreco ] = useState("");
    const [ details, setDetails ] = useState("");
    const [ substituido, setSubstituido ] = useState("");
    
  return (
    <VStack flex={1} pb={4} mb={'20%'} bg="white">

<VStack mt='10%' mb='35%'>
    
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            
            <View alignItems='center' justifyContent='center' display='flex'>
                    <Text color='#12375C' fontFamily={fonts.heading}>DETALHES DE ENERGIA</Text>
            </View>
            <View alignSelf={'center'} borderBottomColor={colors.green[700]} borderBottomWidth={2} width="70%" mb={6} mt={2}/>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.uinputView}>
                        <TextInput
                            style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C'
                            mode="outlined"
                            label="Actual Kw/h"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={reason}
                            onChangeText={(text) => setReason(text)}
                            autoComplete='off'
                            />
                    </View>

                    <View style={styles.uinputView}>
                        <TextInput
                            style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C'
                            mode="outlined"
                            label="Kw/h Posterior"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={reason}
                            onChangeText={(text) => setReason(text)}
                            autoComplete='off'
                            />
                    </View>

                    <View style={styles.uinputView}>
                        <TextInput
                            style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C'
                            mode="outlined"
                            label="Valor Adicionado"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={reason}
                            onChangeText={(text) => setReason(text)}
                            autoComplete='off'
                            />
                    </View>

                    <View style={styles.uinputView}>
                        <TextInput
                            style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C'
                            mode="outlined"
                            label="Número de Transação"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={reason}
                            onChangeText={(text) => setReason(text)}
                            autoComplete='off'
                            />
                    </View>

                    <View style={styles.uinputView}>
                        <TextInput
                            style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C'
                            mode="outlined"
                            label="Número de Credelec"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={reason}
                            onChangeText={(text) => setReason(text)}
                            autoComplete='off'
                            />
                    </View>
                    

                </ScrollView>
            </KeyboardAvoidingView>
        </VStack>

    </VStack>
  );
}

const styles =StyleSheet.create({
    txtInput:{
        backgroundColor: '#fff',
        textColor: '#12375C',
        width: 300,
        fontSize: 12,
        textAlign: 'center',
        height: 50,
    },
    uinputView:{
        marginVertical: "5%",
        height:56,
        width: "100%",
        justifyContent: 'center',
        alignItems:'center',
        
    },
    container:{
        flex:1,
        
    }
   
})