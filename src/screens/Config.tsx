import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Select, Box, ScrollView, CheckIcon, Image  } from 'native-base';
import { UserPlus , FloppyDisk, XCircle, UserGear, Pencil  } from 'phosphor-react-native'

import * as ImagePicker from 'expo-image-picker';

import {  StyleSheet, KeyboardAvoidingView,Platform, Button as Buttons} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Nome from '../components/Nome'
import CellPhone from '../components/CellPhone';
import EmailUser from '../components/EmailUser';
import Username from '../components/Username';
import PasswordUser from '../components/PasswordUser';
import { Button } from '../components/Button';
import { ButtonHandle } from '../components/ButtonHandle';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Gerador from './pages_config/Gerador';



import Idioma from '../components/Idioma';
import usuario from '../assets/helio.png'
import UserRegisto from './pages_tarefas/pages_projectos/pages/UserRegisto';

const Stack = createStackNavigator();

export default function MyStack() {
  return (

        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Config'>
            <Stack.Screen name="UserRegisto" component={UserRegisto}/>
            <Stack.Screen name="Config" component={Config} />
        </Stack.Navigator>

 
 ); 
}


export  function Config() {

    type Nav ={
        navigate : (value: string) => void;
    }
    const { navigate } = useNavigation<Nav>()
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [ disposicao, setDisposicao ] = useState("");
    const [ abastecimento, setAbastecimento ] = useState("");
    const [ repair, setRepair ] = useState("");
    const [ value, setValue ] = useState("");
    const [ preco, setPreco ] = useState("");
    const [ details, setDetails ] = useState("");
    const [ cellphone, setCellphone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");

    //Upload image
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };
    //end update image
    
  return (
    <VStack flex={1} pb={4} mb={16} bg="white">
        <SafeAreaView style={styles.container}>
        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Configurações
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Do Usuário
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<UserGear color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Image source={usuario} borderRadius={60} resizeMode='contain' height={32} width={32} alt='Missao e Visao'/>
                    </View>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='Primary.500' fontFamily={fonts.body} fontSize='md'> Dados Pessoais</Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                    <View style={styles.uinputView}>
                        <Nome value={disposicao} setValue={setDisposicao}/>
                    </View>

                    <View style={styles.uinputView}>
                        <CellPhone value={cellphone} setValue={setCellphone}/>
                    </View>

                    <View style={styles.uinputView}>
                        <EmailUser value={email} setValue={setEmail}/>
                    </View>

                    <View style={styles.uinputView}>
                        <Idioma value={details} setValue={setDetails}/>
                    </View>

                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={5}/>

                    <View style={styles.uinputView}>
                        <Username value={name} setValue={setName}/>
                    </View>

                    <View style={styles.uinputView}>
                        <PasswordUser value={password} setValue={setPassword}/>
                    </View>

                    <View marginLeft='70%' marginTop='10%' mb="5%" alignItems='center' justifyContent='space-around' display='flex' flexDirection='row'>
                        <View style={styles.uinputViewbutton}>
                        <ButtonHandle
                            title=''
                            startIcon={<Icon as={<Pencil color={colors.green[700]} size={20}/>} ml={2} alignItems='center'/>}
                            w={14}
                            onPress={() => {
                                navigate("UserRegisto") as never;
                            }}
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