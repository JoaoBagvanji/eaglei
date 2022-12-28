import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon,} from 'native-base';
import { Article, Calendar, Car, Cards, FloppyDisk, Gauge, Jeep, MapPin, MapPinLine, XCircle } from 'phosphor-react-native'

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
import { Load } from '../../../../components/Load';
import { useNavigation } from '@react-navigation/native';

const ViaturaEdit = (props) => {
    type Nav = {
        navigate: (value: string) => void;
      }
    const { navigate } = useNavigation<Nav>()
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ disposicao, setDisposicao ] = useState("");
    const [ matricula, setMatricula ] = useState("");
    const [ modelo, setModelo ] = useState("");
    const [ kilometragem, setKilometragem ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ ano, setAno ] = useState("");

    const [ reason, setReason ] = useState("");
    const[isloading, setIsLoading]=useState(true);
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
            setIsLoading(false);
            seViat(d.data);
    
        });
      
        })()
        },[])
        if(isloading)
    return(
        <Load/>

    )
    
    else
    {
    return (
        <VStack flex={1} pb={4} mb={16} bg="white">
            <SafeAreaView style={styles.container}>
            <VStack px={6} alignItems='center' justifyContent='center'>
                <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                    <View>
                    <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                        Editar 
                    </Text>
                    <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                        Viatura
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
                            <TextInput
                                style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='#cce3f9'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                left={<TextInput.Icon icon={MapPinLine}
                                color={colors.green[600]} />}
                                mode="outlined"
                                label="Parque"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={viat.responsavel}
                                onChangeText={(text) => seViat({...viat,...{responsavel:text}})}
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
                            left={<TextInput.Icon icon={Article}
                            color={colors.green[600]} />}
                            mode="outlined"
                            label="Modelo"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={viat.modelo}
                            onChangeText={(text) => seViat({...viat,...{modelo:text}})}
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
                            left={<TextInput.Icon icon={Cards}
                            color={colors.green[600]} />}
                            mode="outlined"
                            label="Matrícula"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={viat.matricula}
                            onChangeText={(text) => seViat({...viat,...{matricula:text}})}
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
                            left={<TextInput.Icon icon={MapPin}
                            color={colors.green[600]} />}
                            mode="outlined"
                            label="Região"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={viat.regiao}
                            onChangeText={(text) => seViat({...viat,...{regiao:text}})}
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
                            left={<TextInput.Icon icon={Jeep}
                            color={colors.green[600]} />}
                            mode="outlined"
                            label="Marca"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={viat.marca}
                            onChangeText={(text) => seViat({...viat,...{marca:text}})}
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
                            left={<TextInput.Icon icon={Calendar}
                            color={colors.green[600]} />}
                            mode="outlined"
                            label="Ano de Aquisição"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={viat.ano_aquisicao}
                            onChangeText={(text) => seViat({...viat,...{ano_aquisicao:text}})}
                            autoComplete='off'
                            />
                        </View>

                        <View mb={'5%'} style={styles.uinputView}>
                            <TextInput
                            style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C' 
                            left={<TextInput.Icon icon={Gauge}
                            color={colors.green[600]} />}
                            mode="outlined"
                            label="Kilometragem"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={viat.kilometragem}
                            onChangeText={(text) => seViat({...viat,...{kilometragem:text}})}
                            autoComplete='off'
                            />
                        </View>

                        <View marginLeft='30%' marginBottom='10%' marginTop='5%' alignItems='center' justifyContent='space-around' display='flex' flexDirection='row'>
                            <View style={styles.uinputViewbutton}>
                                <Button
                                title='Atualizar'
                                leftIcon={<Icon as={<FloppyDisk color={colors.green[700]} size={20}/>} ml={4}/>}
                                p={2}
                                onPress={() =>api.post('/viatura/editarviatura',viat).then(d=>{
                                    if(d.data){
                                        navigate('Viatura')
                                    }
                                })}
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
}
    export default ViaturaEdit;

    const styles =StyleSheet.create({
        txtInput:{
            backgroundColor: '#fff',
            textColor: '#12375C',
            width: 300,
            fontSize: 12,
            textAlign: 'center',
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