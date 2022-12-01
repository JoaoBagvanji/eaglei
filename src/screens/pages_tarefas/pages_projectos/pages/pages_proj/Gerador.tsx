import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon  } from 'native-base';
import { Lightning, FloppyDisk  } from 'phosphor-react-native'



import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'

import Horas from '../../../../../components/Horas';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorasReabastecimento from '../../../../../components/HorasReabastecimento';
import HorasFuncionamento from '../../../../../components/HorasFuncionamento';
import HorasAtuais from '../../../../../components/HorasAtuais';
import Reabastecimento from '../../../../../components/Reabastecimento';
import Preco from '../../../../../components/Preco';
import { Button } from '../../../../../components/Button';

export default function Gerador() {
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
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
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
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                        <View alignItems='center' justifyContent='center' display='flex'>
                            <Text color='gray.600' fontFamily={fonts.body}> Móvel ou Fixo</Text>
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
                            <HorasReabastecimento value={reabastecimento} setValue={setReabastecimento}/>
                        </View>
                        <View style={styles.uinputView}>
                            <HorasFuncionamento value={funcionamento} setValue={setFuncionamento}/>
                        </View>
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Razão do Reabastecimento</Text>
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
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> O gerador foi reparado? </Text>
                        </View>
                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={repair} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setRepair(itemValue)}>
                                <Select.Item label="Yes" value="yes" />
                                <Select.Item label="No" value="no" />
                                </Select>
                            </Box>
                        </View>

                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Detalhes do Gerador</Text>
                        </View>
                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={details} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setDetails(itemValue)}>
                                <Select.Item label="Deutz" value="deutz" />
                                
                                </Select>
                            </Box>
                        </View>

                        <View style={styles.uinputView}>
                            <HorasAtuais value={actuais} setValue={setActuais}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Reabastecimento value={reabasteceLitros} setValue={setReabasteceLitros}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Preco value={preco} setValue={setPreco}/>
                        </View>
                        
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> DSC Substituído ? </Text>
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