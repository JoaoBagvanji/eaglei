import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, ScrollView,} from 'native-base';
import { Calendar, Car, Cards, IdentificationCard } from 'phosphor-react-native'

import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import api from '../../../../services/api';
import { TextInput } from 'react-native-paper';

const InspeccaoInfo = (props) => {
    const { fonts } = useTheme();
    const { colors } = useTheme();

    const [insp, setInsp]=useState({
        matricula:'',
        motorista: '',
        datta:'',
    })

    useEffect(()=>{
        (async()=>{
            
         api.get(`/viatura/inspenccaodetalhes/${props.route.params.id}`).then(d=>{
           
            setInsp(d.data);
            console.log(d.data)
    
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
                        da Inspecção
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
                            <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Inspecção</Text>
                        </View>
                        <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>
                        
                        
                        

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
                            value={insp.matricula}
                            onChangeText={(text) => setInsp({...insp,...{matricula:text}})}
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
                           left={<TextInput.Icon icon={IdentificationCard}
                           color={colors.green[600]} />}
                           mode="outlined"
                           label="Motorista"
                           theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                           value={insp.motorista}
                           onChangeText={(text) => setInsp({...insp,...{motorista:text}})}
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
                            value={insp.datta}
                            onChangeText={(text) => setInsp({...insp,...{datta:text}})}
                            autoComplete='off'
                            />
                        </View>
                        
                    </ScrollView>
                </KeyboardAvoidingView>
            </VStack>
            </SafeAreaView>
        </VStack> 
    );
    }

    export default InspeccaoInfo;

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