import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, Radio, Stack   } from 'native-base';
import { PencilLine , FloppyDisk, XCircle  } from 'phosphor-react-native'



import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../../../components/Button';
import CodigoProduto from '../../../../components/CodigoProduto';
import Descricao from '../../../../components/Descricao';
import { ButtonCancel } from '../../../../components/ButtonCancel';

export default function Item() {
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
    const [ details, setDetails ] = useState("");
    const [ substituido, setSubstituido ] = useState("");

  return (
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Registo 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Do Item
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<PencilLine color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.uinputView}>
                        <CodigoProduto value={value} setValue={setValue}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Unidade de venda</Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                            <Select.Item label="Caixa" value="caixa" />
                            <Select.Item label="UN" value="un" />
                            <Select.Item label="Kg" value="kg" />
                            <Select.Item label="Litro" value="litro" />
                            <Select.Item label="Metro" value="metro" />
                            <Select.Item label="Rolo" value="rolo" />
                            <Select.Item label="Pacote" value="pacote" />
                            </Select>
                        </Box>
                    </View>


                    <View style={styles.uinputView}>
                        <Descricao value={reabastecimento} setValue={setReabastecimento}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Categoria </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={details} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setDetails(itemValue)}>
                            <Select.Item label="DLA" value="dla" />
                            <Select.Item label="Ferramenta" value="ferramenta" />
                            <Select.Item label="Frota" value="frota" />
                            <Select.Item label="IT" value="it" />
                            <Select.Item label="SST" value="sst" />
                            </Select>
                        </Box>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Item serializado </Text>
                    </View>

                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Radio.Group
                            name="exampleGroup" accessibilityLabel="favorite colorscheme"
                        > 
                            <Stack direction={{
                                base: "row",
                                md: "row"
                                }} alignItems={{
                                base: "flex-start",
                                md: "center"
                                }} space={10} w="75%" maxW="300px">
                                <Radio colorScheme="emerald" value="1" my={1} size='sm'>
                                sim
                                </Radio>
                                <Radio colorScheme="secondary" value="2" my={1} size='sm'>
                                não
                                </Radio>
                            </Stack>
                        </Radio.Group>
                    </View>
                
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Proprietário </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={repair} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setRepair(itemValue)}>
                            <Select.Item label="Comserv" value="comserv" />
                            <Select.Item label="Huawei" value="huawei" />
                            <Select.Item label="Vodacom" value="vodacom" />
                            </Select>
                        </Box>
                    </View>

                    <View marginLeft='30%' marginTop='15%' alignItems='center' justifyContent='space-around' display='flex' flexDirection='row'>
                        <View style={styles.uinputViewbutton}>
                            <Button
                            title='Registar'
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