import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, } from 'native-base';
import { UserPlus , FloppyDisk, XCircle, IdentificationCard, Calendar  } from 'phosphor-react-native';



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
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { text } from '@fortawesome/fontawesome-svg-core';

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

 

                        const [openMat, setOpenMat] = useState(false);
                        const [valueMat, setValueMat] = useState([]);
                        const [itemsMat, setItemsMat] = useState([
                            {label: 'AH 711 MC', value: 'AH 711 MC'},
                            {label: 'AH 712 MC', value: 'AH 712 MC'},
                            {label: 'AH 713 MC', value: 'AH 713 MC'},
                            {label: 'AH 710 MC', value: 'AH 710 MC'},
                            {label: 'AH 726 MC', value: 'AH 726 MC'},
                            {label: 'AI 216 MC', value: 'AI 216 MC'},
                            {label: 'AI 217 MC', value: 'AI 217 MC'},
                            {label: 'AH 711 MCZ', value: 'AH 711 MCZ'},
                            {label: 'AH 711 MCX', value: 'AH 711 MCX'},
                            {label: 'AH 711 MCC', value: 'AH 711 MCC'},
                            {label: 'AH 711 MCV', value: 'AH 711 MCV'},
                            {label: 'AH 711 MCB', value: 'AH 711 MCB'},
                            {label: 'NM 712 MC', value: 'NM 712 MC'},
                            {label: 'NM 713 MC', value: 'NM 713 MC'},
                            {label: 'NM 710 MC', value: 'NM 710 MC'},
                            {label: 'NM 726 MC', value: 'NM 726 MC'},
                            {label: 'BI 216 MC', value: 'BI 216 MC'},
                            {label: 'BI 217 MC', value: 'BI 217 MC'},
             
                        ]);

                        const [date, setDate] = useState(new Date());
                        const [mode, setMode] = useState('date');
                        const [show, setShow] = useState (false);
                        const [text, setText] = useState('Data');


            
                            
                        const onChange = (event, selectedDate) => {
                        setShow(false)
                
                        const currentDate = selectedDate || date;
                        setDate(selectedDate);
                
                        let tempDate = new Date(currentDate);
                        let fDate = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
                        setText(fDate)
                        };

                        const showMode = (currentMode) => {
                        setShow(true);
                        setMode(currentMode);
                        }


                        var isFiled = {
                            'departamento':'',
                            'cliente':'',
                            'ticket_number':'',
                            'causa':[],
                            'site': '',
                            'tecnico': '',
                            'razao':'',
                            'prioridade':'',
                            'operador':'',
                            'data':'',
                            'hora':'',
                            'filial':'',
                            'motor':'',
                            'camera':'',
                           }



                        const [mostraTelco, setMostraTelco] = useState(false);
                        const [mostraEnergia, setMostraEnergia] = useState(false);

                        const mudaform = (e) => {
                       
                            isFiled.departamento=e;
                                                    
                            if(e == 'Telco' || e == 'Centro de Dados')
                              {
                                
                                setMostraTelco(true);
                                setMostraEnergia(false);
                              }else if(e == 'Energia' || e == 'Climatização e Eletricidade'){
                                setMostraTelco(false);
                                setMostraEnergia(true);
                              }
                        }

                        const [ticket, setTicket] = useState("");
                        isFiled.ticket_number=ticket;

                        const [client, setClient] = useState("");
                        isFiled.cliente=client;    

                        isFiled.causa=valueCausa; 

                        const [sait, setSait] = useState("");
                        isFiled.site=sait;

                        const [teknico, setTeknico] = useState("");
                        isFiled.tecnico=teknico;    

                        const [reason, setReason] = useState("");
                        isFiled.razao=reason;

                        const [priority, setPriority] = useState("");
                        isFiled.prioridade=priority;

                        const [operator, setOpereator] = useState("");
                        isFiled.operador=operator;

                        const [deit, setDeit] = useState("");
                        isFiled.data=deit;

                        const [hour, setHour] = useState("");
                        isFiled.hora=hour;
                        
                        const [filial, setFillial] = useState("");
                        isFiled.filial=filial;

                        

                        



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
                                <Select onValueChange={mudaform}  minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} >
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
                                value={ticket}
                                onChangeText={(text) => setTicket(text)}
                                autoComplete='off'
                                />
                                
                            </View>
                
                    {mostraTelco && 
                    <View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Cliente</Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={client} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setClient(itemValue)}>
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
                        value={sait}
                        onChangeText={(text) => setSait(text)}
                        autoComplete='off'
                        />
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Técnico </Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={teknico} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setTeknico(itemValue)}>
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
                        value={reason}
                        onChangeText={(text) => setReason(text)}
                        autoComplete='off'
                        />
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Prioridade </Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={priority} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setPriority(itemValue)}>
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
                        value={deit}
                        onChangeText={(text) => setDeit(text)}
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
                        value={hour}
                        onChangeText={(text) => setHour(text)}
                        autoComplete='off'
                        />
                    </View>
                    
                 
                        <Button title='Criar' alignSelf={'center'} my={'10%'} height={'5%'} width={'30%'}></Button>

                    
                    </View>}

                    {mostraEnergia &&
                    <View>
                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> Criar Tarefa </Text>
                            </View>
                            <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>
                        
                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Cliente</Text>
                            </View>

                            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                <Box maxW='300'>
                                        <Select selectedValue={client} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setClient(itemValue)}>
                                    <Select.Item label="Vm,Sa" value="Vm,Sa" />
                                    <Select.Item label="Vodacom Tete" value="Vodacom Tete" />
                                    <Select.Item label="Vodashop Quelimane" value="Vodashop Quelimane" />
                                    <Select.Item label="Vodashop Ronil" value="Vodashop Ronil" />
                                    </Select>
                                </Box>
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Filial</Text>
                            </View>

                            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                <Box maxW='300'>
                                        <Select selectedValue={filial} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setFillial(itemValue)}>
                                    <Select.Item label="Carlos Carvalho" value="Carlos Carvalho" />
                                    <Select.Item label="Nova" value="Nova" />
                                        </Select>
                                </Box>
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Região</Text>
                            </View>

                            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                <Box maxW='300'>
                                        <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                                
                                        </Select>
                                </Box>
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Província</Text>
                            </View>

                            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                <Box maxW='300'>
                                        <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                                    <Select.Item label="Maputo" value="Maputo" />
                                    <Select.Item label="Nampula" value="Nampula" />
                                    <Select.Item label="Cabo Delgado" value="Cabo Delgado" />
                                    <Select.Item label="Gaza" value="Gaza" />
                                    <Select.Item label="Inhambane" value="Inhambane" />
                                    <Select.Item label="Manica" value="Manica" />
                                    <Select.Item label="Maputo (cidade)" value="Maputo (cidade)" />
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
                                label="Local"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={value}
                                onChangeText={(text) => setValue(text)}
                                autoComplete='off'
                                />
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Pessoa de Contacto</Text>
                            </View>

                            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                <Box maxW='300'>
                                        <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                                
                                        </Select>
                                </Box>
                            </View>
                            
                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> Equipe </Text>
                            </View>
                            <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Equipe Tecnica </Text>
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
                            
                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Matricula da viatura </Text>
                            </View>

                            <View style={{
                                        backgroundColor: 'transparent',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingHorizontal: '8%'
                                        }}>
                                        <DropDownPicker
                                        listMode="MODAL"
                                        //autoScroll={true}
                                            textStyle={{
                                                fontSize: 14
                                            }}
                                            placeholder="Escolha a opção"
                                            open={openMat}
                                            value={valueMat}
                                            items={itemsMat}
                                            setOpen={setOpenMat}
                                            setValue={setValueMat}
                                            setItems={setItemsMat}

                                            theme="LIGHT"
                                            multiple={false}
                                            mode="BADGE"
                                            badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
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

                                <HStack mt={'6%'} mx={'20%'}>

                                    
                                            <Text fontFamily={fonts.body}>Data prevista: {text}</Text>
                                            
                                            <VStack ml={'9%'}>
                                            <TouchableOpacity onPress={() => showMode('date')}> 
                                                <Calendar size={25} color={'#12375C'} />
                                            </TouchableOpacity>
                                            </VStack>  

                                            { show && (
                                                <DateTimePicker
                                                testID='dateTimePicker'
                                                value={date}
                                                mode='date'
                                                display='default'
                                                onChange={onChange}
                                                />
                                                
                                            )
                                            }                                        
                                </HStack>

                            <View style={styles.uinputView}>
                                <TextInput
                                    style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='#cce3f9'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C'
                                    mode="outlined"
                                    label="Motivo"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={value}
                                    onChangeText={(text) => setValue(text)}
                                    autoComplete='off'
                                    />
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> Assistente </Text>
                            </View>
                            <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Assistentes </Text>
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
                            
                            <View display='flex' mt={4}>
                                <Text color='Primary.500'  ml={'8%'} fontFamily={fonts.body} fontSize='md'> Tecnicos Permitidos </Text>
                            </View>

                            <View alignSelf={'center'} borderBottomColor={colors.primary[600]} borderBottomWidth={1} width="85%"  mt={'4%'}/>

                            <Button title='Criar' alignSelf={'center'} my={'10%'} width={'30%'}></Button>
                        
                    </View>}

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