import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon,} from 'native-base';
import { Car, FloppyDisk, MapPin, XCircle } from 'phosphor-react-native'

import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Matricula from '../../../../components/Matricula';
import Modelo from '../../../../components/Modelo';
import Kilometragem from '../../../../components/Kilometragem';
import Marca from '../../../../components/Marca';
import Ano from '../../../../components/Ano';
import Parque from '../../../../components/Parque';
import api from '../../../../services/api';
import { setEnvironmentData } from 'worker_threads';
import { TextInput } from 'react-native-paper';
import { Button } from '../../../../components/Button';
import { ButtonCancel } from '../../../../components/ButtonCancel';

const ViaturaEdit = (props) => {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ disposicao, setDisposicao ] = useState("");
    const [ details, setDetails ] = useState("");
    const [ matricula, setMatricula ] = useState("");
    const [ modelo, setModelo ] = useState("");
    const [ kilometragem, setKilometragem ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ ano, setAno ] = useState("");

    const [ reason, setReason ] = useState("");

    const [viat, seViat]=useState({
        responsavel:'',
        modelo:'',
        matricula:'',
        regiao:'',
        marca:'',
        ano_aquisicao:'',
        kilometragem:''

    })

    useEffect(()=>{
        (async()=>{
            
         api.get(`/viatura/detalhes/${props.route.params.id}`).then(d=>{
           
            seViat(d.data);
    
        });
      
        })()
        },[])

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
                        da Viatura
                    </Text>
                    </View>
                    <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                        <Icon as ={<Car  color={colors.white}/>} />
                    </View>
                </HStack>
        </VStack>
            <VStack mt='10%' mb='12%'>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Viatura</Text>
                        </View>
                        <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Motorista </Text>
                        </View>
                        
                        <View style={styles.uinputView}>
                            <Parque value={viat.responsavel} setValue={setDisposicao}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Modelo value={viat.modelo} setValue={setModelo}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Matricula value={viat.matricula} setValue={setMatricula}/>
                        </View>

                        <View style={styles.uinputView}>
                        <TextInput
                            style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C'
                            left={<TextInput.Icon icon={MapPin}
                            color={colors.green[600]} />}
                            mode="outlined"
                            label="Região"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={viat.regiao}
                            onChangeText={(text) => setReason(text)}
                            autoComplete='off'
                            />
                        </View>

                        <View style={styles.uinputView}>
                            <Marca value={viat.marca} setValue={setMarca}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Ano value={viat.ano_aquisicao} setValue={setAno}/>
                        </View>

                        <View mb={'5%'} style={styles.uinputView}>
                            <Kilometragem value={viat.kilometragem} setValue={setKilometragem}/>
                        </View>

                        <View marginLeft='30%' marginBottom='10%' marginTop='5%' alignItems='center' justifyContent='space-around' display='flex' flexDirection='row'>
                        <View style={styles.uinputViewbutton}>
                            <Button
                            title='Atualizar'
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

    export default ViaturaEdit;

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