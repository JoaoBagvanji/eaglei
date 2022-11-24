import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, Radio   } from 'native-base';
import { Car , FloppyDisk, XCircle  } from 'phosphor-react-native'



import {  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Parque from '../../components/Parque'
import Modelo from '../../components/Modelo';
import Matricula from '../../components/Matricula';
import Marca from '../../components/Marca';
import Ano from '../../components/Ano';
import Kilometragem from '../../components/Kilometragem';
import { Button } from '../../components/Button';
import { ButtonCancel } from '../../components/ButtonCancel';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gerador from '../pages_tarefas/pages_projectos/pages/Gerador';
import { Aprovado } from '../pages_inventario/Aprovado';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
   <NavigationContainer independent={true}>
     <Stack.Navigator  screenOptions={{headerShown: false}} 
             initialRouteName='Aprovado'>
         <Stack.Screen name="Gerador" component={Gerador} />
         <Stack.Screen name="Aprovado" component={Aprovado} />
     </Stack.Navigator>
   </NavigationContainer>
 ); 
}


export  function Atribuido() {
    type Nav ={
        navigate : (value: string) => void;
    }
      const { navigate } = useNavigation<Nav>()
      
    function handleTelas(){
        navigate('Gerador') as never;
    }
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ disposicao, setDisposicao ] = useState("");
    const [ details, setDetails ] = useState("");
    const [ matricula, setMatricula ] = useState("");
    const [ modelo, setModelo ] = useState("");
    const [ kilometragem, setKilometragem ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ ano, setAno ] = useState("");
    

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
                     De Viaturas
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<Car  color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Viatura</Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Motorista </Text>
                    </View>
                    
                    <View style={styles.uinputView}>
                        <Parque value={disposicao} setValue={setDisposicao}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Modelo value={modelo} setValue={setModelo}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Matricula value={matricula} setValue={setMatricula}/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> Região </Text>
                    </View>
                    <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={2} >
                        <Box maxW='300'>
                                <Select selectedValue={details} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                            bg: "primary.500",
                            endIcon: <CheckIcon  size='5' />
                        }} onValueChange={itemValue => setDetails(itemValue)}>
                            <Select.Item label="Sul" value="sul" />
                            <Select.Item label="Centro" value="centro" />
                            <Select.Item label="Norte" value="norte" />
                            </Select>
                        </Box>
                    </View>

                    <View style={styles.uinputView}>
                        <Marca value={marca} setValue={setMarca}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Ano value={ano} setValue={setAno}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Kilometragem value={kilometragem} setValue={setKilometragem}/>
                    </View>

                    <View marginLeft='30%' marginTop='10%' mb='10%' alignItems='center' justifyContent='space-around' display='flex' flexDirection='row'>
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