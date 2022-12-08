import * as React from 'react';
import {  StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Archive, CaretDown, CaretUp, Eye, LightbulbFilament, Lightning, MagnifyingGlass, Note, Pencil, User, Wrench} from 'phosphor-react-native';
import { View, Text, Icon, useTheme, VStack, HStack, ScrollView, Box, CheckIcon, Select, Radio, Stack, TextArea, IconButton } from 'native-base';

import {useState } from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles//fonts';
import { id } from 'date-fns/locale';
import { ButtonHandle } from '../../../../components/ButtonHandle';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



          const StackRoutes = createStackNavigator();

      
      function Screen1() {


            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [razao, setRazao] = useState('');
            
            const [ abastecimento, setAbastecimento ] = useState("");

            const [ value, setValue ] = useState("");

            const [ preco, setPreco ] = useState("");
       

    
          return (
            <VStack flex={1} bg="white">
            <SafeAreaView style={styles.container}>
            
            <VStack mt='5%' mb='30%'>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} >
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='#12375C' fontFamily={fonts.body} fontSize='md'> INFORMAÇÃO BÁSICA</Text>
                        </View>
                      
                             <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Numero Ref Comserv"
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
                                    label="Ticket Number"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Call </Text>
                            </View>
                            <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                <Box maxW='300'>
                                        <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                    bg: "primary.500",
                                    endIcon: <CheckIcon  size='5' />
                                }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                                    <Select.Item label="Radio" value="Radio" />
                                    <Select.Item label="Transmission" value="Transmission" />
                                    <Select.Item label="Power" value="Power" />
                                    <Select.Item label="Civil" value="Civil" />
                                    <Select.Item label="COre-data center" value="COre-data center" />
                                    </Select>
                                </Box>
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Departamento </Text>
                        </View>
                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={preco} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setPreco(itemValue)}>
                                <Select.Item label="Telco" value="Telco" />
                                <Select.Item label="Facilities" value="Facilities" />
                                <Select.Item label="Power" value="Power" />
                                <Select.Item label="Data Center" value="Data Center" />
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
                                    label="Região"
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
                                    label="Tipo de trabalho"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                            </View>


                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='#12375C' fontFamily={fonts.body} fontSize='md'> TÉCNICO </Text>
                        </View>
                        <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                           <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Nome"
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
                                    label="Cell"
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
                                    label="Line Manager"
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
                                    label="Line Manager Cell"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                            </View>
                
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='#12375C' fontFamily={fonts.body} fontSize='md'> REPORTE </Text>
                        </View>
                        <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>
    
                          <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Registrado Por"
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
                                    label="Registrado em"
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
                                    label="Data relatada"
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
                                    label="Hora relatada"
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
                                    label="Operador NMC"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
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





           
          

          function Screen2() {

            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [razao, setRazao] = useState('');
            
            const [ abastecimento, setAbastecimento ] = useState("");

            const [ value, setValue ] = useState("");

            const [ preco, setPreco ] = useState("");

        
           
                return (
                  <VStack flex={1} bg="white">
                  <SafeAreaView style={styles.container}>
                  
                  <VStack mt='5%' mb='30%'>
                      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} >
                          <ScrollView showsVerticalScrollIndicator={false}>
      
                              <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                  <Text color='#12375C' fontFamily={fonts.body} fontSize='md'> CLIENTE </Text>
                              </View>

                              <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                  <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Cliente </Text>
                                  </View>
                                  <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                      <Box maxW='300'>
                                              <Select selectedValue={abastecimento} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                          bg: "primary.500",
                                          endIcon: <CheckIcon  size='5' />
                                      }} onValueChange={itemValue => setAbastecimento(itemValue)}>
                                          <Select.Item label="Radio" value="Radio" />
                                          <Select.Item label="Transmission" value="Transmission" />
                                          <Select.Item label="Power" value="Power" />
                                          <Select.Item label="Civil" value="Civil" />
                                          <Select.Item label="COre-data center" value="COre-data center" />
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
                                          label="Filial"
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
                                          label="Telefone do Cliente"
                                          theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                          value={razao}
                                          onChangeText={(text) => setRazao(text)}
                                          autoComplete='off'
                                          />
                                  </View>
      
                               
                                  <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                  <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Site </Text>
                              </View>
                              <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                                  <Box maxW='300'>
                                          <Select selectedValue={preco} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                      bg: "primary.500",
                                      endIcon: <CheckIcon  size='5' />
                                  }} onValueChange={itemValue => setPreco(itemValue)}>
                                      <Select.Item label="Telco" value="Telco" />
                                      <Select.Item label="Facilities" value="Facilities" />
                                      <Select.Item label="Power" value="Power" />
                                      <Select.Item label="Data Center" value="Data Center" />
                                      </Select>
                                  </Box>
                              </View>
                                        
                          </ScrollView>
                      </KeyboardAvoidingView>
                  </VStack>
      
                  </SafeAreaView>
                  </VStack> 
            );

          }







          function Screen3() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [razao, setRazao] = useState('');

            return (
              <VStack flex={1} bg="white">
                        <SafeAreaView style={styles.container}>

                            <VStack mt='5%' mb='30%'>
                                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                                    <ScrollView showsVerticalScrollIndicator={false}>

                                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                            <Text color='#12375C' fontFamily={fonts.body} fontSize='md'>
                                            AVALIAÇÃO DE RISCO
                                            </Text>
                                        </View>
                                        
                                        <View
                                            borderBottomColor={colors.green[700]}
                                            borderBottomWidth={2}
                                            width="70%"
                                            alignSelf={'center'}
                                            mt={2}/>

                                        <View style={[styles.container, styles.step1]}>

                                                    <Text style={styles.currentText}> O PLANO DE VIAGEM FOI ELABORADO, COMUNICADO E VALIDADO? </Text>
                                                
                                                  
                                                  <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                                    <Stack direction={{
                                                          base: "row",
                                                          md: "row"
                                                        }} alignItems={{
                                                          base: "center",
                                                          md: "center"
                                                        }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                                        <Radio colorScheme="emerald" value="1" size='sm'>
                                                          Sim
                                                        </Radio>
                                                        <Radio colorScheme="secondary" value="2" size='sm'>
                                                          Não
                                                        </Radio>
                                                        <Radio colorScheme="yellow" value="3" size='sm'>
                                                          N/A
                                                        </Radio>
                                                    </Stack>
                                                  </Radio.Group>
                                             
                                        </View>

                                        
                                        <View style={[styles.container, styles.step1]}>

                                                    <Text style={styles.currentText}> FOI EFETUADA A INSPEÇÃO DIÁRIA DA VIATURA? </Text>
                                                
                                                  
                                                  <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                                    <Stack direction={{
                                                          base: "row",
                                                          md: "row"
                                                        }} alignItems={{
                                                          base: "center",
                                                          md: "center"
                                                        }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                                        <Radio colorScheme="emerald" value="1" size='sm'>
                                                          Sim
                                                        </Radio>
                                                        <Radio colorScheme="secondary" value="2" size='sm'>
                                                          Não
                                                        </Radio>
                                                        <Radio colorScheme="yellow" value="3" size='sm'>
                                                          N/A
                                                        </Radio>
                                                    </Stack>
                                                  </Radio.Group>
                                             
                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> TODOS OS TRABALHADORES TÊM A FORMAÇÃO E INFORMAÇÃO SUFICIENTE SOBRE A ATIVIDADE A EXECUTAR? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>
                                        
                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> ANTES DO INÍCIO DO(S) TRABALHO(S) TEVE CONHECIMENTO DOS PERIGOS E RISCOS ASSOCIADOS À SUA ATIVIDADE? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> TODOS OS TRABALHADORES CONHECEM OS PROCEDIMENTOS EM CASO DE UMA EMERGÊNCIA?</Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> A METODOLOGIA DE TRABALHOS DA ATIVIDADE A EXECUTAR É SEGURA? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> AS INSTRUÇÕES DA AUTORIZAÇÃO DE TRABALHOS FORAM PERCEBIDAS? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> TODAS AS CONDIÇÕES DA AUTORIZAÇÃO DE TRABALHOS ESTÃO ASSEGURADAS? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                                <Text style={styles.currentText}> TODO O EQUIPAMENTO NECESSÁRIO À EXECUÇÃO DOS TRABALHOS ESTÁ DISPONÍVEL E EM BOM ESTADO DE CONSERVAÇÃO? </Text>


                                                <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                                <Stack direction={{
                                                      base: "row",
                                                      md: "row"
                                                    }} alignItems={{
                                                      base: "center",
                                                      md: "center"
                                                    }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                                    <Radio colorScheme="emerald" value="1" size='sm'>
                                                      Sim
                                                    </Radio>
                                                    <Radio colorScheme="secondary" value="2" size='sm'>
                                                      Não
                                                    </Radio>
                                                    <Radio colorScheme="yellow" value="3" size='sm'>
                                                      N/A
                                                    </Radio>
                                                </Stack>
                                                </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                          <Text style={styles.currentText}> TODOS OS TRABALHADORES ESTÃO NA POSSE DOS EPI’S ADEQUADOS A ATIVIDADE? </Text>


                                          <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                          <Stack direction={{
                                                base: "row",
                                                md: "row"
                                              }} alignItems={{
                                                base: "center",
                                                md: "center"
                                              }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                              <Radio colorScheme="emerald" value="1" size='sm'>
                                                Sim
                                              </Radio>
                                              <Radio colorScheme="secondary" value="2" size='sm'>
                                                Não
                                              </Radio>
                                              <Radio colorScheme="yellow" value="3" size='sm'>
                                                N/A
                                              </Radio>
                                          </Stack>
                                          </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                          <Text style={styles.currentText}> O LOCAL DE TRABALHO ESTÁ LIMPO, SEGURO E ORGANIZADO? (INSECTOS, SERPENTES, ABELHAS, ZONAS DE RISCO) </Text>


                                          <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                          <Stack direction={{
                                                base: "row",
                                                md: "row"
                                              }} alignItems={{
                                                base: "center",
                                                md: "center"
                                              }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                              <Radio colorScheme="emerald" value="1" size='sm'>
                                                Sim
                                              </Radio>
                                              <Radio colorScheme="secondary" value="2" size='sm'>
                                                Não
                                              </Radio>
                                              <Radio colorScheme="yellow" value="3" size='sm'>
                                                N/A
                                              </Radio>
                                          </Stack>
                                          </Radio.Group>

                                        </View>
                                        
                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> NO LOCAL EM QUE VÃO TRABALHAR EXISTE O RISCO DE QUEDA AO MESMO NÍVEL, NÍVEL DIFERENTE E EM ALTURA? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> NO LOCAL EM QUE VÃO TRABALHAR EXISTE O RISCO DE QUEDA DE OBJETOS? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                          <Text style={styles.currentText}> CASO EXISTAM RISCOS ACRESCIDOS ORIGINADOS POR SITUAÇÕES EXTERNAS À INTERVENÇÃO (CONDICIONALISMOS NO LOCAL, CONDIÇÕES ATMOSFÉRICAS ADVERSAS, OUTROS TRABALHOS NA PROXIMIDADE), ESTES ESTÃO CONTROLADOS?</Text>


                                          <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                          <Stack direction={{
                                                base: "row",
                                                md: "row"
                                              }} alignItems={{
                                                base: "center",
                                                md: "center"
                                              }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                              <Radio colorScheme="emerald" value="1" size='sm'>
                                                Sim
                                              </Radio>
                                              <Radio colorScheme="secondary" value="2" size='sm'>
                                                Não
                                              </Radio>
                                              <Radio colorScheme="yellow" value="3" size='sm'>
                                                N/A
                                              </Radio>
                                          </Stack>
                                          </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> NO LOCAL EM QUE VÃO TRABALHAR A ILUMINAÇÃO É SUFICIENTE E ADEQUADA?</Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> NO EXERCÍCIO DA(S) ATIVIDADE(S) EXISTE O RISCO DE CONTACTO COM A ELETRICIDADE? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                            <Text style={styles.currentText}> TODAS AS FONTES DE ENERGIA ESTÃO BLOQUEADAS? </Text>


                                            <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                            <Stack direction={{
                                                  base: "row",
                                                  md: "row"
                                                }} alignItems={{
                                                  base: "center",
                                                  md: "center"
                                                }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                                <Radio colorScheme="emerald" value="1" size='sm'>
                                                  Sim
                                                </Radio>
                                                <Radio colorScheme="secondary" value="2" size='sm'>
                                                  Não
                                                </Radio>
                                                <Radio colorScheme="yellow" value="3" size='sm'>
                                                  N/A
                                                </Radio>
                                            </Stack>
                                            </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> NO LOCAL EM QUE VÃO TRABALHAR EXISTE O RISCO DE INCÊNDIO OU EXPLOSÕES?</Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> NO LOCAL EM QUE VÃO TRABALHAR EXISTE O RISCO DE INCÊNDIO OU EXPLOSÕES?</Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> PARA UMA COMUNICAÇÃO SEGURA DURANTE OS TRABALHOS HÁ A NECESSIDADE DE UM RÁDIO DE COMUNICAÇÃO? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                          <Text style={styles.currentText}> Observações </Text>
                                          <TextArea borderColor={'black'} width={'80%'} alignSelf='center' aria-label="t1Disabled" placeholder="" isDisabled autoCompleteType={undefined} />

                                    </ScrollView>
                                </KeyboardAvoidingView>
                            </VStack>

                        </SafeAreaView>
              </VStack>
            );
          }







          function Screen4() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [razao, setRazao] = useState('');

            return (
              <VStack flex={1} bg="white">
                        <SafeAreaView style={styles.container}>

                            <VStack mt='5%' mb='30%'>
                                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                                    <ScrollView showsVerticalScrollIndicator={false}>

                                        <View alignItems='center' justifyItems={'center'} justifyContent='center' display='flex' mt={4}>
                                            <Text color='#12375C' fontFamily={fonts.body} fontSize='md' alignSelf={'center'}>
                                            AVALIAÇÃO DO IMPACTO AMBIENTAL DE ÚLTIMO MINUTO
                                            </Text>
                                        </View>
                                        
                                        <View
                                            borderBottomColor={colors.green[700]}
                                            borderBottomWidth={2}
                                            width="95%"
                                            alignSelf={'center'}
                                            mt={2}/>

                                        <View style={[styles.container, styles.step1]}>

                                                    <Text style={styles.currentText}> ESTÃO CRIADAS CONDIÇÕES PARA QUE OS RESÍDUOS SEJAM SEGREGADOS CORRETAMENTE? </Text>
                                                
                                                  
                                                  <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                                    <Stack direction={{
                                                          base: "row",
                                                          md: "row"
                                                        }} alignItems={{
                                                          base: "center",
                                                          md: "center"
                                                        }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                                        <Radio colorScheme="emerald" value="1" size='sm'>
                                                          Sim
                                                        </Radio>
                                                        <Radio colorScheme="secondary" value="2" size='sm'>
                                                          Não
                                                        </Radio>
                                                        <Radio colorScheme="yellow" value="3" size='sm'>
                                                          N/A
                                                        </Radio>
                                                    </Stack>
                                                  </Radio.Group>
                                             
                                        </View>

                                        
                                        <View style={[styles.container, styles.step1]}>

                                                    <Text style={styles.currentText}> PARA A ATIVIDADE A SER DESENVOLVIDA ESTÁ DISPONÍVEL UM KIT DE DERRAMES AMBIENTAIS? </Text>
                                                
                                                  
                                                  <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                                    <Stack direction={{
                                                          base: "row",
                                                          md: "row"
                                                        }} alignItems={{
                                                          base: "center",
                                                          md: "center"
                                                        }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                                        <Radio colorScheme="emerald" value="1" size='sm'>
                                                          Sim
                                                        </Radio>
                                                        <Radio colorScheme="secondary" value="2" size='sm'>
                                                          Não
                                                        </Radio>
                                                        <Radio colorScheme="yellow" value="3" size='sm'>
                                                          N/A
                                                        </Radio>
                                                    </Stack>
                                                  </Radio.Group>
                                             
                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> TODOS OS TRABALHADORES CONHECEM OS PROCEDIMENTOS EM CASO DE OCORRÊNCIA DE UM ACIDENTE AMBIENTAL? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>
                                        
                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> NO AMBIENTE EM QUE SE VAI DESENVOLVER A ATIVIDADE EXISTEM CONDIÇÕES PARA UMA CORRETA MANUTENÇÃO E UTILIZAÇÃO DOS VEÍCULOS E EQUIPAMENTOS?</Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> EXISTEM FICHAS DE DADOS DE SEGURANÇA DOS PRODUTOS QUÍMICOS?</Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> OS PRODUTOS QUÍMICOS ESTÃO DEVIDAMENTE IDENTIFICADOS E ARMAZENADOS? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                        <View style={[styles.container, styles.step1]}>

                                        <Text style={styles.currentText}> O LOCAL EM QUE SE VAI DESENVOLVER A ATIVIDADE ESTÁ LIMPO E ORGANIZADO? </Text>


                                        <Radio.Group name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}> 
                                        <Stack direction={{
                                              base: "row",
                                              md: "row"
                                            }} alignItems={{
                                              base: "center",
                                              md: "center"
                                            }} space={10} w="75%" alignSelf={'center'} maxW="300px">
                                            <Radio colorScheme="emerald" value="1" size='sm'>
                                              Sim
                                            </Radio>
                                            <Radio colorScheme="secondary" value="2" size='sm'>
                                              Não
                                            </Radio>
                                            <Radio colorScheme="yellow" value="3" size='sm'>
                                              N/A
                                            </Radio>
                                        </Stack>
                                        </Radio.Group>

                                        </View>

                                          <Text style={styles.currentText}> Observações </Text>
                                          <TextArea borderColor={'black'} width={'80%'} alignSelf='center' aria-label="t1Disabled" placeholder="" isDisabled autoCompleteType={undefined} />

                                    </ScrollView>
                                </KeyboardAvoidingView>
                            </VStack>

                        </SafeAreaView>
              </VStack>
            );
          }








    function Screen5() {

                const data = [

                    {
                        gerador: '',
                        horas_anteriores: '0',
                        horas_atuais: '1100',
                        horas_d_reabastecimento: '0' ,
                        razao_d_reabastecimento: 'Diesel Stolen',
                    },
                    {
                      gerador: '1',
                      horas_anteriores: '5',
                      horas_atuais: '3200',
                      horas_d_reabastecimento: '1' ,
                      razao_d_reabastecimento: 'Diesel Lost',
                  }
                  
                ];

    
    type Nav ={
      navigate : (value: string) => void;
  }
    const { navigate } = useNavigation<Nav>();
    
    async function handleDropDownItems(position){
        let val_sec = await Array.from({ length: data.length}, (v,p) => false)
        val_sec[position] = true;
        setShouldShow(val_sec);
      }
  
      async function handleHideItems(position){
        let val_sec = await Array.from({ length: data.length}, (v,p) => false)
        setShouldShow(val_sec);
      }

    const val_init = Array.from({ length: data.length}, (v,p) => false);
    const [shouldShow, setShouldShow] = useState(val_init);

    const oneUser = ( {item} ) =>(
        <View style={styles.item}>

            <Box flexDirection={'row'}>
           
            <Text fontFamily={fonts.body} color={colors.primary[600]} marginLeft={4}>{item.horas_anteriores}</Text>

        

            </Box>
           
       
        </View>   
    )

    function itemSeparator(){
        return <View style={styles.separator}/>
    }

    const { fonts } = useTheme();
    const { colors } = useTheme();

  return (
    <VStack flex={1} bg="white">

         <SafeAreaView style={styles.container}>

              <VStack flex={1} px={6} mt='6%'>

                  <View  mb={'60%'}> 

                  <View alignItems='center' justifyItems={'center'} justifyContent='center' display='flex' mt={4}>
                        <Text color='#12375C' fontFamily={fonts.body} fontSize='md' alignSelf={'center'}>
                           DETALHES DO GERADOR
                        </Text>
                  </View>

                      <FlatList 
                          data = {data}
                          renderItem = { oneUser }
                          ItemSeparatorComponent = { itemSeparator }
                          ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de gerador</Text>}
                          keyExtractor = { data => data.id }
                          showsVerticalScrollIndicator={false}
                      />
                      <View  alignItems='flex-end' justifyContent='center' display='flex' position='absolute' marginLeft='90%' mt={'123%'} >
                          <ButtonHandle
                              title='+'
                              w={14}
                              onPress={() => {
                                  navigate("UsersRegist") as never;
                              }}

                          />
                            </View>

                    </View>

              </VStack>

          </SafeAreaView>
    </VStack>
        );
      }






          function Screen6() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

        

            return (
              <ScrollView>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>MOTOR</Text>

          </ScrollView>
            );
          }





          function Screen7() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

              return (
              <ScrollView >
                            <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                            >CAMERA</Text>
                            
                          

                        </ScrollView>
            );
          }


       
        
       





          function Screen8() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

              
            return (

                <ScrollView>
                <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                >SEGURANÇA</Text>

            

                 </ScrollView> 
            );
          }



          

          function Screen9() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

              
            return (

                <ScrollView>
                <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                >SEGURANÇA</Text>

            

                 </ScrollView> 
            );
          }

              
          
          const Tab = createMaterialTopTabNavigator();

          export default function FormCorCompletos() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            return (
              <>
             <HStack my={'3%'} textAlign={'center'} justifyContent="center" alignItems='center' flexDirection="row">
             <View>
             <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
             Detalhes de Manutenção Correctiva
             </Text>
             </View>
             </HStack>
               

              <Tab.Navigator
                initialRouteName="one"
                screenOptions={{
                  swipeEnabled: true,
                  tabBarShowLabel: false,
                  tabBarActiveTintColor: colors.green[700],
                  tabBarInactiveTintColor: colors.gray[600],
                }}
              >
                <Tab.Screen
                  name="one"
                  component={Screen1}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Note color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="two"
                  component={Screen2}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<User color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="three"
                  component={Screen3}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<MagnifyingGlass color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="four"
                  component={Screen4}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<MagnifyingGlass color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="five"
                  component={Screen5}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Lightning color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="six"
                  component={Screen6}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<LightbulbFilament color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="seven"
                  component={Screen7}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<Wrench color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="eight"
                  component={Screen8}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Archive color={color} size={size}/>} />
                      )),
                  }}
                />
                   <Tab.Screen
                  name="nine"
                  component={Screen9}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<Eye color={color} size={size}/>} />
                      )),
                  }}
                />
                               
              </Tab.Navigator>
              </>
             
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
            txtInput:{
              backgroundColor: '#fff',
              textColor: '#12375C',
              width: 300,
              fontSize: 12,
              textAlign: 'center',
              height: 50
          }, 
          step1: {
            flex: 1
          },
          currentStepText:{
            color: colors.gray_dark,
            fontSize: 16,
            fontFamily: fonts.text
          },
          currentText: {
            color: colors.gray_dark,
            fontSize: 14,
            fontFamily: fonts.text, 
            marginBottom: 30,
            marginTop: 30,
            textAlign: "center",
            letterSpacing: 0.8
          },
          separator:{
            height: 1,
            width: '100%',
            backgroundColor: '#f2f2f2'
        },
        item:{
            flex:1,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingVertical:13
        },
        avatarContainer:{
            backgroundColor: '#f5f5f5',
            borderRadius: 100,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
        avatar:{
            height: 35,
            width: 35,
        }
        })