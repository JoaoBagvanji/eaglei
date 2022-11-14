import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView  } from 'native-base';
import { Lightning,Check, User  } from 'phosphor-react-native'
import { TextInput } from 'react-native-paper'


import {  StyleSheet } from 'react-native'
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export default function Gerador() {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ disposicao, setDisposicao ] = useState("");
    const [ abastecimento, setAbastecimento ] = useState("");
    const [ repair, setRepair ] = useState("");
    const [ value, setValue ] = useState("");
    const [ reabastecimento, setReabastecimento ] = useState("");
    const [ funcionamento, setFuncionamento ] = useState("");

  return (
    <VStack flex={1} pb={6} bg="white">
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Detalhes 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Do Gerador
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<Lightning color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
      <VStack flex={4}  px={6}>
        <ScrollView>
            <View alignItems='center' justifyContent='center' display='flex'>
                <Text color='gray.600' fontFamily={fonts.body}> Móvel ou Fixo</Text>
            </View>
            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={4}>
                <Box maxW='300'>
                        <Select selectedValue={disposicao} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                    bg: "primary.500",
                    endIcon: <Check  size={1} />
                }} onValueChange={itemValue => setDisposicao(itemValue)}>
                    <Select.Item label="Móvel" color='primary.700' value="movel" />
                    <Select.Item label="Fixo" value="fixo" />
                    </Select>
                </Box>
            </View>

            <View style={styles.uinputView}>
                <TextInput style={{color: colors.primary[700], width: 300, fontSize: 12, padding:  10,textAlign: 'center',fontFamily: fonts.body, backgroundColor: colors.white, height: 40}}
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C' 
                            mode="outlined"
                            label="Horas Anteriores do Gerador"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={value}
                            onChangeText={(text) => setValue(text)}
                        />
            </View>
            <View style={styles.uinputView}>
                <TextInput style={{color: colors.primary[700], width: 300, fontSize: 12, padding:  10,textAlign: 'center',fontFamily: fonts.body, backgroundColor: colors.white, height: 40}}
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C' 
                            mode="outlined"
                            label="Horas de Reabastecimento Anteriores"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={reabastecimento}
                            onChangeText={(text) => setReabastecimento(text)}
                        />
            </View>
            <View style={styles.uinputView}>
                <TextInput style={
                            {color: colors.primary[700], width: 300, fontSize: 12, padding:  10,textAlign: 'center',fontFamily: fonts.body, backgroundColor: colors.white, height: 40}}
                            selectionColor='#12375C' 
                            outlineColor='#cce3f9'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C' 
                            mode="outlined"
                            label="Horas de Funcionamento do Gerador"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={funcionamento}
                            onChangeText={(text) => setFuncionamento(text)}
                        />
            </View>
            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Razão do Reabastecimento</Text>
            </View>
            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                <Box maxW='300'>
                        <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                    bg: "primary.500",
                    endIcon: <Check  size={1} />
                }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                    <Select.Item label="Normal" value="normal" />
                    <Select.Item label="Diesel Stolen" value="diesel" />
                    <Select.Item label="No EDM" value="edm" />
                    <Select.Item label="Meter Faulty" value="meter" />
                    </Select>
                </Box>
            </View>
            
            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> O gerador foi reparado? </Text>
            </View>
            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                <Box maxW='300'>
                        <Select selectedValue={repair} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                    bg: "primary.500",
                    endIcon: <Check  size={1} />
                }} onValueChange={itemValue => setRepair(itemValue)}>
                    <Select.Item label="Yes" value="yes" />
                    <Select.Item label="No" value="no" />
                    </Select>
                </Box>
            </View>
        </ScrollView>
      </VStack>
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
})