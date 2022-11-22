import React, {useEffect} from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { MagnifyingGlass, Plus } from 'phosphor-react-native'
import { Header } from '../../components/Header';
import colors from '../../styles/colors';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';

import { StyleSheet, TouchableOpacity } from 'react-native';
import FormTransferencia from '../../routes/trans.routes';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
     <NavigationContainer 
     independent={true}
     >
       <Stack.Navigator  screenOptions={{headerShown: false}} 
               initialRouteName='Transferencia'>
           <Stack.Screen name="Transferencia" component={Transferencia} />
           <Stack.Screen name="FormTransferencia" component={FormTransferencia} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }

export function Transferencia({navigation}) {

    type Nav ={
        navigate : (value: string) => void;
    }
      
    const { navigate } = useNavigation<Nav>()

    const { fonts } = useTheme();
    const { colors } = useTheme();
    
    
  return (
    <VStack flex={1} pb={6} bg="white">
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                    Navegue 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                    entre as Transferências
                </Text>
                </View>
                <Icon as ={<MagnifyingGlass color={colors.green[700]}/>} />
            </HStack>
      </VStack>
    
       <VStack mb={'20%'} mr={'5%'} alignSelf={'flex-end'}>
            <TouchableOpacity style={styles.formButton}  onPress={() => navigate('FormTransferencia') as never}>
                <Plus size={22} color={colors.green[700]} />
            </TouchableOpacity>
       </VStack>

    </VStack>
  );
}

const styles = StyleSheet.create({
    formButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        borderRadius: 25,
        height: 50,
        width:50
}})