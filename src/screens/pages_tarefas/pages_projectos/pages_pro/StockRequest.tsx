import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, Radio, Stack   } from 'native-base';
import { UserPlus , FloppyDisk, XCircle  } from 'phosphor-react-native'



import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../../components/Button';
import { ButtonCancel } from '../../../../components/ButtonCancel';
import Nome from '../../../../components/Nome';
import DataNasc from '../../../../components/DataNasc';
import CartaConducao from '../../../../components/CartaConducao';
import ValidadeCarta from '../../../../components/ValidadeCarta';
import Telefone from '../../../../components/Telefone';
import Supervisor from '../../../../components/Supervisor';
import Matricula from '../../../../components/Matricula';
import Modelo from '../../../../components/Modelo';
import Kilometragem from '../../../../components/Kilometragem';
import Marca from '../../../../components/Marca';
import Ano from '../../../../components/Ano';
import CellPhone from '../../../../components/CellPhone';
import EmailUser from '../../../../components/EmailUser';
import Prettycash from '../../../../components/Prettycash';
import Username from '../../../../components/Username';
import PasswordUser from '../../../../components/PasswordUser';
import DataUso from '../../../../components/DataUso';
import Razoes from '../../../../components/Razoes';
import Quantidade from '../../../../components/Quantidade';
import { ButtonHandle } from '../../../../components/ButtonHandle';

export default function StockRequest() {
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
    const [ substituido, setSubstituido ] = useState("");
    const [ details, setDetails ] = useState("");
    const [ matricula, setMatricula ] = useState("");
    const [ modelo, setModelo ] = useState("");
    const [ kilometragem, setKilometragem ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ ano, setAno ] = useState("");
    const [ cellphone, setCellphone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ prettycash, setPrettycash ] = useState("");
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");

  return (
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Formul??rio 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Do Pedido
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<UserPlus color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Formul??rio Do Pedido</Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>
                    
                    <View style={styles.uinputView}>
                        <Nome value={disposicao} setValue={setDisposicao}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Nivel de Acesso</Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Op????o" placeholder="Escolha Op????o" _selectedItem={{
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
                        <Username value={name} setValue={setName}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Departamento </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={preco} minWidth="300" accessibilityLabel="Escolha Op????o" placeholder="Escolha Op????o" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setPreco(itemValue)}>
                            <Select.Item label="Telco" value="Telco" />
                            <Select.Item label="Climatiza????o e Electricidade" value="climatiza????o" />
                            <Select.Item label="Financeiro" value="Financeiro" />
                            <Select.Item label="Tecnologias de Informa????o" value="tecnologias" />
                            <Select.Item label="Centro de Dados" value="centrodedados" />
                            <Select.Item label="Energia" value="Energia" />
                            <Select.Item label="Administrativo" value="Administrativo" />
                            <Select.Item label="Qualidade e Otimiza????o" value="qualidade" />
                            <Select.Item label="Centro de Suporte de Opera????es" value="cso" />
                            <Select.Item label="Log??stica e Armaz??m" value="log??stica" />
                            <Select.Item label="Recursos Humanos" value="rh" />
                            </Select>
                        </Box>
                    </View>

                    <View style={styles.uinputView}>
                        <DataUso value={funcionamento} setValue={setFuncionamento}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Razoes value={actuais} setValue={setActuais}/>
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
                    
                    <View  alignItems='flex-end' justifyContent='center' display='flex' mt='10%' mx={10}>
                        <ButtonHandle
                            title='+'
                            w={14}
                        />
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