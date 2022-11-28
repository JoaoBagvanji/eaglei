import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, } from 'native-base';
import { UserPlus , FloppyDisk, XCircle, IdentificationCard  } from 'phosphor-react-native';



import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native';
import {TextInput} from 'react-native-paper';
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
import DropDownPicker from 'react-native-dropdown-picker';

export default function FormTelco() {
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

    const [openCausa, setOpenCausa] = useState(false);
    const [valueCausa, setValueCausa] = useState([]);
    const [itemsCausa, setItemsCausa] = useState([
      {label: 'Radio', value: 'Radio'},
      {label: 'Transmissao', value: 'Transmissao'},
      {label: 'Energia', value: 'Energia'},
      {label: 'Centro de Dados Centro de Dados', value: 'Centro de Dados Centro de Dados'},
    ]);



  return (
    <VStack flex={1} pb={4} mb={16} bg="white">

        <SafeAreaView style={styles.container}>

        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                CRIAR 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                TAREFA
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<UserPlus color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>

        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                   
                   

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Departamento </Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                            <Select.Item label="Telco" value="Telco" />
                            <Select.Item label="Climatização e Eletricidade" value="Climatização e Eletricidade" />
                            <Select.Item label="Centro de Dados" value="Centro de Dados" />
                            <Select.Item label="Energia" value="Energia" />
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
                        label="Ticket Number"
                        theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        autoComplete='off'
                        />
                    </View>

                    
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Cliente</Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                            <Select.Item label="Vm,Sa" value="Vm,Sa" />
                            <Select.Item label="Vodacom Tete" value="Vodacom Tete" />
                            <Select.Item label="Vodashop Quelimane" value="Vodashop Quelimane" />
                            <Select.Item label="Vodashop Ronil" value="Vodashop Ronil" />
                            </Select>
                        </Box>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Causa</Text>
                    </View>

                    <View style={{
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: '8%'
                        }}>
                    <DropDownPicker
                          dropDownDirection="BOTTOM"
                          listMode="SCROLLVIEW"
                              textStyle={{
                                fontSize: 14
                              }}
                              placeholder="Selecione a(s) Parte(s)"
                              open={openCausa}
                              value={valueCausa}
                              items={itemsCausa}
                              setOpen={setOpenCausa}
                              setValue={setValueCausa}
                              setItems={setItemsCausa}

                              theme="LIGHT"
                              multiple={true}
                              mode="BADGE"
                              //badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
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
                        label="Site"
                        theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        autoComplete='off'
                        />
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Técnico </Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                            <Select.Item label="Abdul Emilia" value="Abdul Emilia" />
                            <Select.Item label="Abdul Tauate" value="Abdul Tauate" />
                            <Select.Item label="Abilio Mabunda" value="Abilio Mabunda" />
                            <Select.Item label="Aboo Bakar" value="Aboo Bakar" />
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
                        label="Razão"
                        theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        autoComplete='off'
                        />
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Prioridade </Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                            <Select.Item label="Alta" value="Alta" />
                            <Select.Item label="Média" value="Média" />
                            <Select.Item label="BAixa" value="BAixa" />
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
                        label="Operador NMC"
                        theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                        value={value}
                        onChangeText={(text) => setValue(text)}
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
                        label="Data relatada"
                        theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                        value={value}
                        onChangeText={(text) => setValue(text)}
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
                        label="Hora relatada"
                        theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        autoComplete='off'
                        />
                    </View>
                    
                 
                        <View style={styles.uinputViewbutton}>
                            <Button 
                            title='Criar'
                            p={2}
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
    txtInput:{
        backgroundColor: '#fff',
        textColor: '#12375C',
        width: 300,
        fontSize: 12,
        textAlign: 'center',
        height: 50,
    },
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