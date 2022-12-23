import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, Image} from 'native-base';
import { Car, MapPin } from 'phosphor-react-native'

import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Matricula from '../../../../components/Matricula';
import Modelo from '../../../../components/Modelo';
import Marca from '../../../../components/Marca';
import Ano from '../../../../components/Ano';
import api from '../../../../services/api';
import { setEnvironmentData } from 'worker_threads';
import { TextInput } from 'react-native-paper';
import userImg from '../../../../assets/avatars/atrelado.png';
import { Load } from '../../../../components/Load';

const AtreladoInfo = (props) => {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ matricula, setMatricula ] = useState("");
    const [ modelo, setModelo ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ ano, setAno ] = useState("");
    const[isloading, setIsLoading]=useState(true);
    const [atrelado, setAtrelado]=useState({
        modelo:'',
        matricula:'',
        dieselbowser:'',
        data_registo1:'',

    })

    useEffect(()=>{
        (async()=>{
            
         api.get(`/viatura/detalhesatrelado/${props.route.params.id}`).then(d=>{
            setIsLoading(false);
            setAtrelado(d.data);
    
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
                        Detalhes 
                    </Text>
                    <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                        da Atrelado
                    </Text>
                    </View>
                    <View backgroundColor='white' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                        <Image source={userImg} width='40' height='30' borderRadius='40' alt='Imagem de artigos' />
                    </View>
                </HStack>
        </VStack>
            <VStack mt='10%' mb='12%'>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Atrelado</Text>
                        </View>
                        <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                        {/* <View style={styles.uinputView}>
                            <Modelo value={atrelado.modelo} setValue={setModelo}/>
                        </View> */}

                        <View style={styles.uinputView}>
                            <Marca value={atrelado.dieselbowser} setValue={setMarca}/>
                        </View>

                        <View style={styles.uinputView}>
                            <Matricula value={atrelado.matricula} setValue={setMatricula}/>
                        </View>

                        <View mb={'10%'} style={styles.uinputView}>
                            <Ano value={atrelado.data_registo1} setValue={setAno}/>
                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
            </VStack>
            </SafeAreaView>
        </VStack> 
    );
    }
}
    export default AtreladoInfo;

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