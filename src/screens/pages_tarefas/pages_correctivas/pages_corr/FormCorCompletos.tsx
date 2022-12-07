import * as React from 'react';
import { Button, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Archive, Calendar, Car, ClosedCaptioning, Eye, FirstAidKit, FloppyDisk, Gauge, Headlights, LightbulbFilament, Lightning, MagnifyingGlass, Note, NumberCircleZero, ThumbsDown, ThumbsUp, User, VideoCamera, Wrench, XCircle} from 'phosphor-react-native';
import { View, Text, Icon, useTheme, VStack, HStack, ScrollView, Box, CheckIcon, Select } from 'native-base';

import {useState } from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import Ano from '../../../../components/Ano';
import { ButtonCancel } from '../../../../components/ButtonCancel';
import CartaConducao from '../../../../components/CartaConducao';
import CellPhone from '../../../../components/CellPhone';
import DataNasc from '../../../../components/DataNasc';
import EmailUser from '../../../../components/EmailUser';
import Kilometragem from '../../../../components/Kilometragem';
import Marca from '../../../../components/Marca';
import Matricula from '../../../../components/Matricula';
import Modelo from '../../../../components/Modelo';
import Nome from '../../../../components/Nome';
import PasswordUser from '../../../../components/PasswordUser';
import Prettycash from '../../../../components/Prettycash';
import Supervisor from '../../../../components/Supervisor';
import Telefone from '../../../../components/Telefone';
import Username from '../../../../components/Username';
import ValidadeCarta from '../../../../components/ValidadeCarta';
import { TextInput } from 'react-native-paper';



          const StackRoutes = createStackNavigator();

      
          function Screen1() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [razao, setRazao] = useState('');
            
            const [ disposicao, setDisposicao ] = useState("");
            const [ abastecimento, setAbastecimento ] = useState("");
            const [ repair, setRepair ] = useState("");
            const [ value, setValue ] = useState("");
            const [ reabastecimento, setReabastecimento ] = useState("");
            const [ funcionamento, setFuncionamento ] = useState("");
            const [ actuais, setActuais ] = useState("");
            const [ reabasteceLitros, setReabasteceLitros ] = useState("");
            const [ preco, setPreco ] = useState("");
            const [ substituido, setSubstituido ] = useState("");
            const [ details, setDetails ] = useState("");
            const [ matricula, setMatricula ] = useState("");
            const [ modelo, setModelo ] = useState("");
            const [ kilometragem, setKilometragem ] = useState("");
            const [ marca, setMarca ] = useState("");
            const [ ano, setAno ] = useState("");
            const [ cellphone, setCellphone ] = useState("");
            const [ email, setEmail ] = useState("");
            const [ prettycash, setPrettycash ] = useState("");
            const [ name, setName ] = useState("");
            const [ password, setPassword ] = useState("");

    
          return (
            <VStack flex={1} bg="white">
            <SafeAreaView style={styles.container}>
            
            <VStack mt='10%' mb='30%'>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} >
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> INFORMAÇÃO BÁSICA</Text>
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
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Razão </Text>
                        </View>
                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={value} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setValue(itemValue)}>
                                <Select.Item label="AC Mains Failure" value="AC Mains Failure" />
                                <Select.Item label="Rectifer Module" value="Rectifer Module" />
                                <Select.Item label="Rectifer System" value="Rectifer System" />
                                <Select.Item label="Generator Low Fuel" value="Generator Low Fuel" />
                                <Select.Item label="Generator Abnormal" value="Generator Abnormal" />
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
                                    label="Acção correctiva"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={razao}
                                    onChangeText={(text) => setRazao(text)}
                                    autoComplete='off'
                                    />
                            </View>
                       
                            
                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Ocorreram problemas de Saúde e Segurança ? </Text>
                        </View>
                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                            <Box maxW='300'>
                                    <Select selectedValue={details} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setDetails(itemValue)}>
                                <Select.Item label="Yes" value="Yes" />
                                <Select.Item label="No" value="No" />
                                    </Select>
                            </Box>
                        </View>













                        <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                            <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> TÉCNICO </Text>
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
                            <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> REPORTE </Text>
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

           
                return (
                  <ScrollView>

                  

              </ScrollView>
            );
          }







          function Screen3() {
            const {colors} = useTheme();
            const {fonts} = useTheme();



            return (
              <ScrollView >
             

          </ScrollView>
            );
          }







          function Screen4() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

                  return (
              <ScrollView >
                        


                        </ScrollView>
            );
          }








          function Screen5() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

           
        

            return (
              <ScrollView>
             
          </ScrollView>
          
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
        })