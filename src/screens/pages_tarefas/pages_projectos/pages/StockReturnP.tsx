import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon  } from 'native-base';
import { KeyReturn  , FloppyDisk, XCircle  } from 'phosphor-react-native'



import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../../components/Button';
import { ButtonCancel } from '../../../../components/ButtonCancel';
import Nome from '../../../../components/Nome';

import DataUso from '../../../../components/DataUso';
import Razoes from '../../../../components/Razoes';
import Quantidade from '../../../../components/Quantidade';

import NumeroSerie from '../../../../components/NumeroSerie';

export default function StockReturnP() {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ disposicao, setDisposicao ] = useState("");
    const [ abastecimento, setAbastecimento ] = useState("");
    const [ repair, setRepair ] = useState("");
    const [ funcionamento, setFuncionamento ] = useState("");
    const [ actuais, setActuais ] = useState("");
    const [ preco, setPreco ] = useState("");
    const [ substituido, setSubstituido ] = useState("");
    const [ details, setDetails ] = useState("");
    
    const [ number, setNumber ] = useState("");

  return (
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Formulário 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     De Retorno
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<KeyReturn  color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Formulário Do Pedido</Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>
                    
                    <View style={styles.uinputView}>
                        <Nome value={disposicao} setValue={setDisposicao}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'>Para: </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                            <Select.Item label="DLA" value="dla" />
                            <Select.Item label="Ferramentas" value="ferramentas" />
                            <Select.Item label="Frota" value="frota" />
                            <Select.Item label="IT" value="it" />
                            <Select.Item label="SST" value="sst" />
                            </Select>
                        </Box>
                    </View>

                    <View style={styles.uinputView}>
                        <Razoes value={actuais} setValue={setActuais}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Departamento </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={preco} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setPreco(itemValue)}>
                            <Select.Item label="Telco" value="Telco" />
                            <Select.Item label="Climatização e Electricidade" value="climatização" />
                            <Select.Item label="Financeiro" value="Financeiro" />
                            <Select.Item label="Tecnologias de Informação" value="tecnologias" />
                            <Select.Item label="Centro de Dados" value="centrodedados" />
                            <Select.Item label="Energia" value="Energia" />
                            <Select.Item label="Administrativo" value="Administrativo" />
                            <Select.Item label="Qualidade e Otimização" value="qualidade" />
                            <Select.Item label="Centro de Suporte de Operações" value="cso" />
                            <Select.Item label="Logística e Armazém" value="logística" />
                            <Select.Item label="Recursos Humanos" value="rh" />
                            </Select>
                        </Box>
                    </View>
                    
                    <View style={styles.uinputView}>
                        <DataUso value={funcionamento} setValue={setFuncionamento}/>
                    </View>

                    
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Artigos </Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Selecione artigo </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={details} minWidth="300" accessibilityLabel="Escolha Item" placeholder="Escolha Item" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setDetails(itemValue)}>
                            <Select.Item label="Berbequim" value="berbequim" />
                            <Select.Item label="Porcas" value="porcas" />
                            <Select.Item label="Parafusos" value="parafusos" />
                            </Select>
                        </Box>
                    </View>

                    <View style={styles.uinputView}>
                        <Quantidade value={substituido} setValue={setSubstituido}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Estado </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={repair} minWidth="300" accessibilityLabel="Escolha Item" placeholder="Escolha Item" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setRepair(itemValue)}>
                            <Select.Item label="Bom" value="bom" />
                            <Select.Item label="Mau" value="mau" />
                            </Select>
                        </Box>
                    </View>

                    
                    <View style={styles.uinputView}>
                        <NumeroSerie value={number} setValue={setNumber}/>
                    </View>
                    

                    <View marginLeft='30%' marginTop='5%' mb="10%" alignItems='center' justifyContent='space-around' display='flex' flexDirection='row'>
                        <View style={styles.uinputViewbutton}>
                            <Button
                            title='Registar'
                            leftIcon={<Icon as={<FloppyDisk color={colors.green[700]} size={20}/>} ml={4}/>}
                            p={2}
                            /> 
                        </View>
                        <View style={styles.uinputViewbutton}>
                            <ButtonCancel
                            title='Cancel'
                            leftIcon={<Icon as={<XCircle color={colors.white} size={20}/>} ml={4}/>}
                            />  
                        </View>
                        
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
        
    },
    uinputViewbutton:{
        marginTop: "5%",
        height:56,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems:'flex-start',
        marginLeft: '20%'
        
    },
   

   
})