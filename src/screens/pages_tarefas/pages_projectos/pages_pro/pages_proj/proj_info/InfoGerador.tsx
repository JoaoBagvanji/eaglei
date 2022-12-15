import { Box, CheckIcon,  ScrollView, Select, useTheme, View, VStack, Text } from 'native-base';
import {  StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import React, { useState } from 'react';


import Horas from '../../../../../../components/Horas';
import HorasAtuais from '../../../../../../components/HorasAtuais';
import HorasReabastecimento from '../../../../../../components/HorasReabastecimento';
import Preco from '../../../../../../components/Preco';
import Reabastecimento from '../../../../../../components/Reabastecimento';


export default function InfoGerador() {

    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ disposicao, setDisposicao ] = useState("");
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
                    <Text color='#12375C' fontFamily={fonts.heading}>DETALHES DO GERADOR</Text>
            </View>
            <View alignSelf={'center'} borderBottomColor={colors.green[700]} borderBottomWidth={2} width="70%" mb={6} mt={2}/>

                <ScrollView showsVerticalScrollIndicator={false}>

                
                
                <View alignItems='center' justifyContent='center' display='flex'>
                    <Text color='#12375C' fontFamily={fonts.body}> Móvel ou Fixo</Text>
                </View>

                <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={4}>

                    <Box maxW='300'>
                            <Select selectedValue={disposicao} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                        bg: "primary.500",
                        endIcon: <CheckIcon  size='5' />
                    }} onValueChange={itemValue => setDisposicao(itemValue)}>
                        <Select.Item label="Móvel" color='primary.700' value="movel" />
                        <Select.Item label="Fixo" value="fixo" />
                        </Select>
                    </Box>

                </View>

                <View style={styles.uinputView}>
                      <Horas value={value} setValue={setValue}/>
                </View>

                <View style={styles.uinputView}>
                    <HorasAtuais value={actuais} setValue={setActuais}/>
                </View>

                <View style={styles.uinputView}>
                    <HorasReabastecimento value={reabastecimento} setValue={setReabastecimento}/>
                </View>

                        <View style={styles.uinputView}>
                            <Reabastecimento value={reabasteceLitros} setValue={setReabasteceLitros}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Preco value={preco} setValue={setPreco}/>
                        </View>

                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='#12375C' fontFamily={fonts.body} fontSize='xs'> Razão do Reabastecimento</Text>
                        </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                                <Select.Item label="Normal" value="normal" />
                                <Select.Item label="Diesel Stolen" value="diesel" />
                                <Select.Item label="No EDM" value="edm" />
                                <Select.Item label="Meter Faulty" value="meter" />
                                </Select>
                            </Box>
                        </View>
                        
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='#12375C' fontFamily={fonts.body} fontSize='xs'> DSC Substituído ? </Text>
                        </View>
                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={substituido} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setSubstituido(itemValue)}>
                                <Select.Item label="Yes" value="yes" />
                                <Select.Item label="No" value="no" />
                                </Select>
                            </Box>
                        </View>

                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='#12375C' fontFamily={fonts.body} fontSize='xs'> O gerador foi reparado? </Text>
                        </View>
                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={substituido} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setSubstituido(itemValue)}>
                                <Select.Item label="Yes" value="Yes" />
                                <Select.Item label="No" value="No" />
                                </Select>
                            </Box>
                        </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </VStack>

    </VStack>
  );
}

const styles =StyleSheet.create({
    
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