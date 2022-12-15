import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, Radio, Stack   } from 'native-base';
import { UserPlus , FloppyDisk, XCircle, UserCircleGear, UserGear  } from 'phosphor-react-native'



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
import Idioma from '../../../../components/Idioma';
import NovoUsername from '../../../../components/NovoUsername';
import NovaPasswordUser from '../../../../components/NovaPasswordUser';

export default function UserRegisto() {
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
                     Edit 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Do Usuário
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<UserGear  color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> Dados Básicos</Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                    <View style={styles.uinputView}>
                        <Nome value={disposicao} setValue={setDisposicao}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Username value={name} setValue={setName}/>
                    </View>

                    <View style={styles.uinputView}>
                        <NovoUsername value={email} setValue={setEmail}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Idioma</Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                            <Select.Item label="Português" value="pt" />
                            <Select.Item label="Inglês" value="en" />
                            </Select>
                        </Box>
                    </View>
                    
                    
                    
                    <View style={styles.uinputView}>
                        <PasswordUser value={password} setValue={setPassword}/>
                    </View>

                    <View style={styles.uinputView}>
                        <NovaPasswordUser value={prettycash} setValue={setPrettycash}/>
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