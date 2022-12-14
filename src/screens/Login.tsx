import { VStack, Icon, useTheme, View, HStack,Text, Alert } from 'native-base';
import { SignIn, Key, User } from 'phosphor-react-native'
import { useEffect, useState, useContext } from 'react';
import {  TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';


import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';

import { Context } from '../context/AuthContext';
import api from "../services/api";
import axios from 'axios';
import Logo from '../assets/eagle I 1.svg' ;
import { Button } from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
export default function Login({history}){
    type Nav = {
        navigate: (value:string) => void;
    }
    const { navigate } = useNavigation<Nav>();

    function handleLogin(){
        navigate('Home') as never;
    }
    const { colors } = useTheme();
    const { fonts } = useTheme();
    const [isLoading, setIsLoading] = useState(false);

    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    

    const validate=()=>{
        if(email == ""){
            alert ('Preencha o e-mail')
            return false
        } else if(password == ""){
            alert ('Preencha a senha')
            return false
        }
        return true
    }

    const chamar_api=()=>{
        if(validate()){
           alert('Sucesso!') 
        }
    }

    

    
    const loginUser = async (email, senha) => {
        const axiosinstant=axios.create({baseURL:"http://192.168.0.133:3000/"});
        
        navigate("Home") as never;
        // try {
        //     await axiosinstant.post("LogIn",{email:email,senha:senha}).then(async d=>{
        //     if(true){
        //         await AsyncStorage.setItem("token", d.data.token);
        //         navigate("Home") as never;
        //     }else {
        //         navigate('Login')   
        //     }
        //     console.log(d.data)

        // });
        // } catch (e) {
        // console.log(e);
        // }
        
      };
             

    return(
        <VStack flex={1} alignItems="center" bg="white" px={8} pt={8} justifyContent='center'>
            < Logo/>
            <HStack  mb={4} justifyContent="center" alignItems='center'>
                <Text fontFamily={fonts.heading} color="secondary.700" fontSize="xl" mt={20} mb={6} alignItems='center'>
                    Acesse a tua conta
                </Text>
            </HStack>

            <View style={styles.uinputView}>
                <EmailInput value={email} setValue={setEmail}/>
            </View>
            <View style={styles.pinputView}>
                <PasswordInput
                    value={password}
                    setValue={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
            </View>
            

            <Button 
                leftIcon={<Icon as={<SignIn color={colors.green[700]}/>} ml={4}/>}
                title='Entrar'
                w="full"
                onPress={() => {
                    loginUser(email, password);
                    // chamar_api();
                }}
            />
        </VStack>

    )
}

const styles= StyleSheet.create({
    uinputView:{
        marginTop: "5%",
        height:56,
        width: "100%",
        justifyContent: 'center',
        borderRadius: 6,
    },

    pinputView:{
        marginVertical: "8%",
        width: "100%",
        height:56,
        justifyContent: 'center',
        borderRadius: 6
    },

    txtInput:{
        backgroundColor: '#e0edf9',
        textColor: '#12375C',
       
    }, 
    buttonIcon:{
        fontSize: 16,
        color: '#12375c'
    },
})