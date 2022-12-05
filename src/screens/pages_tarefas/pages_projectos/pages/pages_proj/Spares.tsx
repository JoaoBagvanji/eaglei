import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme , ScrollView, Box, CheckIcon, Select, Button  } from 'native-base';
import { FloppyDisk, Package  } from 'phosphor-react-native'


import {  StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';



export default function Spares() {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    
    const [ disposicao, setDisposicao ] = useState("");
    const [razao, setRazao] = useState('');

    
  return (
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                Estoque
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                utilizado
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<Package color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>

                        <View alignItems='center' justifyContent='center' display='flex'>
                            <Text color='gray.600' fontFamily={fonts.body}>Item</Text>
                        </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={4}>
                            <Box maxW='300'>
                                    <Select selectedValue={disposicao} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setDisposicao(itemValue)}>
                                <Select.Item label="Abraçadeira" color='primary.700' value="Abraçadeira" />
                                <Select.Item label="AC" value="AC" />
                                </Select>
                            </Box>
                        </View>

                        <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Quantidade existente"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                        </View>

                        <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Spare Owner"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                        </View>

                        <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Quantidade usada"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                        </View>

                        <View alignItems='center' justifyContent='center' display='flex' mt={'5%'}>
                            <Text color='gray.600' fontFamily={fonts.body}>Foto do Spare</Text>
                        </View>

                        <View style={styles.uinputView}>
                              <Button leftIcon={<Icon as={<FloppyDisk color={colors.green[700]}/>} />}>
                                      Guardar
                              </Button>
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
    txtInput:{
        marginVertical:"5%",
        backgroundColor: '#fff',
        textColor: '#12375C',
        width: 300,
        fontSize: 12,
        textAlign: 'center',
        height: 50
    }, 
   
})