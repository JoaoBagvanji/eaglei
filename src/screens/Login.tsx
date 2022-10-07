import { VStack, Heading, Icon, useTheme, View, HStack,Text } from 'native-base';
import { User, Key } from 'phosphor-react-native'
import { useState } from 'react';
import {  Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/eagle I 1.svg' ;
import { Button } from '../components/Button';
import { Input } from '../components/Input';


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
            <Input 
                mb={4}
                placeholder="Username"
                InputLeftElement={<Icon as={<User color={colors.primary[700]}/>} ml={4}/>}
            />

            <Input 
                mb={8}
                placeholder="Password"
                InputLeftElement={<Icon as={<Key color={colors.primary[700]} />} ml={4} />}
                secureTextEntry
                style={{justifyContent: 'flex-end'}}
            />
            <Button 
                title='Entrar'
                w="full"
                onPress={handleLogin}
            />
        </VStack>

    )
}
