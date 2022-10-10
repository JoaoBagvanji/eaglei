import { VStack, Icon, useTheme, View, HStack,Text } from 'native-base';
import { SignIn, Key, User } from 'phosphor-react-native'
import { useState } from 'react';
import {  TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import Logo from '../assets/eagle I 1.svg' ;
import { Button } from '../components/Button';
import { Fontisto } from '@expo/vector-icons';



export default function Login(){
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
    

    return(
        <VStack flex={1} alignItems="center" bg="white" px={8} pt={8} justifyContent='center'>
            < Logo />
            <HStack  mb={4} justifyContent="center" alignItems='center'>
                <Text fontFamily={fonts.heading} color="secondary.700" fontSize="xl" mt={20} mb={6} alignItems='center'>
                    Acesse a tua conta
                </Text>
            </HStack>

            <View style={styles.uinputView}>
                <TextInput 
                    style={styles.txtInput} 
                    selectionColor='#12375C' 
                    outlineColor='#cce3f9'
                    activeOutlineColor='#12375C' 
                    underlineColor='#12375C' 
                    left={<TextInput.Icon icon={User}
                    color={colors.primary[600]} />}
                    mode="outlined"
                    label="Username"
                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                    
                />
            </View>
            <View style={styles.pinputView}>
                <TextInput 
                    style={styles.txtInput} 
                    selectionColor='#12375C' 
                    outlineColor='#cce3f9'
                    activeOutlineColor='#12375C' 
                    left={<TextInput.Icon icon={Key} 
                    color={colors.primary[600]}/>}
                    mode="outlined" 
                    secureTextEntry={true} 
                    label="Password"
                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                    
                />
            </View>

            <Button 
                leftIcon={<Icon as={<SignIn color={colors.green[700]}/>} ml={4}/>}
                title='Entrar'
                w="full"
                onPress={handleLogin}
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