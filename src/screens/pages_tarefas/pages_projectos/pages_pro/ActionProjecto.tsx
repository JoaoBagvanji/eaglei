import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon} from 'native-base';
import { Handshake , FloppyDisk } from 'phosphor-react-native';
import {  TextInput } from "react-native-paper";


import {  StyleSheet, KeyboardAvoidingView, Platform} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default function Action({navigation}) {
    const { fonts } = useTheme();
    const { colors } = useTheme();

    const [teknico, setTeknico] = useState("");
    const [action, setAction] = useState("");
    const [razao, setRazao] = useState('');

       
    var isFiled = {
        'accao':'',
        'razao':'',
        'tecnico':''
        }

        
    isFiled.tecnico=teknico;
    isFiled.accao=action;
    isFiled.razao=razao;

    
    const [mostraEspera, setMostraEspera] = useState(false);
    const [mostraEquipa, setMostraEquipa] = useState(false);


 

    const mudaform = (selectedAction) => {
                   
      setAction(selectedAction);                     
     if(selectedAction == 'Colocar em espera')
       {
         setMostraEspera(true);
         setMostraEquipa(false);
       }
       else if(selectedAction == 'Atribuir a uma outra equipa' )
       {
         setMostraEspera(false);
         setMostraEquipa(true);
       }
    }

    const onGravaEspera = () => {

        if(
          action !='' &&
          isFiled.razao != '' 
          ){
            alert("Formulário submetido com sucesso");
            navigation.goBack();
          }
           
    else
       alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
    }

    const onGravaEquipa = () => {

        if(
            action !='' &&
            isFiled.razao != '' &&
            isFiled.tecnico != ''
          ){
            alert("Formulário submetido com sucesso");
            navigation.goBack();
        }
    else
    {
        alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
    }
    }

    
  return (
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                ACÇÃO 
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<Handshake color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>

                   

                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'>Acção</Text>
                        </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={action} minWidth="300" accessibilityLabel="Escolha uma opção" placeholder="Escolha uma opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={mudaform}>
                                <Select.Item label="Colocar em espera" value="Colocar em espera" />
                                <Select.Item label="Atribuir a uma outra equipa" value="Atribuir a uma outra equipa" />
                                </Select>
                            </Box>
                        </View>

                        
                       {mostraEspera && 
                       <VStack>

                            <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Razão"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                            </View>
                            
                            <View style={styles.uinputView}>
                                <TouchableOpacity onPress={onGravaEspera}>
                                        <Button
                                        title='Guardar'
                                        leftIcon={<Icon as={<FloppyDisk color={colors.green[700]}/>} ml={4}/>}
                                        />
                                </TouchableOpacity>
                             
                            </View>
                            
                       </VStack>
                       }

                       {mostraEquipa && 
                       <VStack>

                            <View style={styles.uinputView}>
                                <TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Razão"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
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
                                <TouchableOpacity onPress={onGravaEquipa}> 
                                        <Button
                                        title='Guardar'
                                        leftIcon={<Icon as={<FloppyDisk color={colors.green[700]}/>} ml={4}/>}
                                        />
                                </TouchableOpacity> 
                            </View>

                       </VStack>
                       }
                            
                          


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
    txtInput:{
        backgroundColor: '#fff',
        textColor: '#12375C',
        width: 300,
        fontSize: 12,
        textAlign: 'center',
        height: 50
    }, 
    buttonIcon:{
        fontSize: 16,
        color: '#12375c'
    },
   
})