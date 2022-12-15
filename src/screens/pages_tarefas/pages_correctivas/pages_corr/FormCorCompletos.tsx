import * as React from 'react';
import {  StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, FlatList, TouchableOpacity, useWindowDimensions, Image as RNimage, ActivityIndicator, Dimensions} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Archive, Eye, Info, LightbulbFilament, Lightning, MagnifyingGlass, Note, User, Wrench, Image} from 'phosphor-react-native';
import { View, Text, Icon, useTheme, VStack, HStack, ScrollView, Box, CheckIcon, Select, Radio, Stack, TextArea} from 'native-base';

import {useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import Pictures from './Pictures';

import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles//fonts';

import ShowPicByUrl from './ShowPicByUrl';
import ShowPicByUri from './ShowPicByUri';

import InfoGerador from './corr_info/InfoGerador';
import InfoEnergia from './corr_info/InfoEnergia';
import InfoEquip from './corr_info/infoEquip';
import InfoSpare from './corr_info/InfoSpare';

import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';


          const StackRoutes = createStackNavigator();

      
      function Screen1() {


            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [razao, setRazao] = useState('');
            
            const [ abastecimento, setAbastecimento ] = useState("");

            const [ value, setValue ] = useState("");

            const [ preco, setPreco ] = useState("");

            const [openRazao, setOpenRazao] = useState(false);
            const [valueRazao, setValueRazao] = useState([]);
            const [itemsRazao, setItemsRazao] = useState([
                {label: 'AC Mains Failure', value: 'AC Mains Failure'},
                {label: 'Rectifier System', value: 'Rectifier System'},
                {label: 'Rectifier Module', value: 'Rectifier Module'},
                {label: 'Generator Low Fuel', value: 'Generator Low Fuel'},
                {label: 'Generator Abnormal', value: 'Generator Abnormal'},
                {label: 'Generator Running', value: 'Generator Running'},
                {label: 'High Temperature', value: 'High Temperature'},
                {label: 'Battery Low', value: 'Battery Low'},
                {label: 'Door Switch Intruder', value: 'Door Switch Intruder'},
                {label: 'Motion Detector', value: 'Motion Detector'},
                {label: 'FAN Stalled', value: 'FAN Stalled'},
                {label: 'Smoke Detector', value: 'Smoke Detector'},
                {label: 'Site Down', value: 'Site Down'},
                {label: 'RRU replacement', value: 'RRU replacement'},
                {label: 'RRU fiber', value: 'RRU fiber'},
                {label: 'Fly leads', value: 'Fly leads'},
                {label: 'UBBP board', value: 'UBBP board'},
                {label: 'WBBP board', value: 'WBBP board'},
                {label: 'BBU board', value: 'BBU board'},
                {label: 'RTN905 RTN950', value: 'RTN905 RTN950'},
                {label: 'RTN controller board', value: 'RTN controller board'},
                {label: 'RTN Fan unit', value: 'RTN Fan unit'},
                {label: 'OSN fan unit', value: 'OSN fan unit'},
                {label: 'ODU replacement', value: 'ODU replacement'},
                {label: 'Patch Cords', value: 'Patch Cords'},
                {label: 'Outdoor cabinet cooling system', value: 'Outdoor cabinet cooling system'},
              ]);

       

    
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
                                    <Select.Item label="Core-data center" value="Core-data center" />
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
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Razão </Text>
                        </View>
                        
                        <View style={{
                                marginBottom: '2%',
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: '8%'
                                }}>
                                <DropDownPicker
                                 listMode="MODAL"
                                       textStyle={{
                                        fontSize: 14
                                    }}
                                    placeholder="Escolha a opção"
                                    open={openRazao}
                                    value={valueRazao}
                                    items={itemsRazao}
                                    setOpen={setOpenRazao}
                                    setValue={setValueRazao}
                                    setItems={setItemsRazao}
                                    multiple={true}
                                   // theme="DEFAULT"
                                    mode="BADGE"
                                    badgeDotColors={["#A1C861"]}
                                    />
                        </View>

                        <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Acção correctiva"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                            </View>

                        
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Ocorreram problemas de Saúde e Segurança? </Text>
                        </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={preco} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setPreco(itemValue)}>
                                <Select.Item label="Sim" value="Sim" />
                                <Select.Item label="Não" value="Não" />
                              </Select>
                            </Box>
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
            
              <TouchableOpacity onPress={() => navigate('InfoGerador')}>
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

                        <TouchableOpacity onPress={() => navigate('InfoEnergia')}>
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

                        <TouchableOpacity onPress={() => navigate('InfoEquip')}>
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
                                        REPARAÇÃO DE EQUIPAMENTOS
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
                      
                      <TouchableOpacity onPress={() => navigate('InfoSpare')}>
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





          function Screen8({navigation}) {

            const { fonts } = useTheme();
            const { colors } = useTheme();
        
          const [images, setImages] = useState([]);
          const [isLoading, setIsLoading] = useState(false);
          const { width } = useWindowDimensions();

          let deviceHeight = Dimensions.get('window').height;
          let deviceWidth = Dimensions.get('window').width;

        
                     const pictures = [
                {
                    id: 1,
                    image: require('../../../../assets/tecnicos/jobcardphoto1.png'),
               
                },
                {
                    id: 2,
                        image: require('../../../../assets/tecnicos/jobcardphoto2.png'),
                },
                {
                    id: 3,
                    image: require('../../../../assets/tecnicos/jobcardphoto3.png'),
                },
                {
                    id: 4,
                    image: require('../../../../assets/tecnicos/jobcardphoto4.png'),
                },
                {
                    id: 5,
                    image: require('../../../../assets/tecnicos/jobcardphoto5.png'),
                },
                {
                    id: 6,
                
                    image: require('../../../../assets/tecnicos/jobcardphotoinfo6.png'),
                },
                {
                    id: 7,
                    image: require('../../../../assets/tecnicos/jobcardphoto7.png'),
                  
                },
                {
                    id: 8,
                    image: require('../../../../assets/tecnicos/jobcardphoto8.png'),
                }
                    ];
        
        
                    const pickFromGal = async () => {
                      // No permissions request is necessary for launching the image library
                      setIsLoading(true);
          
                      let  resultados = await ImagePicker.launchImageLibraryAsync({
                              mediaTypes: ImagePicker.MediaTypeOptions.Images,
                              // allowsEditing: true,
                              allowsMultipleSelection: true,
                              selectionLimit: 10,
                              aspect: [4, 3],
                              quality: 1,
                          });
          
                          setIsLoading(false);
                          console.log(resultados);
                      
                          resultados.assets.forEach(element => {
                              
                              if (!resultados.canceled) {
                                  setImages(resultados.assets);
                                  }
                          });
                          
                  };
          
        
                    
                                        
            return (
            <VStack flex={1} pb={4} mb={16} bg="white">
        
                <SafeAreaView style={styles.container}>
        
                <ScrollView mb='12%'>
            
                <FlatList
                    scrollEnabled={false}
                    data={pictures}
                    renderItem={({ item }) => (

                      <View borderWidth={3} borderColor={'white'}>

                          <TouchableOpacity onPress={() =>   navigation.navigate('ShowPicByUrl', {url: item.image}) }>
                              <RNimage
                              source={item.image}
                              style={{ width: width / 2, height: 250 }}
                              />
                          </TouchableOpacity>

                      </View>

                    )}
                    numColumns={2}
                    keyExtractor={(item) => item.image}
                    contentContainerStyle={{ marginVertical: 10}}
                    ListHeaderComponent={
                    <Text
                      color='#12375C'
                      mt={'8%'}
                      mb={'4%'}
                      fontFamily={fonts.body}
                      fontSize='md'
                      alignSelf={'center'}>
                      FOTOS
                      </Text>

                    }
                />






                          <View alignItems='center' justifyContent='center' display='flex' >
                                <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> ADICIONAR FOTOS</Text>
                            </View>
        
                            <FlatList
                    scrollEnabled={false}
                    data={images}
                    renderItem={({ item }) => (

                      <View borderWidth={3} borderColor={'white'}>

                          <TouchableOpacity onPress={() =>   navigation.navigate('ShowPicByUri', {uri: item.uri}) }>
                              <RNimage
                              source={{uri: item.uri}}
                              style={{ width: width / 2, height: 250 }}
                              />
                          </TouchableOpacity>

                      </View>

                    )}
                    numColumns={2}
                    keyExtractor={(item) => item.uri}
                    contentContainerStyle={{ marginVertical: 10}}
                    ListHeaderComponent={
                      isLoading ? (
                      <View>
                          <Text
                          style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                          A carregar...
                          </Text>
                          <ActivityIndicator size={"large"} />
                      </View>
                      ) : (
                    
                      <HStack mb={'3%'} alignContent={'center'} justifyContent={'space-evenly'}>
                          
                          <TouchableOpacity style={styles.formButton} onPress={pickFromGal}>
                                <Image size={22} color={'#A1C861'} />
                                <Text style={styles.text}> Galeria</Text>
                          </TouchableOpacity>

                      </HStack>
          )
      }
                />

                            
                    </ScrollView>
        
                </SafeAreaView>
            </VStack> 
          );
        };

          




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
                    data_accao: '18/11/2022 11:32\nInfo de viagem',
                }
                
              ];
    
                  type Nav ={
                    navigate : (value: string) => void;
                }
                  const { navigate } = useNavigation<Nav>();
              
                  const oneUser = ( {item} ) =>(
                      <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>
    
                          <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.nome}</Text>
                          <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.data_accao}</Text>
                 
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

          
          function Screen10(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen8'>
                          <StackRoutes.Screen name='Screen8' component={Screen8}/>
                            <StackRoutes.Screen name='Screen4' component={Screen4}/>
                            <StackRoutes.Screen name='ShowPicByUrl' component={ShowPicByUrl}/>
                            <StackRoutes.Screen name='ShowPicByUri' component={ShowPicByUri}/>
                            <StackRoutes.Screen name='InfoGerador' component={InfoGerador}/>
                        </StackRoutes.Navigator>
                );

          }


          function Screen11(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen4'>
                            <StackRoutes.Screen name='Screen4' component={Screen4}/>
                            <StackRoutes.Screen name='InfoGerador' component={InfoGerador}/>
                        </StackRoutes.Navigator>
                );

          }    




          function Screen12(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen5'>
                            <StackRoutes.Screen name='Screen5' component={Screen5}/>
                            <StackRoutes.Screen name='InfoEnergia' component={InfoEnergia}/>
                        </StackRoutes.Navigator>
                );

          }    
          
          

          function Screen13(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen6'>
                            <StackRoutes.Screen name='Screen6' component={Screen6}/>
                            <StackRoutes.Screen name='InfoEquip' component={InfoEquip}/>
                        </StackRoutes.Navigator>
                );

          }    

          function Screen14(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen7'>
                            <StackRoutes.Screen name='Screen7' component={Screen7}/>
                            <StackRoutes.Screen name='InfoSpare' component={InfoSpare}/>
                            <StackRoutes.Screen name='ShowPicByUrl' component={ShowPicByUrl}/>
                        </StackRoutes.Navigator>
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
                  component={Screen11}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Lightning color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="five"
                  component={Screen12}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<LightbulbFilament color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="six"
                  component={Screen13}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<Wrench color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="seven"
                  component={Screen14}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Archive color={color} size={size}/>} />
                      )),
                  }}
                />
                    <Tab.Screen
                  name="eight"
                  component={Screen10}
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
            text:{   
              textAlign: 'center',
              color: '#A1C861',
              fontFamily: fonts.heading,
              marginVertical: "10%"
          },
            formButton:{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.blue_light,
              height: 60,
              width:'50%',
              border: '5%',   
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