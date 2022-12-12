import * as React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, } from 'native-base';
import { UserPlus, Calendar, Plus  } from 'phosphor-react-native';
import { useState} from 'react';
import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native';
import {TextInput} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../../styles/colors';



export default function FormNovosProjectos({navigation}) {

    const [openCausa, setOpenCausa] = useState(false);
    const [valueCausa, setValueCausa] = useState([]);
    const [itemsCausa, setItemsCausa] = useState([
      {label: 'Radio', value: 'Radio'},
      {label: 'Transmissao', value: 'Transmissao'},
      {label: 'Energia', value: 'Energia'},
      {label: 'Centro de Dados', value: 'Centro de Dados'},
    ]);

 
    const [telco, setTelco] = useState({
        departamento:'',
        numero_do_projecto:'',
        cliente: [],
        site: [],
        call: [],
        tecnico: [],
        razao: '',
        data_planejada: ''
    })

    const [centroDados, setCentroDados] = useState({
        departamento:'',
        numero_do_projecto:'',
        cliente: [],
        site: [],
        call: [],
        tecnico: [],
        razao: '',
        data_planejada: ''
    })

    const [energia, setEnergia] = useState({
        departamento:'',
        numero_do_projecto:'',
        cliente: [],
        regiao: [],
        filial: [],
        provincia: [],
        local: '',
        pessoa_de_contacto: [],
        equipa_tecnica: [],
        matricula:[],
        motivo:'',
        data_prevista: '',
        assistentes: [],
        tecnicos_permitidos: []
    })

    const [climatizacao, setClimatizacao] = useState({
        departamento:'',
        numero_do_projecto:'',
        cliente: [],
        regiao: [],
        filial: [],
        provincia: [],
        local: '',
        pessoa_de_contacto: [],
        equipa_tecnica: [],
        matricula:[],
        motivo:'',
        data_prevista: '',
        assistentes: [],
        tecnicos_permitidos: []
    })
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

    
    const [openTec, setOpenTec] = useState(false);
    const [valueTec, setValueTec] = useState([]);
    const [itemsTec, setItemsTec] = useState([
        {label:"Abdul Emilia", value:"Abdul Emilia" },
        {label:"Abdul Tauate", value:"Abdul Tauate"}, 
        {label:"Abilio Mabunda", value:"Abilio Mabunda"}, 
        {label:"Aboo Bakar", value:"Aboo Bakar" },
        {label:"Artur Emilia", value:"Artur Emilia" },
        {label:"Bento Tauate", value:"Bento Tauate"}, 
        {label:"Bernardo Mabunda", value: "Bernardo Mabunda"}, 
        {label:"Baloi Bakar", value:"Baloi Bakar" },
        {label:"Carlos Emilia", value:"Carlos Emilia" },
        {label:"Carla Tauate", value:"Carla Tauate"}, 
        {label:"Camilo Mabunda", value: "Camilo Mabunda"}, 
        {label:"Cleyton Bakar", value:"Cleyton Bakar" },
        {label:"Dercio Emilia", value:"Dercio Emilia" },
        {label:"Daniel Tauate", value:"Daniel Tauate"}, 
        {label:"Danilo Mabunda", value: "Danilo Mabunda"}, 
        {label:"Dicarson Bakar", value:"Dicarson Bakar" },
        {label:"Ernesto Emilia", value:"Ernesto Emilia" },
        {label:"Eduardo Tauate", value:"Eduardo Tauate"}, 
        {label:"Emilio Mabunda", value: "Emilio Mabunda"}, 
        {label:"Emerson Bakar", value:"Emerson Bakar" }, 
    ]);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState (false);
    const [text, setText] = useState('Data');

    const { fonts } = useTheme();
    const { colors } = useTheme();

        
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
        'regiao':'',
        'provincia':'',
        'local':'',
        'pessoa_d_contacto':'',
        'equip_tecnica':'',
        'matricula':[],
        'data_prevista': new Date(),
        'assistente': []
        }



    const [mostraTelco, setMostraTelco] = useState(false);
    const [mostraEnergia, setMostraEnergia] = useState(false);

    const mudaform = (selectedDep) => {

            setDep(selectedDep);                     
        if(selectedDep == 'Telco' || selectedDep == 'Centro de Dados')
            {
            
            setMostraTelco(true);
            setMostraEnergia(false);
            }else if(selectedDep == 'Energia' || selectedDep == 'Climatização e Eletricidade'){
            setMostraTelco(false);
            setMostraEnergia(true);
            }
    }

    const [dep, setDep] = useState("");
    isFiled.departamento=dep;                
    
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
    
    const [fillial, setFillial] = useState("");
    isFiled.filial=fillial;

    const [region, setRegion] = useState("");
    isFiled.regiao=region;

    const [prov, setProv] = useState("");
    isFiled.provincia=prov;

    const [place, setPlace] = useState("");
    isFiled.local=place;  
    
    const [person, setPerson] = useState("");
    isFiled.pessoa_d_contacto=person;  

    const [team, setTeam] = useState("");
    isFiled.equip_tecnica=team;  

    isFiled.matricula=valueMat;

    isFiled.data_prevista=date; 

    isFiled.assistente=valueTec;  

    const onGravaTelco = () => {

        if(
            dep !='' &&
            isFiled.ticket_number != '' &&
            isFiled.cliente != '' &&
            isFiled.causa.length != 0 &&
            isFiled.site != '' &&
            isFiled.tecnico != '' &&
            isFiled.razao != '' &&
            isFiled.prioridade != '' &&
            isFiled.operador != '' &&
            isFiled.data != '' &&
            isFiled.hora != ''
            ){
            alert("Formulário submetido com sucesso");
            navigation.goBack();
            }
            
    else
        alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
    }

    const onGravaEnergia = () => {

        if(
            isFiled.departamento !='' &&
            isFiled.ticket_number != '' &&
            isFiled.cliente != '' &&
            isFiled.filial != '' &&
            // isFiled.regiao != '' &&
            isFiled.razao != '' &&
            isFiled.provincia != '' &&
            isFiled.local != '' &&
            // isFiled.pessoa_d_contacto != '' &&
            isFiled.equip_tecnica != '' &&
            isFiled.matricula.length != 0 &&
            isFiled.prioridade != '' &&
            isFiled.data_prevista != new Date() &&
            isFiled.razao != '' &&
            isFiled.assistente.length != 0
            ){
            alert("Formulário submetido com sucesso");
            navigation.goBack();
        }
    else
    {
        alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
    }

    }

    const [mb, setMb] = useState('0%');
    const [combo, setCombo] = useState(0); 

    const onComboboxPress= () => {
        setCombo(combo+1);

        if (combo % 2 === 0)
        {
            setMb('43%');
            console.log("Voce abriu o ComboBox");}

        else
        { setMb('0%'); 
        console.log("Voce fechou o ComboBox"); }
        }

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
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView showsVerticalScrollIndicator={false}>
                   
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Departamento </Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                        <Select selectedValue={dep} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={mudaform}>
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
                          marginBottom: mb,
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: '8%'
                        }}>
                    <DropDownPicker
                          dropDownDirection="BOTTOM"
                          listMode="SCROLLVIEW"
                          onPress={onComboboxPress}
                              textStyle={{
                                color: '#AAB2AD'
                              }}
                              style={{
                                borderColor:'#AAB2AD'
                              }}
                              dropDownContainerStyle={{
                                borderColor:'#AAB2AD'
                              }}
                              placeholder="Selecione a(s) Parte(s)"
                              open={openCausa}
                              value={valueCausa}
                              items={itemsCausa}
                              setOpen={setOpenCausa}
                              setValue={setValueCausa}
                              setItems={setItemsCausa}
                            
                              multiple={true}
                              mode="BADGE"
                              badgeDotColors={["#A1C861"]}
                            />
                     </View>
                        
                     <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Site </Text>
                    </View>

                     <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={sait} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setSait(itemValue)}>
                          
                            </Select>
                        </Box>
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
                            <Select.Item label="Baixa" value="Baixa" />
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
                        value={operator}
                        onChangeText={(text) => setOpereator(text)}
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
                    
                 <TouchableOpacity onPress={onGravaTelco}>
                        <Button  title='Criar' alignSelf={'center'} my={'10%'} width={'30%'}></Button>
                 </TouchableOpacity>
                        

                    
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
                                        <Select selectedValue={fillial} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
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
                                        <Select selectedValue={region} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setRegion(itemValue)}>
                                
                                        </Select>
                                </Box>
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Província</Text>
                            </View>

                            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                <Box maxW='300'>
                                        <Select selectedValue={prov} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setProv(itemValue)}>
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
                                value={place}
                                onChangeText={(text) => setPlace(text)}
                                autoComplete='off'
                                />
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Pessoa de Contacto</Text>
                            </View>

                            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                <Box maxW='300'>
                                        <Select selectedValue={person} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setPerson(itemValue)}>
                                
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
                                <Select selectedValue={team} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setTeam(itemValue)}>
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
                                           // color: '#AAB2AD',
                                          }}
                                          style={{
                                            borderColor:'#AAB2AD'
                                          }}
                                          dropDownContainerStyle={{
                                            borderColor:'#AAB2AD'
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
                                            badgeDotColors={["#A1C861"]}
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
                                                    <Select.Item label="Baixa" value="Baixa" />
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
                                    value={reason}
                                    onChangeText={(text) => setReason(text)}
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

                            <View style={{
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: '8%'
                        }}>
                          <DropDownPicker
                             listMode="MODAL"
                             dropDownDirection="BOTTOM"
                              textStyle={{
                                fontSize: 14
                              }}
                              placeholder="Selecione o(s) Tecnico(s)"
                              open={openTec}
                              value={valueTec}
                              items={itemsTec}
                              setOpen={setOpenTec}
                              setValue={setValueTec}
                              setItems={setItemsTec}

                              theme="LIGHT"
                              multiple={true}
                              mode="BADGE"
                              badgeDotColors={["#A1C861"]}
                            />
                          </View>
                            
                            <TouchableOpacity onPress={onGravaEnergia}>
                                <Button  title='Criar' alignSelf={'center'} my={'10%'}  width={'30%'}></Button>
                            </TouchableOpacity>
                        
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
    formButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        borderRadius: 25,
        height: 50,
        width:50
} 
})