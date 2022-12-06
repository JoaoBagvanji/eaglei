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

export default function UsersRegist() {
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
                     Registo 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Do Usuário
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<UserPlus color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> Dados Básicos</Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Nivel de Acesso</Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                            <Select.Item label="Normal" value="normal" />
                            <Select.Item label="Cliente" value="cliente" />
                            <Select.Item label="Gestor" value="gestor" />
                            <Select.Item label="Administrador" value="administrador" />
                            </Select>
                        </Box>
                    </View>

                    <View style={styles.uinputView}>
                        <Nome value={disposicao} setValue={setDisposicao}/>
                    </View>

                    <View style={styles.uinputView}>
                        <DataNasc value={funcionamento} setValue={setFuncionamento}/>
                    </View>

                    <View style={styles.uinputView}>
                        <CartaConducao value={actuais} setValue={setActuais}/>
                    </View>


                    <View style={styles.uinputView}>
                        <ValidadeCarta value={reabastecimento} setValue={setReabastecimento}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> Local de Trabalho </Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Região </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={details} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setDetails(itemValue)}>
                            <Select.Item label="Sul" value="sul" />
                            <Select.Item label="Centro" value="centro" />
                            <Select.Item label="Norte" value="norte" />
                            </Select>
                        </Box>
                    </View>
                
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Província </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={repair} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setRepair(itemValue)}>
                            <Select.Item label="Maputo" value="Maputo" />
                            <Select.Item label="Gaza" value="Gaza" />
                            <Select.Item label="Inhambane" value="Inhambane" />
                            <Select.Item label="Sofala" value="Sofala" />
                            <Select.Item label="Manica" value="Manica" />
                            <Select.Item label="Zambezia" value="Zambezia" />
                            <Select.Item label="Tete" value="Tete" />
                            <Select.Item label="Nampula" value="Nampula" />
                            <Select.Item label="Niassa" value="Niassa" />
                            <Select.Item label="Cabo Delgado" value="cabo" />
                            </Select>
                        </Box>
                    </View>

                    <View style={styles.uinputView}>
                        <Telefone value={substituido} setValue={setSubstituido}/>
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
                        <Supervisor value={reabasteceLitros} setValue={setReabasteceLitros}/>
                    </View>

                    
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Função </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={value} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setValue(itemValue)}>
                            <Select.Item label="Assistente" value="Assistente" />
                            <Select.Item label="Gestor Regional" value="gestor" />
                            <Select.Item label="Supervisor" value="Supervisor" />
                            <Select.Item label="Commercial" value="commercial" />
                            <Select.Item label="Procurement" value="procurement" />
                            <Select.Item label="Tecnico" value="Tecnico" />
                            <Select.Item label="Director Geral" value="dg" />
                            <Select.Item label="Diector Técnico" value="dt" />
                            <Select.Item label="Director do Departamento" value="dp" />
                            </Select>
                        </Box>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Viatura </Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                    <View style={styles.uinputView}>
                        <Matricula value={matricula} setValue={setMatricula}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Modelo value={modelo} setValue={setModelo}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Kilometragem value={kilometragem} setValue={setKilometragem}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Marca value={marca} setValue={setMarca}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Ano value={ano} setValue={setAno}/>
                    </View>
                    
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="80%" ml='10%' mt={6}/>

                    <View style={styles.uinputView}>
                        <CellPhone value={cellphone} setValue={setCellphone}/>
                    </View>

                    <View style={styles.uinputView}>
                        <EmailUser value={email} setValue={setEmail}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Prettycash value={prettycash} setValue={setPrettycash}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Credenciais </Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                    <View style={styles.uinputView}>
                        <Username value={name} setValue={setName}/>
                    </View>

                    <View style={styles.uinputView}>
                        <PasswordUser value={password} setValue={setPassword}/>
                    </View>

                    <View marginLeft='30%' marginTop='15%' mb="10%" alignItems='center' justifyContent='space-around' display='flex' flexDirection='row'>
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