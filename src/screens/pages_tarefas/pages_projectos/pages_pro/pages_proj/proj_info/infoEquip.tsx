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


export default function InfoEquip() {

    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ disposicao, setDisposicao ] = useState("");
    const [ reason, setReason ] = useState("");
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
                    <Text color='#12375C' fontFamily={fonts.heading}>REPARAÇÃO DE EQUIPAMENTOS</Text>
            </View>
            <View alignSelf={'center'} borderBottomColor={colors.green[700]} borderBottomWidth={2} width="70%" mb={6} mt={2}/>

                <ScrollView showsVerticalScrollIndicator={false}>

                
                
                <View alignItems='center' justifyContent='center' display='flex'>
                    <Text color='#12375C' fontFamily={fonts.body}> Tipo de Equipamento </Text>
                </View>

                <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={4}>

                    <Box maxW='300'>
                            <Select selectedValue={disposicao} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                        bg: "primary.500",
                        endIcon: <CheckIcon  size='5' />
                    }} onValueChange={itemValue => setDisposicao(itemValue)}>
                        <Select.Item label="Aircond" color='primary.700' value="Aircond" />
                        <Select.Item label="Condensor" value="Condensor" />
                        <Select.Item label="Evaporador" color='primary.700' value="Evaporador" />
                        <Select.Item label="Generator" value="Generator" />
                        </Select>
                    </Box>

                </View>

                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                      <Text color='#12375C' fontFamily={fonts.body} fontSize='xs'> Fabricante </Text>
                </View>

                <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                    <Box maxW='300'>
                            <Select selectedValue={substituido} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                        bg: "primary.500",
                        endIcon: <CheckIcon  size='5' />
                    }} onValueChange={itemValue => setSubstituido(itemValue)}>
                        <Select.Item label="Dunham Bush" value="Dunham Bush" />
                        <Select.Item label="Cummins" value="Cummins" />
                        <Select.Item label="Perkins" value="Perkins" />
                        </Select>
                    </Box>
                </View>
                
                <View style={styles.uinputView}>
                        <TextInput
                            style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C'
                            mode="outlined"
                            label="Modelo"
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
                            label="Número de Série"
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
                            label="Capacidade"
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
                            label="Tipo"
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