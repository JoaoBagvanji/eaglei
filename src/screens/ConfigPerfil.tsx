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
import Gerador from './pages_tarefas/pages_projectos/pages/Gerador';
import Idioma from '../components/Idioma';
import usuario from '../assets/helio.png'
import UserRegisto from './pages_tarefas/pages_projectos/pages/UserRegisto';

const Stack = createStackNavigator();

export default function MyStack() {
  return (

        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='ConfigPerfil'>
            <Stack.Screen name="Gerador" component={Gerador} />
            <Stack.Screen name="UserRegisto" component={UserRegisto}/>
            <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
        </Stack.Navigator>

 
 ); 
}


export  function ConfigPerfil() {

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
                     Do Perfil
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<UserGear color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>
        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        {image && <Image source={{ uri: image }} borderRadius={100} resizeMode='contain' style={{ width: 200, height: 200 }} />}
                        <Button title="Escolhe uma imagem" onPress={pickImage} mt='5%' p='5%' mb='5%'/>
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