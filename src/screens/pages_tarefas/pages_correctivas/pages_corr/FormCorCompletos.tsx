import * as React from 'react';
import {  StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Archive, Eye, Info, LightbulbFilament, Lightning, MagnifyingGlass, Note, User, Wrench, Image} from 'phosphor-react-native';
import { View, Text, Icon, useTheme, VStack, HStack, ScrollView, Box, CheckIcon, Select, Radio, Stack, TextArea} from 'native-base';

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



                                          <View
                                            borderBottomColor={'#12375C'}
                                            borderBottomWidth={4}
                                            width="100%"
                                            alignSelf={'center'}
                                            my={'10%'}/>



                                        <View alignItems='center' justifyItems={'center'} justifyContent='center' display='flex'>
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









      function Screen4() {

      const data = [

          {
              id: 1,
              gerador: 'Toyama',
              horas_anteriores: '0',
              horas_atuais: '1100',
              horas_d_reabastecimento: '0' ,
          },
          {
            id: 2,
            gerador: 'Vonder',
            horas_anteriores: '5',
            horas_atuais: '3200',
            horas_d_reabastecimento: '1' ,
            }
        
      ];

      type Nav ={
        navigate : (value: string) => void;
    }
      const { navigate } = useNavigation<Nav>();
  
      const oneUser = ( {item} ) =>(
          <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>

              <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}  >{item.gerador}</Text>
              <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.horas_anteriores}</Text>
              <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.horas_atuais}</Text>
              <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.horas_d_reabastecimento}</Text>

              <TouchableOpacity onPress={() => alert('A tela de detalhes ainda nao foi feita')}>
                <Icon as ={<Info color={colors.blueGray[400]}/>} />
              </TouchableOpacity>

          </HStack>   
      )

      function itemSeparator(){
          return <View style={styles.separator}/>
      }

      const { fonts } = useTheme();
      const { colors } = useTheme();

        return (
          <SafeAreaView style={styles.container}>

                  <VStack bg="white" mb={'60%'} width={'100%'}>

                          <Text
                              color='#12375C'
                              mt={'8%'}
                              mb={'4%'}
                              fontFamily={fonts.body}
                              fontSize='md'
                              alignSelf={'center'}>
                              DETALHES DO GERADOR
                          </Text>

                          <HStack justifyContent={'space-evenly'}>
                            
                                  <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Gerador </Text>
                                  <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> H. Anteriores </Text>
                                  <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> H. Actuais </Text>
                                  <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> H. Reabast. </Text>
                                  <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                          </HStack>

                      <FlatList 
                            data = {data}
                            renderItem = { oneUser }
                            ItemSeparatorComponent = { itemSeparator }
                            ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de gerador</Text>}
                            keyExtractor = { data => data.id }
                            showsVerticalScrollIndicator={false}
                        />

                  </VStack>

          </SafeAreaView>
          );


        }






          function Screen5() {

            const data = [

                {
                    id: 1,
                    actual_kwh: '5',
                    kwh_posterior: '6',
                    valor_adicionado: '1',
                },
                {
                    id: 2,
                    actual_kwh: '3',
                    kwh_posterior: '5',
                    valor_adicionado: '2',
                }
              
            ];

                type Nav ={
                  navigate : (value: string) => void;
              }
                const { navigate } = useNavigation<Nav>();
            
                const oneUser = ( {item} ) =>(
                    <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>

                        <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}  >{item.actual_kwh}</Text>
                        <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.kwh_posterior}</Text>
                        <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.valor_adicionado}</Text>

                        <TouchableOpacity onPress={() => alert('A tela de detalhes ainda nao foi feita')}>
                          <Icon as ={<Info color={colors.blueGray[400]}/>} />
                        </TouchableOpacity>

                    </HStack>   
                )

                function itemSeparator(){
                    return <View style={styles.separator}/>
                }

                const { fonts } = useTheme();
                const { colors } = useTheme();

                  return (
                    <SafeAreaView style={styles.container}>

                            <VStack bg="white" mb={'60%'} width={'100%'}>

                                    <Text
                                        color='#12375C'
                                        mt={'8%'}
                                        mb={'4%'}
                                        fontFamily={fonts.body}
                                        fontSize='md'
                                        alignSelf={'center'}>
                                        DETALHES DE ENERGIA
                                    </Text>

                                    <HStack justifyContent={'space-evenly'}>
                                      
                                            <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Actual Kw/h </Text>
                                            <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Kw/h Posterior </Text>
                                            <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Valor Adicionado </Text>
                                            <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                    </HStack>

                                <FlatList 
                                      data = {data}
                                      renderItem = { oneUser }
                                      ItemSeparatorComponent = { itemSeparator }
                                      ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de ENERGIA</Text>}
                                      keyExtractor = { data => data.id }
                                      showsVerticalScrollIndicator={false}
                                  />

                            </VStack>

                    </SafeAreaView>
                    );



          }





          function Screen6() {

           const data = [

                {
                    id: 1,
                    tipo_de_equip: 'Condensor',
                    modelo: 'a',
                    nr_de_serie: '1223',
                },
                {
                    id: 2,
                    tipo_de_equip: 'Condensor',
                    modelo: 'c',
                    nr_de_serie: '24555',
                }
              
            ];

                type Nav ={
                  navigate : (value: string) => void;
              }
                const { navigate } = useNavigation<Nav>();
            
                const oneUser = ( {item} ) =>(
                    <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>

                        <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}  >{item.tipo_de_equip}</Text>
                        <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.modelo}</Text>
                        <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.nr_de_serie}</Text>

                        <TouchableOpacity onPress={() => alert('A tela de detalhes ainda nao foi feita')}>
                          <Icon as ={<Info color={colors.blueGray[400]}/>} />
                        </TouchableOpacity>

                    </HStack>   
                )

                function itemSeparator(){
                    return <View style={styles.separator}/>
                }

                const { fonts } = useTheme();
                const { colors } = useTheme();

                  return (
                    <SafeAreaView style={styles.container}>

                            <VStack bg="white" mb={'60%'} width={'100%'}>

                                    <Text
                                        color='#12375C'
                                        mt={'8%'}
                                        mb={'4%'}
                                        fontFamily={fonts.body}
                                        fontSize='md'
                                        alignSelf={'center'}>
                                        DETALHES DE EQUIPAMENTOS
                                    </Text>

                                    <HStack justifyContent={'space-evenly'}>
                                      
                                            <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Tipo de Equipamento </Text>
                                            <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C' mx={'2%'}> Modelo </Text>
                                            <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Número de Série </Text>
                                            <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                    </HStack>

                                <FlatList 
                                      data = {data}
                                      renderItem = { oneUser }
                                      ItemSeparatorComponent = { itemSeparator }
                                      ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de REPARAÇÃO DE EQUIPAMENTOS</Text>}
                                      keyExtractor = { data => data.id }
                                      showsVerticalScrollIndicator={false}
                                  />

                            </VStack>

                    </SafeAreaView>
                    );



          }


       
        
       





          function Screen7() {
           
            const data = [

              {
                  id: 1,
                  item: 'AC - DB 12000 btu- R410a FG12HN/AG12HN',
                  qtd_usada: '1',
              },
              {
                  id: 2,
                  item: 'AC - DB 12000 btu- R410a FG12HN/AG12HN',
                  qtd_usada: '4',
              }
            
          ];

              type Nav ={
                navigate : (value: string) => void;
            }
              const { navigate } = useNavigation<Nav>();
          
              const oneUser = ( {item} ) =>(
                  <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>

                      <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}  >{item.item}</Text>
                      <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.qtd_usada}</Text>
                      
                      <TouchableOpacity onPress={() => alert('A tela de detalhes ainda nao foi feita')}>
                        <Icon as ={<Info color={colors.blueGray[400]}/>} />
                      </TouchableOpacity>

                  </HStack>   
              )

              function itemSeparator(){
                  return <View style={styles.separator}/>
              }

              const { fonts } = useTheme();
              const { colors } = useTheme();

                return (
                  <SafeAreaView style={styles.container}>

                          <VStack bg="white" mb={'60%'} width={'100%'}>

                                  <Text
                                      color='#12375C'
                                      mt={'8%'}
                                      mb={'4%'}
                                      fontFamily={fonts.body}
                                      fontSize='md'
                                      alignSelf={'center'}>
                                      SOBRESSALENTE USADO
                                  </Text>

                                  <HStack justifyContent={'space-evenly'}>
                                    
                                          <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Item </Text>
                                          <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C' mx={'2%'}> Quantidade usada </Text>
                                          
                                  </HStack>

                              <FlatList 
                                    data = {data}
                                    renderItem = { oneUser }
                                    ItemSeparatorComponent = { itemSeparator }
                                    ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de REPARAÇÃO DE EQUIPAMENTOS</Text>}
                                    keyExtractor = { data => data.id }
                                    showsVerticalScrollIndicator={false}
                                />

                          </VStack>

                  </SafeAreaView>
                  );


          }



          

          function Screen8() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

              
            return (

                <ScrollView>
                <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                >FOTOS</Text>

            

                 </ScrollView> 
            );
          }



               function Screen9() {

                const data = [

                  {
                      id: 1,
                      nome: 'Jaime Chitereca',
                      data_accao: '28/11/2022 10:52\nTT number criado',
                  },
                  {
                      id: 2,
                      nome: 'Jose Tovela',
                      data_accao: '08/10/2022 14:27\nAccept the jobcard',
                  },
                  {
                    id: 3,
                    nome: 'João Bagvanji',
                    data_accao: '18/11/2022 11:32\nInformação de viagem',
                }
                
              ];
    
                  type Nav ={
                    navigate : (value: string) => void;
                }
                  const { navigate } = useNavigation<Nav>();
              
                  const oneUser = ( {item} ) =>(
                      <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>
    
                          <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}  >{item.nome}</Text>
                          <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.data_accao}</Text>
                 
                      </HStack>   
                  )
    
                  function itemSeparator(){
                      return <View style={styles.separator}/>
                  }
    
                  const { fonts } = useTheme();
                  const { colors } = useTheme();
    
                    return (
                      <SafeAreaView style={styles.container}>
    
                              <VStack bg="white" mb={'60%'} width={'100%'}>
    
                                      <Text
                                          color='#12375C'
                                          mt={'8%'}
                                          mb={'4%'}
                                          fontFamily={fonts.body}
                                          fontSize='md'
                                          alignSelf={'center'}>
                                          AUDITORIA
                                      </Text>
    
                                      <HStack justifyContent={'space-evenly'}>
                                        
                                              <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Responsável</Text>
                                              <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C' mx={'2%'}> Data - Acção</Text>
                                      </HStack>
    
                                  <FlatList 
                                        data = {data}
                                        renderItem = { oneUser }
                                        ItemSeparatorComponent = { itemSeparator }
                                        ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de REPARAÇÃO DE EQUIPAMENTOS</Text>}
                                        keyExtractor = { data => data.id }
                                        showsVerticalScrollIndicator={false}
                                    />
    
                              </VStack>
    
                      </SafeAreaView>
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
                          <Icon as ={<Lightning color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="five"
                  component={Screen5}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<LightbulbFilament color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="six"
                  component={Screen6}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<Wrench color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="seven"
                  component={Screen7}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Archive color={color} size={size}/>} />
                      )),
                  }}
                />
                    <Tab.Screen
                  name="eight"
                  component={Screen8}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<Image color={color} size={size}/>} />
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
            justifyContent:'space-evenly',
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